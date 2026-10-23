/**
 * Chrome-free prerender.
 *
 * Vercel's build image cannot launch headless Chrome, and a thrown prerender
 * used to fail the whole deployment. This script renders each public route
 * with React in Node and writes build/<route>/index.html. If rendering cannot
 * run, it logs the error and leaves the CRA shell in place so the deploy
 * still succeeds.
 */
const fs = require("fs");
const path = require("path");

if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";

const SITE_ORIGIN = "https://devopsinstitute.co.in";
const BUILD_DIR = path.resolve(__dirname, "../build");
const SOURCE_DIR = path.resolve(__dirname, "../src");
const SITE_SOURCE = path.join(SOURCE_DIR, "data/site.js");

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
  if (!robots.includes("Sitemap: https://devopsinstitute.co.in/sitemap.xml")) {
    throw new Error("robots.txt must list the sitemap");
  }

  const sitemap = fs.readFileSync(path.join(BUILD_DIR, "sitemap.xml"), "utf8");
  for (const page of PAGES) {
    const loc = `${SITE_ORIGIN}${page.route === "/" ? "/" : page.route}`;
    if (!sitemap.includes(`<loc>${loc}</loc>`)) throw new Error(`sitemap.xml is missing ${loc}`);
  }

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
  if (description.length < 40) throw new Error(`${page.route} is missing a meta description`);
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
  if (/\bguaranteed\b/i.test(rootHtml)) throw new Error(`${page.route} contains the word guaranteed`);
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

function renderRoutes(shell) {
  installSourceLoader();
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
  assertRoutesMatchCourses();
  const shellPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(shellPath)) throw new Error("frontend/build/index.html is missing. Run the CRA build first.");
  assertCrawlerFiles();
  const shell = fs.readFileSync(shellPath, "utf8");
  const files = renderRoutes(shell);
  for (const { page, html } of files) {
    const file = outputFile(page.route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    console.log(`prerendered ${page.route} -> ${path.relative(BUILD_DIR, file)}`);
  }
}

try {
  prerender();
} catch (error) {
  console.warn("Prerender failed. Shipping the client-rendered build.");
  console.warn(error && error.stack ? error.stack : error);
}
