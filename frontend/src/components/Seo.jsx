import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSiteOrigin } from "@/data/site";

// Tags are written at runtime so absolute URLs come from the live origin —
// the template cannot know which domain an app will be deployed on.
const MARK = "data-seo";

// The title index.html shipped with, captured before any <Seo> overwrites it,
// so clearing the prop restores it rather than leaving the last page's title.
const fallbackTitle = typeof document === "undefined" ? "" : document.title;

const upsertMeta = (attr, key, content) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!content) {
    if (el?.hasAttribute(MARK)) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(MARK, "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"][${MARK}]`);
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(MARK, "");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const upsertJsonLd = (data) => {
  const el = document.head.querySelector(`script[${MARK}][type="application/ld+json"]`);
  if (!data) {
    el?.remove();
    return;
  }
  const script = el || document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.setAttribute(MARK, "");
  script.textContent = JSON.stringify(data);
  if (!el) document.head.appendChild(script);
};

/**
 * Seo — sets title, canonical, Open Graph, Twitter card and JSON-LD.
 * Renders nothing. Omit a prop and its tag is left out rather than guessed.
 * Must be rendered inside the router so each route keeps its own tags.
 */
export default function Seo({
  title,
  description,
  image,
  type = "website",
  siteName,
  jsonLd,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const origin = getSiteOrigin();
    const url = `${origin}${pathname}`;
    const imageUrl = image ? new URL(image, origin).href : undefined;

    document.title = title || fallbackTitle;

    upsertLink("canonical", url);
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:site_name", siteName || title);
    upsertMeta("property", "og:image", imageUrl);

    upsertMeta("name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertJsonLd(jsonLd);
    document.documentElement.setAttribute("data-seo-ready", pathname);
  }, [pathname, title, description, image, type, siteName, jsonLd]);

  return null;
}
