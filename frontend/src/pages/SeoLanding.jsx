import { useLocation } from "react-router-dom";
import Seo from "@/components/Seo";
import SeoArticle from "@/components/SeoArticle";
import { BUSINESS_NAME } from "@/data/site";
import { getSeoPage } from "@/data/seoCopy";
import { buildSeoSchema } from "@/data/seoSchema";

export default function SeoLanding({ forcePath }) {
  const { pathname } = useLocation();
  const path = forcePath || pathname;
  const page = getSeoPage(path) || getSeoPage("/404");
  const noindex = page.route.index === false;

  return (
    <div data-testid={`seo-page-${page.route.path.replace(/\//g, "") || "home"}`}>
      <Seo
        title={page.route.title}
        description={page.route.description}
        siteName={BUSINESS_NAME}
        jsonLd={buildSeoSchema(page)}
        canonicalPath={noindex ? "/404" : page.route.path}
        robots={noindex ? "noindex, follow" : undefined}
      />
      <SeoArticle page={page} />
    </div>
  );
}
