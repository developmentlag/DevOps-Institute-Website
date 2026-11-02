/**
 * Build-time uniqueness gate for batch-1 area pages.
 * Compares editorial sentences (answer, sections, tables, FAQs).
 * Area names and the words "devops" / "cloud computing" are normalised so a
 * city-swapped or course-swapped template still fails.
 * Fails when the worst pair shares more than 25% of its longer-filtered sentences.
 */
const fs = require("fs");
const path = require("path");

const SOURCE_DIR = path.resolve(__dirname, "../src");
const THRESHOLD = 0.25;
const MIN_WORDS = 8;

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
  const previousJs = require.extensions[".js"];
  require.extensions[".js"] = (module, filename) => {
    if (filename.startsWith(`${SOURCE_DIR}${path.sep}`)) compile(module, filename);
    else previousJs(module, filename);
  };
  require.extensions[".jsx"] = compile;
}

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function editorialText(page) {
  const parts = [page.answer];
  for (const section of page.sections || []) {
    parts.push(section.h2, ...(section.paragraphs || []));
    if (section.table) {
      parts.push(section.table.caption, ...(section.table.headers || []), ...(section.table.rows || []).flat());
    }
  }
  for (const faq of page.faqs || []) parts.push(faq.q, faq.a);
  return parts.filter(Boolean).join(" ");
}

function sentences(text) {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => words(sentence) >= MIN_WORDS);
}

function normalize(sentence, areaLabel) {
  let value = sentence.toLowerCase().replace(/[^a-z0-9%+\s]/g, " ");
  const area = String(areaLabel || "").toLowerCase().trim();
  if (area) value = value.split(area).join(" area ");
  value = value.replace(/\bcloud computing\b/g, " track ");
  value = value.replace(/\bdevops\b/g, " track ");
  return value.replace(/\s+/g, " ").trim();
}

function overlap(a, b) {
  if (!a.length || !b.length) return 0;
  const setB = new Set(b);
  let shared = 0;
  for (const sentence of new Set(a)) if (setB.has(sentence)) shared += 1;
  return shared / Math.min(new Set(a).size, setB.size);
}

function main() {
  installSourceLoader();
  const { LOCAL_PAGES } = require("../src/data/seo/localBatch");
  if (!LOCAL_PAGES || LOCAL_PAGES.length < 20) {
    throw new Error(`Expected at least 20 batch pages, found ${LOCAL_PAGES ? LOCAL_PAGES.length : 0}`);
  }

  const prepared = LOCAL_PAGES.map((page) => {
    const text = editorialText(page);
    const raw = sentences(text);
    const normalized = raw.map((sentence) => normalize(sentence, page.label));
    return { page, text, raw, normalized, wordCount: words(text), answerWords: words(page.answer) };
  });

  const failures = [];
  for (const item of prepared) {
    const { page } = item;
    if (item.wordCount < 2000 || item.wordCount > 3600) {
      failures.push(`${page.path} editorial word count ${item.wordCount} (aim 2000-3500)`);
    }
    if (item.answerWords < 40 || item.answerWords > 60) {
      failures.push(`${page.path} direct answer is ${item.answerWords} words`);
    }
    if (page.title.length > 60) failures.push(`${page.path} title length ${page.title.length}`);
    if (page.description.length < 40 || page.description.length > 155) {
      failures.push(`${page.path} description length ${page.description.length}`);
    }
    if (/\bguarantee(d)?\b/i.test(item.text)) failures.push(`${page.path} contains guarantee`);
    if (item.text.includes("TODO") || /not in the repository/i.test(item.text)) {
      failures.push(`${page.path} contains a developer note`);
    }
    if ((page.faqs || []).length < 8 || (page.faqs || []).length > 12) {
      failures.push(`${page.path} has ${(page.faqs || []).length} FAQs`);
    }
  }

  let maxRatio = 0;
  let maxPair = "";
  const rows = [];
  for (let i = 0; i < prepared.length; i += 1) {
    let worst = 0;
    let worstPath = "";
    for (let j = 0; j < prepared.length; j += 1) {
      if (i === j) continue;
      const ratio = overlap(prepared[i].normalized, prepared[j].normalized);
      if (ratio > worst) {
        worst = ratio;
        worstPath = prepared[j].page.path;
      }
    }
    const pct = Math.round(worst * 1000) / 10;
    rows.push({ path: prepared[i].page.path, words: prepared[i].wordCount, sharedPct: pct, against: worstPath });
    if (worst > maxRatio) {
      maxRatio = worst;
      maxPair = `${prepared[i].page.path} vs ${worstPath}`;
    }
    if (worst > THRESHOLD) failures.push(`${prepared[i].page.path} shares ${pct}% of sentences with ${worstPath}`);
  }

  rows.sort((a, b) => a.path.localeCompare(b.path));
  console.log("Batch 1 area pages");
  for (const row of rows) {
    console.log(`${row.path}\t${row.words} words\tmax shared ${row.sharedPct}% vs ${row.against}`);
  }
  console.log(`max shared-sentence ${(Math.round(maxRatio * 1000) / 10).toFixed(1)}% (${maxPair}), threshold ${THRESHOLD * 100}%`);

  const reportPath = path.resolve(__dirname, "../build/area-uniqueness.json");
  if (fs.existsSync(path.dirname(reportPath))) {
    fs.writeFileSync(reportPath, JSON.stringify({ threshold: THRESHOLD, maxRatio, maxPair, rows, failures }, null, 2));
  }

  if (failures.length) {
    console.error(failures.slice(0, 40).join("\n"));
    console.error(`${failures.length} uniqueness checks failed`);
    process.exit(1);
  }
}

try {
  main();
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
}
