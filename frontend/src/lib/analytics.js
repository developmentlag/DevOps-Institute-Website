/**
 * Powai site analytics.
 *
 * gtag.js is installed once in public/index.html with automatic page views
 * turned off. This module sends one page view per route (GA4 + Google Ads)
 * and lead events for call clicks, WhatsApp clicks, and enquiry submissions.
 *
 * The Meta pixel is installed once in that same file (init plus the first
 * PageView). This module sends PageView again when the route changes in the
 * app, Lead when an enquiry is saved, and Contact on call and WhatsApp clicks.
 */

import {
  attributionEventParams,
  captureAttribution,
  formatSourceRef,
  getLastTouch,
} from "@/lib/attribution";

export const GA_MEASUREMENT_ID = "G-9F90BVFTF9";
export const ADS_ID = "AW-18499665938";
export const ADS_CALL_SEND_TO = "AW-18499665938/jnVVCMDY35cdEJKAqvVE";
export const ADS_WHATSAPP_SEND_TO = "AW-18499665938/GL5-CMPY35cdEJKAqvVE";
export const ADS_LEAD_SEND_TO = "AW-18499665938/4du6CIXeqpodEJKAqvVE";
export const META_PIXEL_ID = "1173828687057674";

const GA_PARAM_LIMIT = 25;
const GA_VALUE_LIMIT = 100;
const PAGEVIEW_DEDUPE_MS = 400;
const LEAD_DEDUPE_MS = 800;
const NAV_TIMEOUT_MS = 1000;

let lastPageView = { key: "", at: 0 };
let lastLead = { key: "", at: 0 };
let skippedInitialMetaPageView = false;

export const capParams = (params, limit = GA_PARAM_LIMIT) => {
  const out = {};
  Object.entries(params || {}).forEach(([key, value]) => {
    if (value == null || value === "") return;
    if (Object.keys(out).length >= limit) return;
    out[key] = String(value).replace(/\s+/g, " ").trim().slice(0, GA_VALUE_LIMIT);
  });
  return out;
};

export const classifyLeadLink = (href) => {
  if (!href) return null;
  const value = String(href).trim();
  if (/^tel:/i.test(value)) return "call";
  if (/wa\.me|api\.whatsapp\.com|whatsapp\.com\/send|web\.whatsapp\.com/i.test(value)) return "whatsapp";
  return null;
};

export const phoneFromHref = (href) => {
  if (!href) return "";
  if (/^tel:/i.test(href)) {
    return decodeURIComponent(href.slice(4)).replace(/\s+/g, "");
  }
  try {
    const url = new URL(href, "https://devopsinstitute.co.in");
    if (/wa\.me$/i.test(url.hostname)) {
      return decodeURIComponent(url.pathname.replace(/^\//, "").split("/")[0] || "");
    }
    return url.searchParams.get("phone") || "";
  } catch {
    return "";
  }
};

export const shortLinkUrl = (href) => {
  if (!href) return "";
  if (/^tel:/i.test(href)) return href.slice(0, GA_VALUE_LIMIT);
  try {
    const url = new URL(href, "https://devopsinstitute.co.in");
    return `${url.origin}${url.pathname}`.slice(0, GA_VALUE_LIMIT);
  } catch {
    return String(href).slice(0, GA_VALUE_LIMIT);
  }
};

export const withSourceRef = (href, ref) => {
  if (!href || !ref) return href;
  const safeRef = String(ref).replace(/[\r\n]+/g, " ").trim();
  if (!safeRef) return href;
  try {
    const url = new URL(href, "https://devopsinstitute.co.in");
    const text = url.searchParams.get("text") || "";
    const stripped = text.replace(/\n*Ref:\s*[^\n]*$/i, "").trimEnd();
    const nextText = stripped ? `${stripped}\n\nRef: ${safeRef}` : `Ref: ${safeRef}`;
    if (nextText === text) return href;
    url.searchParams.set("text", nextText);
    return url.toString();
  } catch {
    return href;
  }
};

const buttonLabel = (anchor) => {
  const raw = anchor.getAttribute("aria-label") || anchor.textContent || "";
  return raw.replace(/\s+/g, " ").trim();
};

const navigatesInPlace = (anchor, event) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return false;
  const target = (anchor.getAttribute("target") || "").toLowerCase();
  return target !== "_blank";
};

const isDuplicate = (bucket, key, windowMs) => {
  const now = Date.now();
  if (bucket.key === key && now - bucket.at < windowMs) return true;
  bucket.key = key;
  bucket.at = now;
  return false;
};

const leadParams = (anchor, href) =>
  capParams({
    link_url: shortLinkUrl(href),
    phone_number: phoneFromHref(href),
    page_path: `${window.location.pathname}${window.location.search}`,
    button_location: anchor.getAttribute("data-testid") || anchor.id || "unlabeled",
    button_label: buttonLabel(anchor),
    ...attributionEventParams(),
  });

const gtag = (...args) => {
  if (typeof window.gtag === "function") window.gtag(...args);
};

const fbq = (...args) => {
  if (typeof window.fbq === "function") window.fbq(...args);
};

/**
 * The base snippet already sends PageView for the document that loaded it.
 * Later calls (route changes, and a restored page) send another PageView.
 * If that snippet did not run, the first call sends PageView itself.
 */
const trackMetaPageView = (pageLocation) => {
  if (typeof window.fbq !== "function") return;
  const initialHref = window.__doiPowaiMetaInitialHref;
  if (!skippedInitialMetaPageView && initialHref && pageLocation === initialHref) {
    skippedInitialMetaPageView = true;
    return;
  }
  skippedInitialMetaPageView = true;
  window.fbq("track", "PageView");
};

const sendPair = (gaEventName, conversionSendTo, params, onDone) => {
  fbq("track", "Contact");

  if (typeof window.gtag !== "function") {
    if (onDone) onDone();
    return;
  }

  if (!onDone) {
    gtag("event", gaEventName, { ...params, send_to: GA_MEASUREMENT_ID, transport_type: "beacon" });
    gtag("event", "conversion", { ...params, send_to: conversionSendTo, transport_type: "beacon" });
    return;
  }

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    onDone();
  };
  const timer = window.setTimeout(finish, NAV_TIMEOUT_MS);
  let pending = 2;
  const settled = () => {
    pending -= 1;
    if (pending > 0) return;
    window.clearTimeout(timer);
    finish();
  };
  const once = (fn) => {
    let called = false;
    return () => {
      if (called) return;
      called = true;
      fn();
    };
  };

  gtag("event", gaEventName, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
    transport_type: "beacon",
    event_callback: once(settled),
    event_timeout: NAV_TIMEOUT_MS,
  });
  gtag("event", "conversion", {
    ...params,
    send_to: conversionSendTo,
    transport_type: "beacon",
    event_callback: once(settled),
    event_timeout: NAV_TIMEOUT_MS,
  });
};

