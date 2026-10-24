/**
 * Chrome-free prerender.
 *
 * Vercel's build image cannot launch headless Chrome, and a thrown prerender
 * used to fail the whole deployment. This script renders each public route
 * with React in Node and writes build/<route>/index.html. If rendering cannot
 * run, it logs the error and leaves the CRA shell in place so the deploy
 * still succeeds. scripts/validate-seo.js then fails the build when the HTML
 * or JSON-LD is wrong.
 */
const fs = require("fs");
const path = require("path");

if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";

const SITE_ORIGIN = "https://www.devopsinstitute.co.in";
const BUILD_DIR = path.resolve(__dirname, "../build");
const SOURCE_DIR = path.resolve(__dirname, "../src");
const PUBLIC_DIR = path.resolve(__dirname, "../public");
const SITE_SOURCE = path.join(SOURCE_DIR, "data/site.js");

const AI_CRAWLERS = [
  "Googlebot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

let PAGES = [];

function courseSlugs() {
  const source = fs.readFileSync(SITE_SOURCE, "utf8");
  return [...source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((match) => match[1]);
}

function assertRoutesMatchCourses() {
  const slugs = courseSlugs();
  if (slugs.length === 0) throw new Error("No course slugs found in src/data/site.js");
  const expected = new Set(slugs.map((slug) => `/courses/${slug}`));
  const listed = new Set(PAGES.filter((page) => page.route.startsWith("/courses/")).map((page) => page.route));
  for (const route of expected) {
    if (!listed.has(route)) throw new Error(`Prerender route list is missing ${route}`);
  }
  for (const route of listed) {
    if (!expected.has(route)) throw new Error(`Prerender lists ${route}, but that slug is not in src/data/site.js`);
  }
}

function assertCrawlerFiles() {
  const robots = fs.readFileSync(path.join(BUILD_DIR, "robots.txt"), "utf8");
  for (const crawler of AI_CRAWLERS) {
    if (!robots.includes(`User-agent: ${crawler}`) || !robots.includes("Allow: /")) {
      throw new Error(`robots.txt must allow ${crawler}`);
    }
  }
  if (!robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`)) {
    throw new Error("robots.txt must list the sitemap");
  }

  const sitemap = fs.readFileSync(path.join(BUILD_DIR, "sitemap.xml"), "utf8");
  for (const page of PAGES) {
    if (page.index === false) continue;
    const loc = `${SITE_ORIGIN}${page.route === "/" ? "/" : page.route}`;
    if (!sitemap.includes(`<loc>${loc}</loc>`)) throw new Error(`sitemap.xml is missing ${loc}`);
  }
  if (sitemap.includes(`${SITE_ORIGIN}/404`)) throw new Error("sitemap.xml must not list /404");

  const llms = fs.readFileSync(path.join(BUILD_DIR, "llms.txt"), "utf8");
  for (const snippet of [
    "https://devopsinstitutemumbai.co.in/",
    "450+ placed",
    "Powai, Mumbai",
    "## Campuses (DevOps Institute)",
    "https://datainstitute.in/",
  ]) {
    if (!llms.includes(snippet)) throw new Error(`llms.txt is missing ${snippet}`);
  }
}

function installSourceLoader() {
  const babel = require("@babel/core");
  const Module = require("module");
  const originalResolve = Module._resolveFilename;
  Module._resolveFilename = function resolveAlias(request, parent, isMain, options) {
    if (typeof request === "string" && request.startsWith("@/")) {
      request = path.join(SOURCE_DIR, request.slice(2));
    }
    return originalResolve.call(this, request, parent, isMain, options);
  };

  const compile = (module, filename) => {
    const source = fs.readFileSync(filename, "utf8");
    const result = babel.transformSync(source, {
      filename,
      babelrc: false,
      configFile: false,
      sourceMaps: false,
      presets: [
        [require.resolve("@babel/preset-env"), { targets: { node: "current" }, modules: "commonjs" }],
        [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
      ],
    });
    module._compile(result.code, filename);
  };

  const compileIfSource = (fallback) => (module, filename) => {
    if (filename.startsWith(`${SOURCE_DIR}${path.sep}`)) compile(module, filename);
    else fallback(module, filename);
  };

  require.extensions[".js"] = compileIfSource(require.extensions[".js"]);
  require.extensions[".jsx"] = compile;
  require.extensions[".css"] = (module) => {
    module.exports = {};
  };
}

function decodeHtml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(Number(num)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
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
  if (title.length > 60) throw new Error(`${page.route} title is ${title.length} characters`);
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
  if (description.length < 40) throw new Error(`${page.route} is missing a meta description`);
  if (description.length > 155) throw new Error(`${page.route} description is ${description.length} characters`);
  if (page.description && description !== page.description) {
    throw new Error(`${page.route} description mismatch.\n expected: ${page.description}\n actual:   ${description}`);
  }
  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (page.jsonLd) {
    if (jsonLd.length === 0) throw new Error(`${page.route} is missing JSON-LD`);
    const payload = jsonLd.map((match) => match[1]).join("\n");
    if (!payload.includes(SITE_ORIGIN)) throw new Error(`${page.route} JSON-LD does not use ${SITE_ORIGIN}`);
    JSON.parse(jsonLd.length === 1 ? jsonLd[0][1] : `[${jsonLd.map((match) => match[1]).join(",")}]`);
  } else if (jsonLd.length > 0) {
    throw new Error(`${page.route} should not ship JSON-LD`);
  }
  if (html.includes("127.0.0.1") || html.includes("localhost")) {
    throw new Error(`${page.route} still contains a local prerender host`);
  }
  if (!html.includes("https://devopsinstitutemumbai.co.in/")) {
    throw new Error(`${page.route} is missing the Thane & Navi Mumbai link`);
  }
  const rootAt = html.indexOf('id="root"');
  const rootHtml = rootAt === -1 ? html : html.slice(rootAt).replace(/<script[\s\S]*?<\/script>/gi, "");
  if (/\bguaranteed\b/i.test(rootHtml) || /\bguarantee\b/i.test(rootHtml)) {
    throw new Error(`${page.route} contains the word guarantee`);
  }
  return description;
}

function outputFile(route) {
  if (route === "/") return path.join(BUILD_DIR, "index.html");
  return path.join(BUILD_DIR, route.replace(/^\//, ""), "index.html");
}

function splitRendered(markup) {
  const tags = [];
  const pattern = /<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>|<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi;
  const body = markup.replace(pattern, (tag) => {
    tags.push(tag);
    return "";
  });
  return { tags, body };
}

function applyDocument(shell, tags, body) {
  let html = shell;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, "");
  html = html.replace(/<meta\b[^>]*name=["']description["'][^>]*>/i, "");
  html = html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
  if (!html.includes('<div id="root"></div>')) {
    throw new Error("CRA index.html has no empty #root placeholder");
  }
  html = html.replace("</head>", `${tags.join("")}</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

function writeCrawlFiles() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = PAGES.filter((page) => page.index !== false)
    .map((page) => {
      const loc = `${SITE_ORIGIN}${page.route === "/" ? "/" : page.route}`;
      return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
    })
    .join("\n");
  fs.writeFileSync(
    path.join(BUILD_DIR, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );

  let robots = fs.readFileSync(path.join(PUBLIC_DIR, "robots.txt"), "utf8");
  if (!robots.includes("User-agent: Applebot-Extended")) {
    robots = robots.replace("Sitemap:", "User-agent: Applebot-Extended\nAllow: /\n\nSitemap:");
  }
  fs.writeFileSync(path.join(BUILD_DIR, "robots.txt"), robots);

  const { SEO_ROUTES } = require("../src/data/seoRoutes");
  const { COURSES } = require("../src/data/site");
  const baseLlms = fs.readFileSync(path.join(PUBLIC_DIR, "llms.txt"), "utf8").trimEnd();
  const lines = [
    `- [Home](${SITE_ORIGIN}/): Classroom DevOps training in Powai, Mumbai with placement support.`,
    `- [About](${SITE_ORIGIN}/about): Campus story, labs and the Chandivali address.`,
    `- [Courses](${SITE_ORIGIN}/courses): AWS, Azure, GCP, DevOps, Kubernetes and Terraform.`,
    ...COURSES.map((course) => `- [${course.name}](${SITE_ORIGIN}/courses/${course.slug}): ${course.metaDescription}`),
    `- [Contact](${SITE_ORIGIN}/contact): Phone, map and enquiry form for the Powai campus.`,
    `- [FAQs](${SITE_ORIGIN}/faqs): Published answers about courses, batches and the campus.`,
    `- [Privacy](${SITE_ORIGIN}/privacy-policy): How enquiry details are handled.`,
    ...SEO_ROUTES.filter((route) => route.index !== false).map(
      (route) => `- [${route.title}](${SITE_ORIGIN}${route.path}): ${route.summary}`,
    ),
  ];
  fs.writeFileSync(path.join(BUILD_DIR, "llms.txt"), `${baseLlms}\n\n## Pages\n${lines.join("\n")}\n`);

  const { getSeoPage } = require("../src/data/seoCopy");
  const chunks = ["# DevOps Institute, Powai", "Address: Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village, Chandivali, Powai, Mumbai, Maharashtra 400072", "Phone: 083695 18569", ""];
  for (const route of SEO_ROUTES) {
    const page = getSeoPage(route.path);
    if (!page) continue;
    chunks.push(`# ${page.route.h1}`);
    chunks.push(page.answer);
    for (const section of page.sections || []) {
      chunks.push(`## ${section.h2}`);
      chunks.push(...section.paragraphs);
    }
    for (const faq of page.faqs || []) {
      chunks.push(`Q: ${faq.q}`);
      chunks.push(`A: ${faq.a}`);
    }
    chunks.push("");
  }
  fs.writeFileSync(path.join(BUILD_DIR, "llms-full.txt"), `${chunks.join("\n")}\n`);
}

function loadPages() {
  installSourceLoader();
  globalThis.__DOI_SYNC_PAGES__ = {
    about: require("../src/pages/About"),
    courses: require("../src/pages/Courses"),
    courseDetail: require("../src/pages/CourseDetail"),
    contact: require("../src/pages/Contact"),
    faqs: require("../src/pages/Faqs"),
    privacy: require("../src/pages/PrivacyPolicy"),
    seo: require("../src/pages/SeoLanding"),
    notFound: require("../src/pages/NotFound"),
  };
  const { buildPrerenderPages } = require("../src/data/pageMeta");
  PAGES = buildPrerenderPages();
}

function renderRoutes(shell) {
  const React = require("react");
  const { renderToString } = require("react-dom/server");
  const { StaticRouter } = require("react-router");
  const { AppShell } = require("../src/App");

  const descriptions = new Map();
  const files = [];
  for (const page of PAGES) {
    const markup = renderToString(
      React.createElement(StaticRouter, { location: page.route }, React.createElement(AppShell)),
    );
    const { tags, body } = splitRendered(markup);
    const html = applyDocument(shell, tags, body);
    const description = assertPage(page, html);
    if ([...descriptions.values()].includes(description)) {
      throw new Error(`${page.route} reuses another route's meta description`);
    }
    descriptions.set(page.route, description);
    files.push({ page, html });
  }
  return files;
}

function prerender() {
  if (process.env.PRERENDER_DISABLE === "1") {
    console.warn("Prerender disabled. Shipping the client-rendered build.");
    return;
  }
  const shellPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(shellPath)) throw new Error("frontend/build/index.html is missing. Run the CRA build first.");
  loadPages();
  assertRoutesMatchCourses();
  writeCrawlFiles();
  assertCrawlerFiles();
  const shell = fs.readFileSync(shellPath, "utf8");
  const files = renderRoutes(shell);
  for (const { page, html } of files) {
    const file = outputFile(page.route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    if (page.route === "/404") fs.writeFileSync(path.join(BUILD_DIR, "404.html"), html);
    console.log(`prerendered ${page.route} -> ${path.relative(BUILD_DIR, file)}`);
  }
}

try {
  prerender();
} catch (error) {
  console.warn("Prerender failed. Shipping the client-rendered build.");
  console.warn(error && error.stack ? error.stack : error);
  process.exitCode = 0;
}
