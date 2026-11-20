// generate-sitemap.js
/**
 * Regenerate sitemap.xml with all SEO‑critical URLs.
 * Run: `node frontend/scripts/generate-sitemap.js`
 */
const fs = require('fs');
const path = require('path');

const base = 'https://www.devopsinstitute.co.in';
const today = new Date().toISOString().split('T')[0];

// List of pages that should appear in the sitemap
const pages = [
  '/',
  '/about',
  '/courses',
  '/placements',
  '/contact',
  '/faqs',
  // Course pages
  '/aws-devops-course',
  '/azure-devops-course',
  '/kubernetes-docker-course',
  '/devops-course-in-mumbai',
  // Error‑fix guides
  '/fix/kubernetes/crashloopbackoff-exit-code-137',
  '/fix/terraform/state-lock-error',
  '/fix/airflow/dag-not-running',
  '/fix/aws/instance-termination-protection',
  // Comparison guides
  '/compare/argocd-vs-flux',
  '/compare/kubernetes-vs-docker',
  '/compare/terraform-vs-pulumi',
  // Role‑based landing pages
  '/roles/support-engineer',
  '/roles/sre',
  '/roles/devops-engineer',
  // Research pages
  '/research/state-of-sre-2026-india',
  '/research/devops-tools-usage-2026',
];

const urlEntries = pages.map(p => `  <url>
    <loc>${base}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap.trim());
console.log('✅ sitemap.xml regenerated with', pages.length, 'entries.');
