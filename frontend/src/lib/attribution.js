/**
 * First-touch and last-touch attribution for Powai lead tracking.
 *
 * Captured once per full page load (not on in-app route changes) and kept
 * for 90 days in localStorage, with a cookie copy when it fits.
 */

const STORAGE_KEY = "doi_powai_attribution";
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const NINETY_DAYS_SECONDS = 90 * 24 * 60 * 60;
const COOKIE_LIMIT = 3800;

export const UTM_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
export const CLICK_FIELDS = ["gclid", "gbraid", "wbraid", "fbclid"];
export const CONTEXT_FIELDS = ["referrer", "landing_page"];
export const CAMPAIGN_FIELDS = [...UTM_FIELDS, ...CLICK_FIELDS];
export const TOUCH_FIELDS = [...CAMPAIGN_FIELDS, ...CONTEXT_FIELDS];

const FIELD_LIMITS = {
  utm_source: 120,
  utm_medium: 120,
  utm_campaign: 150,
  utm_term: 150,
  utm_content: 150,
  gclid: 250,
  gbraid: 250,
  wbraid: 250,
  fbclid: 250,
  referrer: 300,
  landing_page: 300,
};

let memoryRecord = null;

const emptyTouch = (capturedAt) => {
  const touch = { captured_at: capturedAt };
  TOUCH_FIELDS.forEach((key) => {
    touch[key] = "";
  });
  return touch;
};

export const clip = (value, max) => {
  if (value == null) return "";
  return String(value).replace(/\s+/g, " ").trim().slice(0, max);
};

export const isExternalReferrer = (referrer, pageHost) => {
  if (!referrer || !pageHost) return false;
  try {
    const host = new URL(referrer).host;
    return Boolean(host) && host !== pageHost;
  } catch {
    return false;
  }
};

export const buildSnapshot = ({ search = "", referrer = "", landingPage = "", now = Date.now() } = {}) => {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const touch = emptyTouch(new Date(now).toISOString());
  TOUCH_FIELDS.forEach((key) => {
    if (key === "referrer" || key === "landing_page") return;
    touch[key] = clip(params.get(key) || "", FIELD_LIMITS[key]);
  });
  touch.referrer = clip(referrer, FIELD_LIMITS.referrer);
  touch.landing_page = clip(landingPage, FIELD_LIMITS.landing_page);
  return touch;
};

export const hasAcquisitionSignal = (snapshot, pageHost) => {
  if (!snapshot) return false;
  if (CAMPAIGN_FIELDS.some((key) => snapshot[key])) return true;
  return isExternalReferrer(snapshot.referrer, pageHost);
};

const isValidRecord = (record, now) =>
  Boolean(record && record.first && record.last && typeof record.expiresAt === "number" && record.expiresAt > now);

/**
 * First touch is written once. Last touch updates only when this page load
 * has a campaign parameter, click id, or external referrer — a refresh or
 * in-site visit must not wipe an earlier ad click.
 */
export const mergeAttribution = (stored, snapshot, { now = Date.now(), pageHost = "" } = {}) => {
  const expiresAt = now + NINETY_DAYS_MS;
  if (!isValidRecord(stored, now)) {
    return { first: snapshot, last: snapshot, expiresAt };
  }
  return {
    first: stored.first,
    last: hasAcquisitionSignal(snapshot, pageHost) ? snapshot : stored.last,
    expiresAt,
  };
};

const readCookie = () => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${STORAGE_KEY}=([^;]*)`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
};

const writeCookie = (json) => {
  if (typeof document === "undefined") return;
  const encoded = encodeURIComponent(json);
  if (encoded.length > COOKIE_LIMIT) return;
  const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${STORAGE_KEY}=${encoded}; Path=/; Max-Age=${NINETY_DAYS_SECONDS}; SameSite=Lax${secure}`;
};

export const readAttribution = () => {
  if (memoryRecord) return memoryRecord;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      memoryRecord = JSON.parse(raw);
      return memoryRecord;
    }
  } catch {
    /* private mode or blocked storage */
  }
  memoryRecord = readCookie();
  return memoryRecord;
};

export const writeAttribution = (record) => {
  memoryRecord = record;
  const json = JSON.stringify(record);
  try {
    window.localStorage.setItem(STORAGE_KEY, json);
  } catch {
    /* ignore quota / private mode */
  }
  try {
    writeCookie(json);
  } catch {
    /* ignore cookie failures */
  }
  return record;
};

/** Test helper. */
export const clearStoredAttribution = () => {
  memoryRecord = null;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  try {
    document.cookie = `${STORAGE_KEY}=; Path=/; Max-Age=0`;
  } catch {
    /* ignore */
  }
};

export const captureAttribution = (env = {}) => {
  if (typeof window === "undefined") return null;
  const now = env.now || Date.now();
  const pageHost = env.pageHost || window.location.host;
  const search = env.search != null ? env.search : window.location.search;
  const referrer = env.referrer != null ? env.referrer : document.referrer || "";
  const landingPage =
    env.landingPage != null ? env.landingPage : `${window.location.pathname}${window.location.search}`;
  const snapshot = buildSnapshot({ search, referrer, landingPage, now });
  const stored = readAttribution();
  const next = mergeAttribution(stored, snapshot, { now, pageHost });
  return writeAttribution(next);
};

const currentTouch = (which) => {
  const record = readAttribution();
  if (!record || record.expiresAt < Date.now()) return emptyTouch("");
  return record[which] || emptyTouch("");
};

export const getLastTouch = () => currentTouch("last");
export const getFirstTouch = () => currentTouch("first");

export const formatSourceRef = (touch) => {
  if (!touch) return "";
  let source = touch.utm_source || "";
  if (!source) {
    if (touch.gclid || touch.gbraid || touch.wbraid) source = "google";
    else if (touch.fbclid) source = "facebook";
  }
  const campaign = touch.utm_campaign || touch.utm_term || "";
  if (!source && !campaign) return "";
  return [source, campaign]
    .filter(Boolean)
    .join(" / ")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
};

export const attributionFormFields = (record = readAttribution()) => {
  const fields = {};
  if (!record || record.expiresAt < Date.now()) return fields;
  const last = record.last || {};
  const first = record.first || {};
  TOUCH_FIELDS.forEach((key) => {
    if (last[key]) fields[key] = last[key];
    if (first[key]) fields[`first_${key}`] = first[key];
  });
  return fields;
};

/** Flat event params. Empty values are omitted. Caller enforces the GA4 cap. */
export const attributionEventParams = (record = readAttribution()) => {
  const params = {};
  if (!record || record.expiresAt < Date.now()) return params;
  const last = record.last || {};
  const first = record.first || {};
  TOUCH_FIELDS.forEach((key) => {
    if (last[key]) params[key] = last[key];
  });
  TOUCH_FIELDS.forEach((key) => {
    if (first[key]) params[`first_${key}`] = first[key];
  });
  return params;
};
