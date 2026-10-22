/**
 * Build-time prerender for the CRA client app.
 *
 * Crawlers that do not run JavaScript receive the same DOM the browser paints:
 * each public route is opened in headless Chrome after `craco build`, and the
 * rendered document is written to build/<route>/index.html. Vercel serves those
 * files before the SPA rewrite, so URLs stay the same and the client bundle
 * still takes over for visitors.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer");

const SITE_ORIGIN = "https://devopsinstitute.co.in";
const BUILD_DIR = path.resolve(__dirname, "../build");
const SITE_SOURCE = path.resolve(__dirname, "../src/data/site.js");

const AI_CRAWLERS = ["Googlebot", "GPTBot", "PerplexityBot", "Google-Extended", "ClaudeBot"];

const PAGES = [
  {
    route: "/",
    text: "Become a",
    title: "DevOps Course in Mumbai | Classroom DevOps Training with Placement, Powai - DevOps Institute",
    jsonLd: true,
  },
  {
    route: "/about",
    text: "About DevOps Institute",
    title: "About DevOps Institute | Cloud & DevOps Training in Powai, Mumbai",
    jsonLd: true,
  },
  {
    route: "/courses",
    text: "Cloud & DevOps Courses in Mumbai",
    title: "Cloud & DevOps Courses in Mumbai | AWS, Azure, GCP, Kubernetes - DevOps Institute",
    jsonLd: true,
  },
  {
    route: "/courses/aws",
    text: "AWS Course in Mumbai with Placement",
    title: "AWS Course in Mumbai with Placement | AWS Cloud Training in Powai - DevOps Institute",
    jsonLd: true,
  },
  {
    route: "/courses/azure",
    text: "Azure Course in Mumbai",
    title: "Azure Course in Mumbai | Azure Training in Powai, Chandivali - DevOps Institute",
    jsonLd: true,
  },
  {
    route: "/courses/gcp",
    text: "GCP Course in Mumbai",
    title: "GCP Course in Mumbai | Google Cloud Training in Powai, Chandivali - DevOps Institute",
    jsonLd: true,
  },
  {
    route: "/courses/devops",
    text: "DevOps Course in Mumbai with Placement",
    title: "DevOps Course in Mumbai with Placement | DevOps Training in Powai - DevOps Institute",
    jsonLd: true,
  },
  {
    route: "/courses/kubernetes-docker",
    text: "Kubernetes & Docker Course in Mumbai",
    title: "Kubernetes & Docker Course in Mumbai | Docker Training in Powai - DevOps Institute",
    jsonLd: true,
  },
  {
    route: "/courses/linux-terraform",
    text: "Linux & Terraform Course in Mumbai",
    title: "Linux & Terraform Course in Mumbai | Cloud Training in Powai - DevOps Institute",
    jsonLd: true,
  },
  {
    route: "/contact",
    text: "Contact DevOps Institute in Chandivali, Powai",
    title: "Contact Us | DevOps Institute - AWS, Azure & GCP Course, Chandivali, Powai",
    jsonLd: true,
  },
  {
    route: "/faqs",
    text: "Frequently Asked Questions",
    title: "FAQs | DevOps Institute - AWS, Azure & GCP Course, Powai, Mumbai",
    jsonLd: true,
  },
  {
    route: "/privacy-policy",
    text: "Privacy Policy",
    title: "Privacy Policy | DevOps Institute - AWS, Azure & GCP Course, Mumbai",
    jsonLd: false,
  },
];

function courseSlugs() {
  const source = fs.readFileSync(SITE_SOURCE, "utf8");
  return [...source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((match) => match[1]);
}

function assertRoutesMatchCourses() {
  const slugs = courseSlugs();
  if (slugs.length === 0) {
    throw new Error("No course slugs found in src/data/site.js");
  }
  const expected = new Set(slugs.map((slug) => `/courses/${slug}`));
  const listed = new Set(PAGES.filter((page) => page.route.startsWith("/courses/")).map((page) => page.route));
  for (const route of expected) {
    if (!listed.has(route)) {
      throw new Error(`Prerender route list is missing ${route}. Add it to scripts/prerender.js.`);
    }
  }
  for (const route of listed) {
    if (!expected.has(route)) {
      throw new Error(`Prerender lists ${route}, but that slug is not in src/data/site.js.`);
    }
  }
}

function assertCrawlerFiles() {
  const robots = fs.readFileSync(path.join(BUILD_DIR, "robots.txt"), "utf8");
  for (const crawler of AI_CRAWLERS) {
    if (!robots.includes(`User-agent: ${crawler}`) || !robots.includes("Allow: /")) {
      throw new Error(`robots.txt must allow ${crawler}`);
    }
  }
  if (!robots.includes("Sitemap: https://devopsinstitute.co.in/sitemap.xml")) {
    throw new Error("robots.txt must list the sitemap");
  }

  const sitemap = fs.readFileSync(path.join(BUILD_DIR, "sitemap.xml"), "utf8");
  for (const page of PAGES) {
    const loc = `${SITE_ORIGIN}${page.route === "/" ? "/" : page.route}`;
    if (!sitemap.includes(`<loc>${loc}</loc>`)) {
      throw new Error(`sitemap.xml is missing ${loc}`);
    }
  }

  const llms = fs.readFileSync(path.join(BUILD_DIR, "llms.txt"), "utf8");
  const required = [
    "https://devopsinstitutemumbai.co.in/",
    "450+ placed",
    "Powai, Mumbai",
    "## Campuses (DevOps Institute)",
    "https://datainstitute.in/",
  ];
  for (const snippet of required) {
    if (!llms.includes(snippet)) {
      throw new Error(`llms.txt is missing ${snippet}`);
    }
  }
}

function contentType(filePath) {
  const types = {
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json",
    ".map": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
  };
  return types[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

function resolveBuildFile(pathname) {
  const decoded = decodeURIComponent(pathname.split("?")[0]);
  const relative = decoded.replace(/^\/+/, "");
  if (!relative) return null;
  const full = path.resolve(BUILD_DIR, relative);
  const root = path.resolve(BUILD_DIR);
  if (full !== root && !full.startsWith(`${root}${path.sep}`)) return null;
  if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  return null;
}

function startServer(shellHtml) {
  const server = http.createServer((req, res) => {
    const urlPath = (req.url || "/").split("?")[0];
    const file = resolveBuildFile(urlPath);
    if (file && !file.endsWith(`${path.sep}index.html`)) {
      res.writeHead(200, { "Content-Type": contentType(file) });
      fs.createReadStream(file).pipe(res);
      return;
    }
    // Missing assets must not receive the HTML shell. A script response that
    // starts with "<!doctype" throws "Unexpected token '<'" and fails prerender.
    if (path.extname(urlPath)) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(shellHtml);
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

function chromePath() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const candidates = [
    "/usr/local/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
  return candidates.find((candidate) => fs.existsSync(candidate));
}

function outputFile(route) {
  if (route === "/") return path.join(BUILD_DIR, "index.html");
  return path.join(BUILD_DIR, route.replace(/^\//, ""), "index.html");
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function metaContent(html, attr, key) {
  const pattern = new RegExp(`<meta[^>]*${attr}=["']${key}["'][^>]*>`, "i");
  const tag = html.match(pattern);
  if (!tag) return "";
  const content = tag[0].match(/content=["']([^"']*)["']/i);
  return content ? decodeHtml(content[1]) : "";
}

function assertPage(page, html) {
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? decodeHtml(titleMatch[1]) : "";
  if (title !== page.title) {
    throw new Error(`${page.route} title mismatch.\n expected: ${page.title}\n actual:   ${title}`);
  }
  const escapedText = page.text.replace(/&/g, "&amp;");
  if (!html.includes(page.text) && !html.includes(escapedText)) {
    throw new Error(`${page.route} HTML is missing visible copy: ${page.text}`);
  }
  const canonical = `${SITE_ORIGIN}${page.route === "/" ? "/" : page.route}`;
  const canonicalTag = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);
  if (!canonicalTag || !canonicalTag[0].includes(`href="${canonical}"`)) {
    throw new Error(`${page.route} canonical mismatch. expected ${canonical}. found ${canonicalTag ? canonicalTag[0] : "none"}`);
  }
  const description = metaContent(html, "name", "description");
  if (description.length < 40) {
    throw new Error(`${page.route} is missing a meta description`);
  }
  if (description.includes("localhost") || description.includes("127.0.0.1")) {
    throw new Error(`${page.route} description points at the prerender host`);
  }
  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (page.jsonLd) {
    if (jsonLd.length === 0) throw new Error(`${page.route} is missing JSON-LD`);
    const payload = jsonLd.map((match) => match[1]).join("\n");
    if (!payload.includes(SITE_ORIGIN)) {
      throw new Error(`${page.route} JSON-LD does not use ${SITE_ORIGIN}`);
    }
    JSON.parse(jsonLd.length === 1 ? jsonLd[0][1] : `[${jsonLd.map((match) => match[1]).join(",")}]`);
  } else if (jsonLd.length > 0) {
    throw new Error(`${page.route} should not ship JSON-LD`);
  }
  if (html.includes("127.0.0.1") || html.includes("localhost")) {
    throw new Error(`${page.route} still contains the prerender host`);
  }
  if (!html.includes("https://devopsinstitutemumbai.co.in/")) {
    throw new Error(`${page.route} is missing the Thane & Navi Mumbai link`);
  }
  const rootAt = html.indexOf('id="root"');
  const rootHtml = rootAt === -1 ? html : html.slice(rootAt).replace(/<script[\s\S]*?<\/script>/gi, "");
  if (/\bguaranteed\b/i.test(rootHtml)) {
    throw new Error(`${page.route} contains the word guaranteed`);
  }
  return { title, description };
}

async function prerender() {
  assertRoutesMatchCourses();
  if (!fs.existsSync(path.join(BUILD_DIR, "index.html"))) {
    throw new Error("frontend/build/index.html is missing. Run craco build first.");
  }
  assertCrawlerFiles();

  const shellHtml = fs.readFileSync(path.join(BUILD_DIR, "index.html"));
  const { server, port } = await startServer(shellHtml);
  const executablePath = chromePath();
  const browser = await puppeteer.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
  });

  const descriptions = new Map();
  try {
    for (const pageInfo of PAGES) {
      const page = await browser.newPage();
      const blocked = [];
      page.on("pageerror", (error) => {
        blocked.push(error);
      });
      await page.setRequestInterception(true);
      page.on("request", (request) => {
        const url = request.url();
        const deny = [
          "googletagmanager.com",
          "google-analytics.com",
          "analytics.google.com",
          "connect.facebook.net",
          "facebook.com/tr",
          "doubleclick.net",
          "googleadservices.com",
        ];
        if (deny.some((host) => url.includes(host))) request.abort();
        else request.continue();
      });
      await page.evaluateOnNewDocument((origin) => {
        window.__DOI_SITE_ORIGIN__ = origin;
      }, SITE_ORIGIN);

      const url = `http://127.0.0.1:${port}${pageInfo.route}`;
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForFunction(
        (route) => document.documentElement.getAttribute("data-seo-ready") === route,
        { timeout: 30000 },
        pageInfo.route,
      );
      await page.waitForFunction(
        (text) => {
          const root = document.getElementById("root");
          return Boolean(root && root.textContent && root.textContent.includes(text));
        },
        { timeout: 30000 },
        pageInfo.text,
      );

      if (blocked.length) {
        throw new Error(`${pageInfo.route} threw in the browser: ${blocked.map((error) => error.message).join("; ")}`);
      }

      let html = await page.content();
      html = html.split(`http://127.0.0.1:${port}`).join(SITE_ORIGIN);
      const { title, description } = assertPage(pageInfo, html);
      if ([...descriptions.values()].includes(description)) {
        throw new Error(`${pageInfo.route} reuses another route's meta description`);
      }
      descriptions.set(pageInfo.route, description);

      const file = outputFile(pageInfo.route);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
      console.log(`prerendered ${pageInfo.route} -> ${path.relative(BUILD_DIR, file)} (${title})`);
      await page.close();
    }
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  }
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
