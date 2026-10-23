import { SEO_ROUTES } from "@/data/seoRoutes";

export const LOADERS = {
  about: () => import("@/pages/About"),
  courses: () => import("@/pages/Courses"),
  courseDetail: () => import("@/pages/CourseDetail"),
  contact: () => import("@/pages/Contact"),
  faqs: () => import("@/pages/Faqs"),
  privacy: () => import("@/pages/PrivacyPolicy"),
  seo: () => import("@/pages/SeoLanding"),
  notFound: () => import("@/pages/NotFound"),
};

export function loaderForPath(pathname) {
  if (pathname === "/") return null;
  if (pathname === "/about") return ["about", LOADERS.about];
  if (pathname === "/courses") return ["courses", LOADERS.courses];
  if (pathname.startsWith("/courses/")) return ["courseDetail", LOADERS.courseDetail];
  if (pathname === "/contact") return ["contact", LOADERS.contact];
  if (pathname === "/faqs") return ["faqs", LOADERS.faqs];
  if (pathname === "/privacy-policy") return ["privacy", LOADERS.privacy];
  if (SEO_ROUTES.some((route) => route.path === pathname && route.path !== "/404")) return ["seo", LOADERS.seo];
  return ["notFound", LOADERS.notFound];
}

export async function preloadRoute(pathname) {
  const match = loaderForPath(pathname);
  if (!match) return;
  const [id, load] = match;
  const mod = await load();
  globalThis.__DOI_SYNC_PAGES__ = globalThis.__DOI_SYNC_PAGES__ || {};
  globalThis.__DOI_SYNC_PAGES__[id] = mod;
}
