import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { captureAttribution } from "@/lib/attribution";
import { installLeadClickTracker, trackPageView } from "@/lib/analytics";

/**
 * Mounts once inside the router. Sends a page view after each route change
 * (placed after page content so the updated document title is already set)
 * and listens for call / WhatsApp clicks anywhere in the document.
 */
export default function SiteAnalytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    captureAttribution();
    const removeClicks = installLeadClickTracker();
    const onPageShow = (event) => {
      // Back-forward cache restores the page without a fresh load.
      if (event.persisted) trackPageView();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => {
      removeClicks();
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  useEffect(() => {
    // Wait until every page effect has run so the title is the one just set
    // for this route, then send a single page view.
    const id = window.setTimeout(trackPageView, 0);
    return () => window.clearTimeout(id);
  }, [pathname, search]);

  return null;
}
