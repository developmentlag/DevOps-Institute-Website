import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { staticPage } from "@/data/pageMeta";
import { BUSINESS_NAME, ADDRESS, PHONE, buildOrgSchema } from "@/data/site";

export default function Placements() {
  const meta = staticPage("/placements");
  const orgSchema = buildOrgSchema();
  const placementSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Placement Salary Uplift 2024‑2026",
    "description": "30‑80% salary hikes for alumni placed in top tech firms after completing our DevOps courses.",
    "url": `${meta.canonical || "https://www.devopsinstitute.co.in/placements"}`,
    "distribution": [{
      "@type": "DataDownload",
      "encodingFormat": "text/csv",
      "contentUrl": `${meta.canonical || "https://www.devopsinstitute.co.in"}/placements/hikes.csv`
    }]
  };
  return (
    <div data-testid="placements-page">
      <Seo
        title={meta.title}
        siteName={BUSINESS_NAME}
        description={meta.description}
        jsonLd={[orgSchema, placementSchema]}
      />
      <h1>Placement Success Stories</h1>
      <p>Our graduates have secured roles at leading tech companies with salary hikes of 30‑80%.</p>
      <ul>
        <li>Google – Cloud Engineer – +75% salary increase</li>
        <li>Amazon – DevOps Engineer – +68% salary increase</li>
        <li>Microsoft – Site Reliability Engineer – +55% salary increase</li>
        <li>Infosys – Cloud Consultant – +48% salary increase</li>
      </ul>
      <p>Download the full dataset:</p>
      <a href="/placements/hikes.csv" download>Placement Hikes CSV</a>
      <p>Contact us for more details: <Link to="/contact">Contact Page</Link></p>
    </div>
  );
}
