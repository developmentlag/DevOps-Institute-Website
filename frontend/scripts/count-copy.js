const fs = require("fs");
const path = require("path");
const Module = require("module");
const babel = require("@babel/core");

const SOURCE_DIR = path.resolve(__dirname, "../src");
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function resolveAlias(request, parent, isMain, options) {
  if (typeof request === "string" && request.startsWith("@/")) request = path.join(SOURCE_DIR, request.slice(2));
  return originalResolve.call(this, request, parent, isMain, options);
};
const originalJs = require.extensions[".js"];
require.extensions[".js"] = function compileJs(module, filename) {
  if (!filename.startsWith(SOURCE_DIR)) return originalJs(module, filename);
  const result = babel.transformSync(fs.readFileSync(filename, "utf8"), {
    filename,
    babelrc: false,
    configFile: false,
    presets: [
      [require.resolve("@babel/preset-env"), { targets: { node: "current" }, modules: "commonjs" }],
      [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
    ],
  });
  module._compile(result.code, filename);
};
require.extensions[".css"] = (module) => { module.exports = {}; };

const { getSeoPage } = require("../src/data/seoCopy");
const { STATIC_PAGES, COURSE_ANSWERS, buildPrerenderPages } = require("../src/data/pageMeta");

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function pageWords(page) {
  const parts = [page.answer];
  for (const section of page.sections || []) {
    parts.push(section.h2, ...(section.paragraphs || []));
    if (section.table) parts.push(...section.table.rows.flat(), ...section.table.headers);
  }
  for (const faq of page.faqs || []) parts.push(faq.q, faq.a);
  if (page.syllabusModules) {
    for (const mod of page.syllabusModules) parts.push(mod.name, mod.tools, mod.hours, mod.project, mod.detail);
  }
  return words(parts.join(" "));
}

const pages = buildPrerenderPages();
const titles = new Map();
const descriptions = new Map();
for (const page of pages) {
  if (page.title.length > 60) console.log("TITLE", page.title.length, page.route, page.title);
  if (page.description.length < 40 || page.description.length > 155) console.log("DESC", page.description.length, page.route);
  if (titles.has(page.title)) console.log("DUP TITLE", page.route, titles.get(page.title));
  if (descriptions.has(page.description)) console.log("DUP DESC", page.route, descriptions.get(page.description));
  titles.set(page.title, page.route);
  descriptions.set(page.description, page.route);
}

for (const page of STATIC_PAGES) {
  const count = words(page.answer);
  if (count < 40 || count > 60) console.log("ANSWER", count, page.route);
}
for (const [slug, answer] of Object.entries(COURSE_ANSWERS)) {
  const count = words(answer);
  if (count < 40 || count > 60) console.log("COURSE ANSWER", count, slug);
}

const { SEO_ROUTES } = require("../src/data/seoRoutes");
for (const route of SEO_ROUTES) {
  const page = getSeoPage(route.path);
  if (!page) {
    console.log("MISSING PAGE", route.path);
    continue;
  }
  const count = words(page.answer);
  if (count < 40 || count > 60) console.log("SEO ANSWER", count, route.path);
  const total = pageWords(page);
  const pillar = route.path === "/devops-course" || route.path === "/cloud-computing-course";
  const exempt = route.path === "/sitemap" || route.path === "/404";
  const needs800 = !exempt && !pillar && route.group !== "trust" && route.group !== "utility";
  if (pillar && total < 2500) console.log("SHORT PILLAR", total, route.path);
  if (needs800 && total < 800) console.log("SHORT", total, route.path);
  if (pillar) console.log("PILLAR", total, route.path);
}
console.log("routes", pages.length);
