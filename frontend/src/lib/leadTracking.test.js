import fs from "fs";
import path from "path";
import { WHATSAPP_MESSAGE, WHATSAPP_URL } from "@/data/site";
import {
  ADS_CALL_SEND_TO,
  ADS_ID,
  ADS_LEAD_SEND_TO,
  ADS_WHATSAPP_SEND_TO,
  GA_MEASUREMENT_ID,
  META_PIXEL_ID,
  capParams,
  classifyLeadLink,
  handleLeadClick,
  phoneFromHref,
  resetAnalyticsDedupe,
  trackGenerateLead,
  trackPageView,
  withSourceRef,
} from "@/lib/analytics";
import {
  attributionFormFields,
  buildSnapshot,
  captureAttribution,
  clearStoredAttribution,
  formatSourceRef,
  getFirstTouch,
  getLastTouch,
  mergeAttribution,
} from "@/lib/attribution";

const OLD_TAG_IDS = ["G-ZX967537RN", "AW-11481832955", "GT-KDQHDJD", "GT-T5PX83DC"];

const googleTouch = buildSnapshot({
  search: "?utm_source=google&utm_medium=cpc&utm_campaign=powai-search&utm_term=devops&gclid=click123",
  referrer: "https://www.google.com/",
  landingPage: "/?utm_source=google&utm_medium=cpc&utm_campaign=powai-search&utm_term=devops&gclid=click123",
  now: 1_000,
});

beforeEach(() => {
  clearStoredAttribution();
  resetAnalyticsDedupe();
  window.gtag = jest.fn();
  window.fbq = jest.fn();
  delete window.__doiPowaiMetaInitialHref;
  delete window.__doiPowaiMetaPixel;
  window.history.pushState({}, "", "/");
});

describe("attribution", () => {
  test("keeps the first campaign and does not let a refresh wipe the last campaign", () => {
    const first = mergeAttribution(null, googleTouch, { now: 1_000, pageHost: "devopsinstitute.co.in" });
    const refresh = buildSnapshot({
      search: "",
      referrer: "",
      landingPage: "/courses",
      now: 2_000,
    });
    const next = mergeAttribution(first, refresh, { now: 2_000, pageHost: "devopsinstitute.co.in" });

    expect(next.first.utm_campaign).toBe("powai-search");
    expect(next.first.gclid).toBe("click123");
    expect(next.last.gclid).toBe("click123");
    expect(next.last.landing_page).toContain("powai-search");
  });

  test("updates last touch on a new external visit and leaves first touch alone", () => {
    const stored = mergeAttribution(null, googleTouch, { now: 1_000, pageHost: "devopsinstitute.co.in" });
    const instagram = buildSnapshot({
      search: "",
      referrer: "https://www.instagram.com/",
      landingPage: "/contact",
      now: 5_000,
    });
    const next = mergeAttribution(stored, instagram, { now: 5_000, pageHost: "devopsinstitute.co.in" });

    expect(next.first.gclid).toBe("click123");
    expect(next.last.gclid).toBe("");
    expect(next.last.referrer).toBe("https://www.instagram.com/");
    expect(next.last.landing_page).toBe("/contact");
  });

  test("stores both touches for 90 days and exposes them on the enquiry payload", () => {
    const now = Date.now();
    captureAttribution({
      search: "?utm_source=google&utm_campaign=powai-search&gclid=click123",
      referrer: "https://www.google.com/",
      landingPage: "/?utm_source=google&utm_campaign=powai-search&gclid=click123",
      pageHost: "devopsinstitute.co.in",
      now,
    });
    captureAttribution({
      search: "",
      referrer: "",
      landingPage: "/courses",
      pageHost: "devopsinstitute.co.in",
      now: now + 1_000,
    });

    expect(getFirstTouch().utm_source).toBe("google");
    expect(getLastTouch().gclid).toBe("click123");
    expect(attributionFormFields()).toMatchObject({
      utm_source: "google",
      utm_campaign: "powai-search",
      gclid: "click123",
      first_utm_source: "google",
      first_gclid: "click123",
      first_landing_page: "/?utm_source=google&utm_campaign=powai-search&gclid=click123",
    });
    expect(attributionFormFields().utm_medium).toBeUndefined();
  });

  test("stores fbclid with the campaign and keeps it when a later visit has no click id", () => {
    const now = Date.now();
    captureAttribution({
      search: "?utm_source=facebook&utm_medium=paid&utm_campaign=powai-meta&fbclid=fb123",
      referrer: "https://l.facebook.com/",
      landingPage: "/?utm_source=facebook&utm_medium=paid&utm_campaign=powai-meta&fbclid=fb123",
      pageHost: "devopsinstitute.co.in",
      now,
    });
    captureAttribution({
      search: "",
      referrer: "",
      landingPage: "/courses",
      pageHost: "devopsinstitute.co.in",
      now: now + 1_000,
    });

    expect(getFirstTouch().fbclid).toBe("fb123");
    expect(getLastTouch().fbclid).toBe("fb123");
    expect(attributionFormFields()).toMatchObject({
      utm_source: "facebook",
      utm_campaign: "powai-meta",
      fbclid: "fb123",
      first_fbclid: "fb123",
    });
    expect(formatSourceRef(getLastTouch())).toBe("facebook / powai-meta");
  });

  test("reads a bare fbclid as a facebook source", () => {
    const touch = buildSnapshot({
      search: "?fbclid=IwAR0abc",
      referrer: "https://l.facebook.com/",
      landingPage: "/courses?fbclid=IwAR0abc",
      now: 1_000,
    });
    expect(touch.fbclid).toBe("IwAR0abc");
    expect(touch.gclid).toBe("");
    expect(formatSourceRef(touch)).toBe("facebook");
  });
});