const decorateWhatsApp = (anchor) => {
  const base = anchor.dataset.analyticsBaseHref || anchor.getAttribute("href") || anchor.href;
  anchor.dataset.analyticsBaseHref = base;
  const next = withSourceRef(base, formatSourceRef(getLastTouch()));
  if (next && next !== anchor.getAttribute("href")) {
    anchor.setAttribute("href", next);
  }
  return anchor.href || next;
};

export const handleLeadClick = (event) => {
  if (event.type === "auxclick" && event.button !== 1) return;
  const target = event.target;
  if (!target || typeof target.closest !== "function") return;
  const anchor = target.closest("a[href]");
  if (!anchor) return;

  const rawHref = anchor.getAttribute("href") || "";
  const kind = classifyLeadLink(rawHref);
  if (!kind) return;

  captureAttribution();

  if (kind === "whatsapp") decorateWhatsApp(anchor);

  const href = anchor.href || rawHref;
  const duplicate = isDuplicate(
    lastLead,
    `${kind}|${anchor.getAttribute("data-testid") || shortLinkUrl(href)}`,
    LEAD_DEDUPE_MS,
  );
  const inPlace = navigatesInPlace(anchor, event);
  const params = leadParams(anchor, href);
  const conversionSendTo = kind === "call" ? ADS_CALL_SEND_TO : ADS_WHATSAPP_SEND_TO;
  const gaEventName = kind === "call" ? "call_click" : "whatsapp_click";

  if (duplicate) return;

  if (inPlace) {
    event.preventDefault();
    sendPair(gaEventName, conversionSendTo, params, () => {
      window.location.href = href;
    });
    return;
  }

  sendPair(gaEventName, conversionSendTo, params);
};

export const installLeadClickTracker = () => {
  document.addEventListener("click", handleLeadClick, true);
  document.addEventListener("auxclick", handleLeadClick, true);
  return () => {
    document.removeEventListener("click", handleLeadClick, true);
    document.removeEventListener("auxclick", handleLeadClick, true);
  };
};

export const trackPageView = () => {
  const page_path = `${window.location.pathname}${window.location.search}`;
  const page_location = window.location.href;
  const page_title = document.title || "";
  if (isDuplicate(lastPageView, page_location, PAGEVIEW_DEDUPE_MS)) return;

  if (typeof window.gtag === "function") {
    const payload = { page_path, page_location, page_title };
    gtag("event", "page_view", { ...payload, send_to: GA_MEASUREMENT_ID });
    gtag("event", "page_view", { ...payload, send_to: ADS_ID });
  }
  trackMetaPageView(page_location);
};

export const trackGenerateLead = ({ formSource = "", course = "" } = {}) => {
  captureAttribution();
  const params = capParams({
    form_source: formSource,
    course,
    page_path: `${window.location.pathname}${window.location.search}`,
    ...attributionEventParams(),
  });
  gtag("event", "generate_lead", { ...params, send_to: GA_MEASUREMENT_ID, transport_type: "beacon" });
  gtag("event", "conversion", {
    send_to: ADS_LEAD_SEND_TO,
    value: 0,
    currency: "INR",
    transport_type: "beacon",
  });
  fbq("track", "Lead");
};

/** Test helper. */
export const resetAnalyticsDedupe = () => {
  lastPageView = { key: "", at: 0 };
  lastLead = { key: "", at: 0 };
  skippedInitialMetaPageView = false;
};
