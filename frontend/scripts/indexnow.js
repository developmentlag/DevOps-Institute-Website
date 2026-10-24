/**
 * Post-deploy IndexNow ping for Bing and Copilot.
 * Not part of `yarn build`. Run after the new URLs are live:
 *   yarn indexnow
 */
const fs = require("fs");
const path = require("path");

const KEY = "7c4e9a1b8d2f46c0a5e3b917d6f04a28";
const HOST = "www.devopsinstitute.co.in";
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  const sitemapPath = path.resolve(__dirname, "../build/sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    console.error("build/sitemap.xml is missing. Run yarn build first, and only ping after deploy.");
    process.exit(1);
  }
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (urlList.length === 0) {
    console.error("sitemap.xml has no URLs");
    process.exit(1);
  }
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  };
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await response.text();
  console.log(`IndexNow ${response.status} ${text}`);
  if (response.status !== 200 && response.status !== 202) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