describe("lead events", () => {
  test("classifies call and WhatsApp links and reads the number", () => {
    expect(classifyLeadLink("tel:08369518569")).toBe("call");
    expect(classifyLeadLink("https://wa.me/918369518569?text=hi")).toBe("whatsapp");
    expect(classifyLeadLink("https://api.whatsapp.com/send?phone=918369518569")).toBe("whatsapp");
    expect(classifyLeadLink("/contact")).toBeNull();
    expect(phoneFromHref("tel:08369518569")).toBe("08369518569");
    expect(phoneFromHref("https://wa.me/918369518569?text=hi")).toBe("918369518569");
  });

  test("adds a short source reference to the WhatsApp draft without changing the original message", () => {
    const next = withSourceRef(WHATSAPP_URL, formatSourceRef(googleTouch));
    const text = new URL(next).searchParams.get("text");
    expect(formatSourceRef(googleTouch)).toBe("google / powai-search");
    expect(text.startsWith(WHATSAPP_MESSAGE)).toBe(true);
    expect(text.endsWith("\n\nRef: google / powai-search")).toBe(true);
    expect(new URL(withSourceRef(next, "google / powai-search")).searchParams.get("text")).toBe(text);
    expect(withSourceRef(WHATSAPP_URL, "")).toBe(WHATSAPP_URL);
  });

  test("holds a call click until both hits are queued", () => {
    jest.useFakeTimers();
    document.body.innerHTML = '<a href="tel:08369518569" data-testid="hero-call-now-button">Call Now</a>';
    const anchor = document.querySelector("a");
    const event = {
      type: "click",
      button: 0,
      metaKey: false,
      ctrlKey: false,
      shiftKey: false,
      altKey: false,
      cancelable: true,
      target: anchor,
      preventDefault: jest.fn(),
    };

    handleLeadClick(event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(window.gtag.mock.calls.map((call) => call[1])).toEqual(["call_click", "conversion"]);
    expect(window.gtag.mock.calls[0][2]).toMatchObject({
      send_to: GA_MEASUREMENT_ID,
      transport_type: "beacon",
      link_url: "tel:08369518569",
      phone_number: "08369518569",
      button_location: "hero-call-now-button",
    });
    expect(window.gtag.mock.calls[1][2].send_to).toBe(ADS_CALL_SEND_TO);
    expect(typeof window.gtag.mock.calls[0][2].event_callback).toBe("function");
    expect(window.fbq).toHaveBeenCalledTimes(1);
    expect(window.fbq).toHaveBeenCalledWith("track", "Contact");

    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("tracks a WhatsApp click in place and appends the source reference", () => {
    captureAttribution({
      search: "?utm_source=google&utm_campaign=powai-search&gclid=click123",
      referrer: "https://www.google.com/",
      landingPage: "/?gclid=click123",
      pageHost: "devopsinstitute.co.in",
      now: Date.now(),
    });
    document.body.innerHTML = `<a href="${WHATSAPP_URL}" target="_blank" data-testid="floating-whatsapp-button">WhatsApp Us</a>`;
    const anchor = document.querySelector("a");
    const event = {
      type: "click",
      button: 0,
      metaKey: false,
      ctrlKey: false,
      shiftKey: false,
      altKey: false,
      cancelable: true,
      target: anchor,
      preventDefault: jest.fn(),
    };

    handleLeadClick(event);

    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(new URL(anchor.href).searchParams.get("text")).toContain("Ref: google / powai-search");
    expect(window.gtag.mock.calls.map((call) => call[1])).toEqual(["whatsapp_click", "conversion"]);
    expect(window.gtag.mock.calls[0][2]).toMatchObject({
      send_to: GA_MEASUREMENT_ID,
      phone_number: "918369518569",
      button_location: "floating-whatsapp-button",
      utm_source: "google",
      utm_campaign: "powai-search",
      gclid: "click123",
    });
    expect(window.gtag.mock.calls[1][2].send_to).toBe(ADS_WHATSAPP_SEND_TO);
    expect(window.fbq).toHaveBeenCalledTimes(1);
    expect(window.fbq).toHaveBeenCalledWith("track", "Contact");
  });

  test("fires Contact once when the same call link is clicked again immediately", () => {
    document.body.innerHTML = '<a href="tel:08369518569" data-testid="hero-call-now-button">Call Now</a>';
    const anchor = document.querySelector("a");
    const event = () => ({
      type: "click",
      button: 0,
      metaKey: false,
      ctrlKey: false,
      shiftKey: false,
      altKey: false,
      cancelable: true,
      target: anchor,
      preventDefault: jest.fn(),
    });

    handleLeadClick(event());
    handleLeadClick(event());

    expect(window.fbq).toHaveBeenCalledTimes(1);
    expect(window.gtag.mock.calls.filter((call) => call[1] === "conversion")).toHaveLength(1);
  });

  test("records a saved enquiry as generate_lead with the campaign attached", () => {
    captureAttribution({
      search: "?utm_source=google&utm_campaign=powai-search&gclid=click123",
      referrer: "https://www.google.com/",
      landingPage: "/contact?utm_source=google&utm_campaign=powai-search&gclid=click123",
      pageHost: "devopsinstitute.co.in",
      now: Date.now(),
    });
    window.history.pushState({}, "", "/contact");
    trackGenerateLead({ formSource: "contact", course: "AWS Course" });
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "generate_lead",
      expect.objectContaining({
        send_to: GA_MEASUREMENT_ID,
        transport_type: "beacon",
        form_source: "contact",
        course: "AWS Course",
        page_path: "/contact",
        utm_source: "google",
        utm_campaign: "powai-search",
        gclid: "click123",
        first_utm_source: "google",
      }),
    );
    expect(window.gtag).toHaveBeenCalledWith("event", "conversion", {
      send_to: ADS_LEAD_SEND_TO,
      value: 0,
      currency: "INR",
      transport_type: "beacon",
    });
    expect(window.gtag).toHaveBeenCalledTimes(2);
    expect(window.fbq).toHaveBeenCalledTimes(1);
    expect(window.fbq).toHaveBeenCalledWith("track", "Lead");
  });

  test("does not fire the enquiry conversion when gtag is missing, and still records the Meta lead", () => {
    delete window.gtag;
    trackGenerateLead({ formSource: "contact", course: "AWS Course" });
    expect(window.fbq).toHaveBeenCalledTimes(1);
    expect(window.fbq).toHaveBeenCalledWith("track", "Lead");
  });

  test("sends one page view to GA4 and one to Ads, and ignores a duplicate", () => {
    trackPageView();
    trackPageView();
    expect(window.gtag).toHaveBeenCalledTimes(2);
    expect(window.gtag.mock.calls[0][2].send_to).toBe(GA_MEASUREMENT_ID);
    expect(window.gtag.mock.calls[1][2].send_to).toBe(ADS_ID);
    expect(window.fbq).toHaveBeenCalledTimes(1);
    expect(window.fbq).toHaveBeenCalledWith("track", "PageView");

    window.history.pushState({}, "", "/courses/devops");
    trackPageView();
    expect(window.gtag).toHaveBeenCalledTimes(4);
    expect(window.gtag.mock.calls[2][2].page_path).toBe("/courses/devops");
    expect(window.fbq).toHaveBeenCalledTimes(2);
  });

  test("does not send a second Meta PageView for the document the base pixel already counted", () => {
    window.__doiPowaiMetaInitialHref = window.location.href;
    trackPageView();
    expect(window.fbq).not.toHaveBeenCalled();

    window.history.pushState({}, "", "/contact");
    trackPageView();
    expect(window.fbq).toHaveBeenCalledTimes(1);
    expect(window.fbq).toHaveBeenCalledWith("track", "PageView");
  });

  test("caps event parameters at 25 and drops empty values", () => {
    const params = { page_path: "/contact", utm_source: "", utm_campaign: "x".repeat(150) };
    for (let i = 0; i < 30; i += 1) params[`extra_${i}`] = `v${i}`;
    const capped = capParams(params);
    expect(Object.keys(capped)).toHaveLength(25);
    expect(capped.utm_source).toBeUndefined();
    expect(capped.utm_campaign).toHaveLength(100);
    expect(capped.page_path).toBe("/contact");
  });
});

describe("installed tag", () => {
  const html = fs.readFileSync(path.resolve(process.cwd(), "public/index.html"), "utf8");

  test("loads the Powai tag once and not the Thane tag", () => {
    expect(html.match(/googletagmanager\.com\/gtag\/js/g)).toHaveLength(1);
    expect(html).toContain(GA_MEASUREMENT_ID);
    expect(html).toContain(ADS_ID);
    expect(html).toContain("send_page_view: false");
    OLD_TAG_IDS.forEach((id) => expect(html).not.toContain(id));
    expect(html).not.toContain(ADS_CALL_SEND_TO);
    expect(html).not.toContain(ADS_WHATSAPP_SEND_TO);
    expect(html).not.toContain(ADS_LEAD_SEND_TO);
  });

  test("loads the Powai Meta pixel once, with a PageView and a double-load guard", () => {
    expect(html.match(/connect\.facebook\.net\/en_US\/fbevents\.js/g)).toHaveLength(1);
    expect(html.match(new RegExp(META_PIXEL_ID, "g"))).toHaveLength(3);
    expect(html).toContain("if (f.fbq) return;");
    expect(html).toContain("if (!window.__doiPowaiMetaPixel)");
    expect(html).toContain(`fbq('init', '${META_PIXEL_ID}')`);
    expect(html).toContain("fbq('track', 'PageView')");
    expect(html).toContain(`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`);
  });
});
