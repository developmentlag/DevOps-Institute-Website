/**
 * Fail the build when prerendered HTML or JSON-LD is wrong.
 * This file does not launch a browser.
 */
const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "../build");
const SITE_ORIGIN = "https://www.devopsinstitute.co.in";

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function decode(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(Number(num)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function words(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function routeFromFile(file) {
  if (path.basename(file) === "404.html" && path.dirname(file) === BUILD_DIR) return "/404";
  const rel = path.relative(BUILD_DIR, file).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  return `/${rel.replace(/\/index\.html$/, "")}`;
}

function visibleText(html) {
  return decode(html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " "));
}

function main() {
  const files = walk(BUILD_DIR).filter((file) => {
    if (file.includes(`${path.sep}static${path.sep}`)) return false;
    if (path.basename(file) === "404.html" && path.dirname(file) === BUILD_DIR) return false;
    return true;
  });
  if (files.length < 20) throw new Error(`Expected prerendered HTML, found ${files.length} files`);

  const descriptions = new Map();
  const failures = [];
  const report = [];

  for (const file of files) {
    const route = routeFromFile(file);
    if (route.startsWith("/static")) continue;
    const html = fs.readFileSync(file, "utf8");
    const blocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    const parsed = [];
    for (const block of blocks) {
      try {
        parsed.push(JSON.parse(block[1]));
      } catch (error) {
        failures.push(`${route} JSON-LD parse failed: ${error.message}`);
      }
    }
    const flat = parsed.flat();
    const text = visibleText(html);
    for (const node of flat) {
      if (node && node["@type"] === "FAQPage") {
        for (const entity of node.mainEntity || []) {
          const question = entity.name || "";
          const answer = entity.acceptedAnswer && entity.acceptedAnswer.text;
          if (question && !text.includes(question)) failures.push(`${route} FAQ question missing from HTML: ${question}`);
          if (answer && !text.includes(answer)) failures.push(`${route} FAQ answer missing from HTML: ${question}`);
        }
      }
    }
    if (/\bguarantee(d)?\b/i.test(text)) failures.push(`${route} contains guarantee`);
    if (/24999|priceCurrency|₹\s*\d/.test(html)) failures.push(`${route} contains a price`);
    if (!html.includes("https://devopsinstitutemumbai.co.in/")) failures.push(`${route} missing Thane link`);

    const title = decode((html.match(/<title>([^<]*)<\/title>/i) || [])[1] || "");
    const descTag = html.match(/<meta[^>]*name=["']description["'][^>]*>/i);
    const desc = descTag ? decode((descTag[0].match(/content=["']([^"']*)["']/i) || [])[1] || "") : "";
    if (title.length > 60) failures.push(`${route} title length ${title.length}`);
    if (desc.length < 40 || desc.length > 155) failures.push(`${route} description length ${desc.length}`);
    if ([...descriptions.values()].includes(desc)) failures.push(`${route} duplicate description`);
    descriptions.set(route, desc);

    const direct = html.match(/data-direct-answer[^>]*>([\s\S]*?)<\/p>/i);
    if (direct) {
      const count = words(visibleText(direct[1]));
      if (count < 40 || count > 60) failures.push(`${route} direct answer is ${count} words`);
    }

    const article = html.match(/<article[\s\S]*?<\/article>/i);
    if (article) {
      const count = words(visibleText(article[0]));
      report.push({ route, words: count, jsonLd: parsed.length });
      const pillar = route === "/devops-course" || route === "/cloud-computing-course";
      const exempt = route === "/sitemap" || route === "/404";
      const areaOrTopic = /^\/(devops-course-in-|cloud-computing-course-in-|aws-course-in-|azure-course-in-|kubernetes-course-in-)/.test(route);
      if (!exempt && pillar && count < 2500) failures.push(`${route} article is ${count} words, need 2500`);
      if (!exempt && !pillar && (areaOrTopic || route.startsWith("/devops-") || route.startsWith("/cloud-") || route.startsWith("/best-")) && count < 800) {
        failures.push(`${route} article is ${count} words, need 800`);
      }
    }
  }

  const sitemap = fs.readFileSync(path.join(BUILD_DIR, "sitemap.xml"), "utf8");
  if (!sitemap.includes("<lastmod>")) failures.push("sitemap missing lastmod");
  const llmsFull = path.join(BUILD_DIR, "llms-full.txt");
  if (!fs.existsSync(llmsFull) || fs.statSync(llmsFull).size < 1000) failures.push("llms-full.txt missing");
  if (!fs.existsSync(path.join(BUILD_DIR, "404.html"))) failures.push("404.html missing");
  if (!fs.existsSync(path.join(BUILD_DIR, "7c4e9a1b8d2f46c0a5e3b917d6f04a28.txt"))) failures.push("IndexNow key file missing");

  const sampleRoutes = ["/", "/courses/devops", "/devops-course-in-powai", "/devops-course"];
  const samples = [];
  for (const route of sampleRoutes) {
    const file = route === "/" ? path.join(BUILD_DIR, "index.html") : path.join(BUILD_DIR, route.slice(1), "index.html");
    const html = fs.readFileSync(file, "utf8");
    const blocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((match) => JSON.parse(match[1]));
    const types = blocks.flat().map((node) => (Array.isArray(node["@type"]) ? node["@type"].join("+") : node["@type"]) || (node["@graph"] ? "graph" : "unknown"));
    samples.push({ route, types, origin: html.includes(SITE_ORIGIN) });
  }

  fs.writeFileSync(
    path.join(BUILD_DIR, "seo-report.json"),
    JSON.stringify({ samples, shortest: report.sort((a, b) => a.words - b.words).slice(0, 15), failures }, null, 2),
  );

  if (failures.length) {
    console.error(failures.slice(0, 40).join("\n"));
    console.error(`${failures.length} SEO checks failed`);
    process.exit(1);
  }
  console.log(`validate-seo: ${files.length} HTML files, JSON-LD parsed, ${report.length} articles measured`);
  for (const sample of samples) console.log(`schema ${sample.route}: ${sample.types.join(", ")}`);
}

try {
  main();
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
}
