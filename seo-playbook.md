---
title: "SEO & AI-Visibility Playbook"
subtitle: "Outranking the incumbents in DevOps, Cloud, SRE & Data Engineering"
---

# SEO & AI-Visibility Playbook

**Outranking the incumbents in DevOps, Cloud, SRE & Data Engineering**

A build-order playbook for a new Next.js site on Vercel — competitive teardown, keyword architecture, programmatic page system, technical spec, structured data, `llms.txt`, and the AI-citation layer.

Version 1.0 · September 2026 · Target market: India-first (Mumbai / Pune / Bengaluru / Hyderabad), global secondary

---

## How to use this document with a coding agent

This file is written to be handed directly to Claude Code or a similar CLI agent. Suggested entry prompts:

- `Read seo-playbook.md. Implement Section 7 (technical SEO) against this repo. Start with 7.2 — the preview-deployment noindex middleware — then the sitemap and robots route handlers from Appendix A and B.`
- `Read seo-playbook.md Section 8. Build typed JSON-LD components for Organization, Course, TechArticle, BreadcrumbList and QAPage, generated from our content model.`
- `Read seo-playbook.md Section 6. Add the ship-gate checks to CI: shingle-overlap uniqueness, required frontmatter fields, word count, and an orphan-page graph check.`
- `Read seo-playbook.md Appendix E and define our content model / frontmatter schema to match, with build-time validation.`

Sections 1–4 and 11–13 are strategy and are for humans, not the agent. Sections 5–10 and the Appendix are implementable.

---

> **Assumption to confirm before you execute.** This plan assumes you are selling **training / certification / bootcamp-style education** in DevOps, Cloud, SRE and Data Engineering — because that is what StarAgile, SevenMentor, FITA, Skillogic and Justdial are all competing for on the target SERP. If you are actually a **tooling / SaaS / consulting** business, sections 1–4 still hold, but swap the "course / city / certification" page families in §5 for "tool / error / integration / benchmark" families, and drop §13 (local SEO) entirely. Everything else is unchanged.

---

# 1. What you're actually up against

None of these sites is winning on quality. They are winning on **URL count × domain age × schema × paid support**. That is a beatable formula, but only if you understand each lever separately.

## The mechanics behind the five results

| Competitor | What's actually earning the ranking | How replicable |
|---|---|---|
| **StarAgile** — `/devops/devops-certification-training-in-mumbai` | Templated *course × city* URL matrix (likely 500–2,000+ permutations), title stuffed with commercial modifiers ("with GenAI & 100% Placement"), `Course` schema carrying `aggregateRating` 4.8 / 31,245. Deep topical silo under `/devops/`. | High — but the review count is the real moat, and it's the part you must build honestly. |
| **SevenMentor** | Old domain, thousands of city×tech pages, strong local signals (phone number in the meta description = Google Business Profile alignment), Pune/Mumbai local-pack presence. | Medium — domain age can't be bought; local signals can be built in ~6 months. |
| **FITA Academy** | Enormous course catalogue, breadcrumb-style URL path shown in the SERP, 78,329 ratings, very high internal link density between courses and cities. | Medium — the internal-link engine is copyable in a weekend; the catalogue takes a year. |
| **Skillogic** | The only one answering the actual money question in the snippet: *price*. "INR 28,450 classroom / 25,900 live online / 19,000 …". Google is rewarding a page that resolves commercial intent inside the snippet. | **Copy this today.** Publishing real, specific, dated numbers is free and immediately effective. |
| **Justdial** | Pure aggregator authority. Ranks for "best X in Y" because Google trusts marketplaces for list intent. You will not outrank it — you should instead *be listed on it*. | Not replicable. Join it, don't fight it. |
| **paperlive.in** (Sponsored) | Google Ads, not SEO. Its presence validates that the keyword has commercial value and signals the CPC you'd face. | N/A — but pull its ad copy for angle research. |

## The three real levers, ranked by leverage

1. **Star ratings in the SERP.** Those 4.8★/5.0★ badges come from `aggregateRating` inside `Course` schema. Course rich results are one of the few remaining types Google still renders stars for. A result with stars takes a disproportionate share of clicks even at a lower position. This is the single highest-ROI technical item on your list.
2. **URL count in a tight topical cluster.** Not site-wide volume — *cluster density*. A site with 300 excellent pages all about DevOps outranks a site with 3,000 pages about everything.
3. **Commercial specificity in the first 155 characters.** Fees, duration, batch dates, placement numbers, tool lists. Skillogic proves it works.

---

# 2. Where they're weak — your wedge

| Their weakness | Your counter-move |
|---|---|
| Pages written by content writers, not engineers. Tool sections describe Kubernetes in 80 generic words. | Every technical page authored or reviewed by a named practitioner with a real GitHub/LinkedIn, marked up with `author` + `sameAs`. |
| Zero first-party data. No salary data, no hiring data, no benchmark, no real error output. | Publish original data. One annual report ("State of SRE & Platform Hiring in India") will earn more links and AI citations than 200 course pages. |
| Almost no bottom-funnel technical content. They own "DevOps training in Mumbai" but nothing for "kubectl CrashLoopBackOff exit code 137" or "Terraform vs Pulumi for a 12-person team". | This is the whole opening. Practitioner-intent content is where the buyers actually are, and where LLMs source answers. |
| Slow, heavy WordPress stacks with poor INP and layout shift on mobile. | You're on Next.js/Vercel. Statically render, hit sub-2.0s LCP and sub-200ms INP, and you win the tiebreaks. |
| Content is never meaningfully updated. | Freshness is a disproportionately strong signal for AI retrieval. Perplexity shows a measurable boost for content updated within roughly the last 30 days, and studies put recently-refreshed pages at close to double the citation rate of stale ones. |
| No presence where LLMs actually source from — Reddit, GitHub, YouTube transcripts, Stack Overflow. | Distribution, not just publishing. See §12. |

---

# 3. The positioning decision

You don't want to be broad. Good — that instinct is the strategy. Formalise it:

> **We will rank for what a working DevOps / Cloud / SRE / Data engineer actually types, not just what a course-shopper types.** The incumbents own the ~40 commercial "training in {city}" keywords. We will own the ~4,000 practitioner keywords that sit upstream of those purchases, and convert them.

Three reasons this matters:

- **It's uncontested.** Nobody in that SERP has the engineering staff to write credibly about etcd quorum loss or Airflow DAG scheduling latency.
- **It's what LLMs cite.** Answer engines retrieve on specificity — definitions, numbers, comparisons, procedures. Commercial city pages have none of those.
- **It compounds into the commercial terms.** A site that Google trusts on 800 Kubernetes topics eventually gets handed "Kubernetes certification training". The reverse never happens.

**Domain scope — lock these four, refuse the fifth.** DevOps · Cloud (AWS / Azure / GCP) · SRE & Platform Engineering · Data Engineering. Explicitly *out of scope* for year one: general programming, data science/ML, cybersecurity, testing, digital marketing. Every incumbent dilutes across 40+ categories. Your narrowness is the advantage; don't spend it.

---

# 4. Keyword & entity architecture

Stop thinking in keyword lists. Think in **entities × intents**. Build one spreadsheet with these axes, and every page on the site becomes a cell in it.

## The entity axes

| Axis | Values (seed set — expand to 30–60 each) |
|---|---|
| **Domain** (4) | DevOps, Cloud, SRE/Platform, Data Engineering |
| **Tool / Tech** (~120) | Kubernetes, Docker, Terraform, Ansible, Jenkins, GitHub Actions, ArgoCD, Helm, Prometheus, Grafana, Istio, Vault, AWS EKS, Azure AKS, GCP GKE, Lambda, S3, EC2, CloudFormation, Pulumi, Datadog, OpenTelemetry, PagerDuty, Airflow, dbt, Spark, Kafka, Snowflake, Databricks, BigQuery, Redshift, Flink, Iceberg, Debezium, Dagster, Prefect, Trino |
| **Concept** (~80) | CI/CD, GitOps, IaC, blue-green deploy, canary release, SLO/SLI/error budget, observability, incident response, postmortem, chaos engineering, autoscaling, service mesh, secrets management, FinOps, data modelling, CDC, medallion architecture, lakehouse, idempotency, backfill |
| **Role** (~12) | DevOps engineer, SRE, platform engineer, cloud architect, data engineer, analytics engineer, MLOps engineer, DevSecOps |
| **Certification** (~25) | CKA, CKAD, CKS, AWS SAA/DVA/DOP, Azure AZ-104/AZ-400, GCP PCA/PDE, Terraform Associate, Databricks DE Associate |
| **City** (~10, capped) | Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Delhi NCR, Noida, Ahmedabad, Kolkata, Kochi — *and no more* (see §13) |

## The intent axes — this is where the volume is

| Intent | Query pattern | Example | Priority |
|---|---|---|---|
| Definitional | what is {concept} | what is an error budget | Med |
| Procedural | how to {task} in {tool} | how to roll back a Helm release | High |
| **Troubleshooting** | {tool} {error string} | kubectl CrashLoopBackOff exit code 137 | **Highest** |
| **Comparison** | {tool A} vs {tool B} | ArgoCD vs Flux for multi-cluster | **Highest** |
| Cost / pricing | {tool} pricing, {cert} exam fee | CKA exam cost in India 2026 | High |
| Career | {role} salary {city}, roadmap | SRE salary in India 2026 | High |
| Interview | {tool} interview questions | Terraform interview questions, 5 yrs exp | High |
| Certification | {cert} syllabus / exam guide | CKA exam syllabus 2026 | High |
| Commercial | {domain} training in {city} | DevOps course in Mumbai | Med (contested) |

**Why troubleshooting and comparison rank highest:** they are the two content genres AI answer engines pull from most reliably — they contain extractable evidence (an exact error string, a decision table, a numbered fix). They also have near-zero competition from the incumbents, and the person typing them is an employed engineer, i.e. exactly who buys or recommends training.

## How to build the actual list

1. **Scrape the incumbents' sitemaps.** `staragile.com/sitemap.xml`, `fita.in/sitemap.xml`, etc. That gives you their entire URL matrix in an hour — the exact page inventory they took years to build.
2. **Mine error strings from source.** Kubernetes/Terraform/Airflow GitHub issues, Stack Overflow tags sorted by views, top posts in r/devops, r/kubernetes, r/dataengineering. These are keywords no keyword tool surfaces well.
3. **Harvest "People also ask"** for every head term, recursively, two levels deep.
4. **Collect prompt-keywords.** Write down the 200 questions a buyer would type into ChatGPT, not Google ("which DevOps certification is worth it in 2026 if I'm a 3-year Java dev in India"). These are your GEO targets and belong in the same sheet.
5. **Score each row** on: volume · difficulty · commercial proximity · *data availability* (can we say something nobody else can?). Sort by the last column, not the first.

---

# 5. The page-type system

Nine page families. Each has a fixed template, a fixed schema type, and a fixed internal-linking role. This is programmatic SEO — but built as a *database of genuinely distinct pages*, not a mail-merge.

| # | Page family | URL pattern | Scale | Schema |
|---|---|---|---|---|
| 1 | **Domain pillar** — the definitive hub | `/devops/` | 4 | Article + Breadcrumb |
| 2 | **Tool guide** — canonical resource per tool | `/devops/kubernetes/` | ~120 | TechArticle |
| 3 | **Concept / how-to** | `/devops/kubernetes/rolling-updates/` | ~600 | TechArticle |
| 4 | **Error & fix** — one page per real error string | `/fix/kubernetes/crashloopbackoff-exit-code-137/` | ~800 | TechArticle + QAPage |
| 5 | **Comparison** | `/compare/argocd-vs-flux/` | ~250 | Article + ItemList |
| 6 | **Certification guide** | `/certifications/cka/` | ~25 | Course + EducationalOccupationalCredential |
| 7 | **Career / salary** — backed by your own data | `/careers/sre-salary-india/` | ~60 | Article + Dataset |
| 8 | **Course / product** | `/courses/devops-engineering/` | ~20 | Course + CourseInstance + Offer |
| 9 | **City landing** (capped) | `/courses/devops-engineering/mumbai/` | ≤10 per course | Course + LocalBusiness |

## Build order

Do **not** launch all nine at once. A new domain publishing 2,000 URLs in month one is the exact fingerprint Google's scaled-content-abuse detection looks for.

- **Weeks 1–4:** families 1, 2, 8 — about 40 pages, all hand-built, all excellent. This establishes what your site *is*.
- **Weeks 5–12:** families 3, 4, 5 — ramp to roughly 30–50 pages/week. Never a burst.
- **Month 4+:** families 6, 7, 9, once you have authority and, critically, real data and real reviews to put on them.

---

# 6. The Unique Value Unit rule

This is the single rule that separates programmatic SEO that compounds from programmatic SEO that gets wiped out in a core update. Google's scaled content abuse policy (introduced March 2024, enforced far harder through the 2026 updates) is **method-agnostic** — it doesn't care whether a page was written by a human, a template, or an LLM. It cares whether the page exists to help someone or to occupy a ranking slot. The named failure pattern is exactly the incumbent model: data-template pages that swap a city or product name into an identical structure.

> **The rule: no page ships unless it contains at least one Unique Value Unit that exists on no other page on the internet.** Enforce it as a CI check, not a guideline.

**What counts as a UVU**

- A real terminal transcript — the actual error, the actual fix, the actual exit code
- A benchmark you ran (build times, cold-start latency, cost per 1M invocations) with methodology stated
- A working config file / Terraform module / manifest you'd actually deploy
- A decision table with explicit thresholds ("under 8 clusters: Flux; over 8 with multi-tenancy: Argo")
- First-party data: placement outcomes, cohort salary deltas, hiring-partner survey
- A diagram or architecture drawing you made
- Named-practitioner commentary — two paragraphs of "here's what bit us in production"

**What does NOT count**

- Rewording the official docs
- A FAQ block generated from the H2s
- Swapping "Mumbai" for "Pune"
- "In today's fast-paced digital landscape…" — delete this sentence from every draft

## Ship-gate checklist (automate it)

| Gate | Threshold | How to check |
|---|---|---|
| Uniqueness vs. own corpus | < 30% shingle overlap with any existing page | MinHash/SimHash over your own content at build time; fail the build |
| UVU present | ≥ 1, declared in frontmatter | Required field in the content model; build error if empty |
| Human review | 100% of pages, named reviewer | PR approval by a practitioner, logged in `reviewedBy` |
| Substance | ≥ 600 words unique body, ≥ 1 code block or table | Lint rule |
| Freshness | `dateModified` within 180 days | Weekly cron that opens a stale-content issue |
| Search demand | ≥ 1 verified query with real impressions or a real forum question behind it | Manual at brief stage — if nobody asks it, don't publish it |

**Pruning is part of the system.** Every quarter, pull pages with zero clicks and zero impressions after 6 months of indexation. Improve, consolidate, or `410` them. A site with 400 pages that all earn traffic beats a site with 2,000 where 1,600 are dead weight — dead pages drag the whole domain's quality assessment down.

---

# 7. Technical SEO on Next.js + Vercel

## 7.1 Rendering — static or ISR, never client-only

Every indexable page must return complete HTML on the first response. Use the App Router with `generateStaticParams` + ISR. If a crawler has to execute JavaScript to see your content, Google will eventually render it — but AI crawlers largely will not, and that is now half your traffic opportunity.

```ts
// app/devops/[tool]/page.tsx
export const revalidate = 86400;            // ISR: refresh daily
export const dynamicParams = true;          // allow on-demand generation

export async function generateStaticParams() {
  const tools = await getTools();
  return tools.map((t) => ({ tool: t.slug }));
}

export async function generateMetadata({ params }) {
  const t = await getTool(params.tool);
  return {
    title: `${t.name} Guide: Setup, Commands & Common Errors (2026)`,
    description: t.metaDescription,   // hand-written, 150-158 chars, contains a number
    alternates: { canonical: `https://example.com/devops/${t.slug}/` },
    openGraph: { type: 'article', images: [`/og/${t.slug}.png`] },
    robots: { index: true, follow: true, 'max-image-preview': 'large',
              'max-snippet': -1, 'max-video-preview': -1 },
  };
}
```

`max-snippet:-1` and `max-image-preview:large` matter more than people think — they permit longer snippets, which is what AI Overviews and answer engines excerpt from. Set them globally.

## 7.2 The Vercel-specific traps

| Trap | Fix |
|---|---|
| **Preview deployments getting indexed.** Every PR creates a public `*.vercel.app` URL. If indexed, you have instant duplicate content across hundreds of hostnames. | Middleware that sets `X-Robots-Tag: noindex, nofollow` when `VERCEL_ENV !== 'production'`, plus a production-only `robots.txt`. Do this on day one. |
| Both `vercel.app` and your apex domain resolving | 301 redirect all non-canonical hosts to the primary domain in middleware |
| Trailing-slash inconsistency — `/devops` and `/devops/` both returning 200 | Pick one in `next.config.js` (`trailingSlash: true`), redirect the other, and make every internal link and canonical match exactly |
| www vs non-www both live | One canonical host, 301 the other |
| Sitemap over 50,000 URLs or 50MB uncompressed | Generate a sitemap index with `generateSitemaps()`, split by page family |
| Cache headers fighting ISR | For static pages let Vercel handle it; for route handlers set `s-maxage=86400, stale-while-revalidate=604800` |
| Edge middleware running on every request, adding TTFB latency | Tight `matcher` config; exclude static assets and `_next` |

```ts
// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  if (process.env.VERCEL_ENV !== 'production') {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }
  return res;
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|svg|webp)$).*)'],
};
```

## 7.3 Core Web Vitals targets

| Metric | Target (75th pct, mobile) | Main lever on your stack |
|---|---|---|
| LCP | < 2.0s | `next/image` with `priority` on the hero; no render-blocking third-party scripts; static generation |
| INP | < 150ms | Minimise client components; defer analytics with `next/script strategy="lazyOnload"`; no heavy hydration on content pages |
| CLS | < 0.05 | Explicit width/height on all media; `next/font` with `display: swap` and size-adjust; reserve space for embeds |
| TTFB | < 200ms | Static/ISR served from edge cache; keep middleware thin |

Install `@vercel/speed-insights` for field data, but validate against Chrome UX Report in Search Console — that's the dataset Google actually uses.

## 7.4 Non-negotiable hygiene

- One `H1` per page, matching search intent, not your brand
- Self-referencing canonical on every page, absolute URL, matching the trailing-slash convention
- `app/sitemap.ts` and `app/robots.ts` generated from your content database — never hand-maintained
- Accurate `lastmod` in the sitemap (fake-refreshing every URL nightly destroys its value as a signal)
- Breadcrumbs rendered in HTML *and* marked up as `BreadcrumbList`
- Pagination: real `<a href>` links, never infinite scroll only
- 404s return 404; removed pages return 410; never soft-404 with a 200
- HTML-crawlable internal links only — `<Link>`/`<a>`, not `onClick` router pushes
- `hreflang` only if you genuinely publish regional variants; `en-IN` + `x-default` if you do

---

# 8. Structured data specification

This is where you claw back SERP real estate from older domains. Implement as JSON-LD in the App Router, generated from the same data that renders the page.

## 8.1 Site-wide (root layout)

- `Organization` — with `logo`, `sameAs` (LinkedIn, GitHub, YouTube, X), `contactPoint`, `foundingDate`. This is your entity anchor; it feeds both Google's Knowledge Graph and LLM entity resolution.
- `WebSite` with `potentialAction: SearchAction`
- `BreadcrumbList` on every page below root

## 8.2 Course pages — the star-rating play

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "DevOps Engineering Certification Training",
  "description": "16-week instructor-led program covering Docker, Kubernetes, Terraform, ...",
  "provider": { "@type": "Organization", "name": "YourBrand",
                "sameAs": "https://example.com" },
  "educationalLevel": "Intermediate",
  "teaches": ["CI/CD pipeline design", "Kubernetes operations", "Terraform IaC"],
  "offers": {
    "@type": "Offer", "category": "Paid",
    "price": "54999", "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/courses/devops-engineering/"
  },
  "hasCourseInstance": [{
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "PT10H",
    "startDate": "2026-10-12", "endDate": "2027-02-01",
    "instructor": { "@type": "Person", "name": "...",
                    "sameAs": "https://linkedin.com/in/..." }
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7", "reviewCount": "412",
    "bestRating": "5", "worstRating": "1"
  }
}
```

**Read this before you touch `aggregateRating`.** The ratings must correspond to **real reviews that are visible on that page** and collected from real learners. Inflated review counts are a manual-action risk, and manual actions on review snippets are one of the faster ways to lose every rich result you have. The incumbents' five-figure review counts should be treated as a thing to be sceptical of, not a thing to imitate. Start at 40 honest reviews and grow. Wire a post-cohort review request into your LMS on day one — the schema is worthless without the pipeline behind it.

## 8.3 Per page family

| Family | Types | Notes |
|---|---|---|
| Tool / concept / how-to | `TechArticle`, `Article` | Always include `author` (Person with `sameAs`), `datePublished`, `dateModified`, `reviewedBy` |
| Error & fix | `TechArticle` + `QAPage` | Exact error string in `name`; resolution in `acceptedAnswer` |
| Comparison | `Article` + `ItemList` | Lead with a verdict table above the fold |
| Certification | `Course` + `EducationalOccupationalCredential` | Include `competencyRequired`, exam fee, validity period |
| Salary / research | `Article` + `Dataset` | `Dataset` with a downloadable CSV makes the page uniquely citable |
| City landing | `Course` + `LocalBusiness` | Only if a real address exists at that location. Don't fake premises. |
| Video | `VideoObject` | With `transcript`. YouTube presence correlates strongly with AI Overview visibility. |
| FAQ blocks | `FAQPage` | Google largely stopped rendering FAQ rich results in 2023, so expect no visual gain — keep it anyway as a machine-readable Q→A pairing that answer engines parse cleanly |

---

# 9. Internal linking & crawl architecture

FITA's real weapon is link density between its pages. Build yours as code so it can never rot.

- **Depth ≤ 3 clicks** from home to any indexable page. Enforce with a graph check in CI that fails the build on orphans.
- **Hub-and-spoke:** pillar → tool → concept/error. Every spoke links up to its hub with keyword-rich anchor text; every hub links down to all its spokes.
- **Entity-based "related" modules,** generated automatically from shared entity tags — not a "you might also like" plugin. A page tagged `kubernetes` + `observability` links to the 6 nearest pages by tag overlap.
- **Contextual in-body links,** 4–8 per page, descriptive anchors. Ban "click here" and bare URLs.
- **Commercial funnels:** every technical page carries one contextual link to the relevant course page. The CrashLoopBackOff error page links to the Kubernetes course, not to a generic "Contact us".
- **Bidirectional comparison mesh:** every `A vs B` page links to `A vs C`, `B vs C` and to both tool guides. This cluster alone will out-link anything the incumbents have.

---

# 10. llms.txt, llms-full.txt & the crawler stack

The honest version rather than the marketed version.

**What the evidence actually shows.** Adoption sits at roughly 10% of domains in a 300,000-site sample, and among the fifty most-cited domains in AI answers, only one had the file at all. Large-scale bot-log analyses — one covering over 500 million AI crawler events in a 90-day window — found only a few hundred requests targeting `/llms.txt` directly; GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot and Google-Extended overwhelmingly fetch HTML instead. Google has stated on the record that it does not support the file and has no plans to, and John Mueller compared it to the keywords meta tag.

> **Conclusion: ship it, but budget 45 minutes and zero expectations of ranking lift.** Anyone selling you an llms.txt strategy as your AI-visibility plan is selling you the wrong thing.

**Why ship it anyway**

- **Coding agents do read it.** Developer-documentation sites adopted it fastest precisely because agentic coding tools are the one consumer that demonstrably fetches these files. Your audience *is* engineers using those tools.
- Cost is near zero and it's trivially generated from the same content database as your sitemap.
- It forces a useful editorial exercise: naming your 30 genuinely canonical pages.

**Implementation rules**

1. `/llms.txt` — a curated Markdown index. H1 = brand, blockquote = one-line positioning, then linked sections. Keep it to your 30–60 best URLs. Not a sitemap dump.
2. `/llms-full.txt` — full Markdown text of your core documentation, concatenated. Cap it around 300–500KB; beyond that nothing usefully consumes it.
3. **Serve both as `text/plain; charset=utf-8`** and generate them at build time from your content source, so they never drift from the site.
4. **Do not publish an indexable `.md` mirror of every page.** This is the most common implementation mistake and it creates site-wide duplicate content that dilutes crawl budget and can suppress your real pages. If you serve per-page Markdown, gate it behind content negotiation or return `X-Robots-Tag: noindex` on the `.md` variant.
5. **Measure it.** Log requests to both files by user-agent. In 90 days you'll know whether it's worth maintaining, rather than guessing.

## The crawler permission decision

This matters far more than llms.txt.

| User-agent | What it does | Recommendation |
|---|---|---|
| `OAI-SearchBot` | Powers ChatGPT search results and citations | **Allow.** Blocking removes you from ChatGPT answers. |
| `PerplexityBot` | Real-time retrieval for Perplexity answers | **Allow.** |
| `ClaudeBot` / `Claude-SearchBot` | Anthropic crawling & search | **Allow.** |
| `GPTBot` | OpenAI crawling (training + grounding) | Allow. Brand familiarity in model weights is itself a visibility asset for a business like yours. |
| `Google-Extended` | Controls use in Gemini / Vertex grounding. Does *not* affect Google Search ranking. | Allow. |
| `Googlebot`, `Bingbot` | Classic search indexing — also feeds AI Overviews and Copilot | Allow, obviously. |
| Scrapers with no user value | — | Block at the Vercel/Cloudflare layer, not in robots.txt. |

For a training business the calculus is one-sided: you are not a publisher losing ad revenue to zero-click answers. Every AI mention is free top-of-funnel. Block nothing that could cite you.

---

# 11. Getting cited by ChatGPT, Perplexity & AI Overviews

The three engines source differently, so "GEO" is not one playbook. The overlap between domains cited by ChatGPT and by Perplexity has been measured at only around 11%.

| Engine | Sourcing behaviour | What to do about it |
|---|---|---|
| **Google AI Overviews** | Built on the Google index — analysis of 432,000 keywords found 97% of AI Overviews cite at least one source from the top 20 organic results. Roughly half the cited URLs overlap with traditional rankings. | Classic SEO *is* the AIO strategy. Rank top-20 broadly, then structure for extraction. |
| **ChatGPT** | Leans on consensus and established reference sources; heavily weights Wikipedia and well-known media, and mentions brands considerably more often than it links them. | Brand entity work: Wikipedia/Wikidata presence, consistent third-party mentions, being named in "best X" listicles you didn't write. Track mentions, not just links. |
| **Perplexity** | Live search on every query; strongest recency bias of the three; Reddit is its single most-cited domain (~47% of top citations). | Publish/refresh frequently and be genuinely useful on Reddit. A helpful r/devops answer can outrank your own site as a citation source. |
| **Claude** | Favours depth and clean structure — measurably more likely to cite well-organised, bulleted, clearly-sectioned pages. | Semantic HTML, short sections, explicit headings, tables over prose. |

## The on-page format that gets extracted

1. **Answer first.** The 40–60 words directly under the H2 must fully answer the H2's question. No preamble. This chunk is what gets lifted.
2. **One idea per heading,** heading phrased as the actual question a person asks.
3. **Extractable evidence genres:** definitions, numeric facts, comparisons, procedural steps. These are the four formats that consistently show up in cited passages.
4. **Self-contained chunks.** Assume each section is read in isolation with no page context — restate the subject rather than using "it".
5. **Explicit numbers with units, currency and a year.** "₹54,999, as of September 2026" is citable; "affordable" is not.
6. **Visible dates.** Published and last-updated, in the HTML and in schema.
7. **Tables for anything comparative.** They survive chunking better than prose.
8. **Consistent facts everywhere.** If your site, LinkedIn and Justdial listing disagree on your founding year or course price, you become an unreliable entity and get dropped from answers.

## The highest-leverage GEO asset you can build

**One annual original-research report.** "The State of DevOps, SRE & Data Engineering Hiring in India, 2027" — survey 400–800 engineers and 50 hiring managers, publish salary bands by city/role/experience, tool adoption, interview-loop structure. Publish as an HTML page + downloadable CSV + `Dataset` schema.

Original research is the content type that most reliably earns citations across every engine, because it is the only thing that can't be paraphrased from somewhere else. It also generates the editorial backlinks that an 8-month-old domain otherwise has no way to earn, and it gives every salary and career page a first-party number to cite. Budget for this in quarter one, not "someday".

---

# 12. Off-page & entity building

A new domain has no authority. Fastest-return moves in this specific niche, in order:

1. **Open-source a genuinely useful tool.** A Terraform module, a k8s cost-analysis CLI, a set of Airflow operators. GitHub repos earn links from places you can't otherwise reach, and get surfaced by coding agents.
2. **Free interactive calculators:** EKS vs GKE vs AKS TCO, Kubernetes resource-request sizing, cloud egress cost, DevOps salary estimator. These attract links passively for years and are perfect Next.js artifacts.
3. **Annual research report** (§11) with a press push to Indian tech media and startup newsletters.
4. **YouTube, seriously.** Brand mentions in video titles and transcripts have been found to be among the strongest correlates of AI Overview visibility of any signal studied. Post every lecture snippet with a full transcript, and mirror the transcript on your site with `VideoObject`.
5. **Reddit and Stack Overflow presence** from real named engineers on your team. Not link drops — actual answers. Perplexity's citation graph runs through Reddit.
6. **Wikidata entity** for your organisation (Wikipedia notability is a high bar; Wikidata is not). Helps entity resolution across every model.
7. **Get listed on the aggregators** you can't outrank: Justdial, Sulekha, UrbanPro, Course Report, Shiksha. Consistent NAP across all of them.
8. **Instructor personal brands.** Five engineers with active LinkedIn/GitHub/conference talks produce more entity signal than 500 directory backlinks.
9. **Guest technical writing** on high-authority engineering publications — one piece in a respected outlet beats ten on unknown blogs.

**Do not buy links.** On a new domain in a niche Google watches closely, a link-spam signal in year one is close to unrecoverable.

---

# 13. City pages without getting penalised

You will be tempted to generate `{course} × {50 cities}`. Don't. The scaled-content-abuse policy names this pattern almost verbatim: a service page per city where only the city name and title tag change, with no local evidence, funnelling everyone to the same national offering — that's both scaled content abuse and doorway abuse.

**The rule: 10 cities maximum, each earning its page.**

| Required on every city page | Why |
|---|---|
| Real local hiring data — named companies hiring for that role in that city, open-req counts, local salary band | This is the UVU. It's also genuinely useful, which is the point. |
| Actual batch schedule and timings for that city/timezone | Distinct commercial information |
| Named local instructors or alumni, with real outcomes | E-E-A-T and non-duplicable |
| A physical address, only if one exists | Enables `LocalBusiness` + Google Business Profile |
| Local FAQs that differ per city | Not a template merge |
| ≥ 60% unique body content vs. sibling city pages | The measurable threshold; enforce in CI |

If a city can't clear that bar, it doesn't get a page — it gets a section on the course page instead. Ten strong city pages will outperform fifty thin ones, and they won't put the domain at risk.

Where you *do* have premises: claim and complete the Google Business Profile, post weekly, collect reviews there (GBP reviews are the third-party kind and can't be faked without consequence), and build the standard local citation set. The local pack is a separate SERP feature from organic and is winnable much faster than position 1.

---

# 14. Measurement stack & KPIs

**Tooling**

- **Search Console** + BigQuery bulk export from day one. The UI keeps 16 months; the export keeps forever and enables query-level cohort analysis.
- **Bing Webmaster Tools** — feeds Copilot, and it's free.
- **Server/edge log analysis** segmented by user-agent. This is how you learn what Googlebot, GPTBot, PerplexityBot and ClaudeBot actually fetch. Nothing else gives you this.
- **Rank tracking** segmented by page family, not one blended average.
- **AI visibility tracking** — run a fixed set of 150–300 prompts monthly across ChatGPT, Perplexity, Gemini and Claude; record mentioned / cited / absent, and sentiment. A scripted monthly run in a spreadsheet works and costs nothing.
- **Vercel Speed Insights** + CrUX for field vitals.

**KPIs by horizon**

| Horizon | Leading indicators | Lagging indicators |
|---|---|---|
| Month 1–3 | Pages indexed vs. published (>90%), crawl requests/day, avg. position for long-tail, CWV pass rate | — |
| Month 3–6 | Impressions growth, queries ranking top-20, referring domains, AI-bot fetch volume | First organic leads |
| Month 6–12 | Top-10 keyword count by cluster, rich-result impressions (stars), AI citation rate on 300 tracked prompts | Organic-sourced enrolments, CAC vs. paid |
| Year 2 | Share of voice vs. the five incumbents in your four domains | Revenue per organic session |

**One metric most people miss:** indexation ratio per page family. If your "error & fix" family indexes at 95% and your "city" family indexes at 40%, Google is telling you exactly which template it considers thin. Act on that before a core update acts on it for you.

---

# 15. Roadmap

**Days 1–14 — foundation**

- Domain, hosting, canonical host decision, trailing-slash decision locked
- Preview-deployment noindex middleware shipped *before* the first public deploy
- Content model defined (frontmatter with required `uvu`, `author`, `reviewedBy`, `dateModified`, entity tags)
- Dynamic `sitemap.ts`, `robots.ts`, JSON-LD components, breadcrumbs
- Search Console + Bing + BigQuery export + log pipeline
- Scrape all five competitor sitemaps; build the master keyword/entity sheet

**Days 15–45 — the spine**

- 4 domain pillars + 20 top tool guides + 8 course pages, all hand-built
- `Organization`, `Course`, `TechArticle` schema live and validated
- Review-collection pipeline wired into the LMS (starts the clock on legitimate `aggregateRating`)
- First two calculators shipped
- Research-report survey fielded
- `llms.txt` + `llms-full.txt` generated at build; logging in place

**Days 46–90 — scale the defensible families**

- Error & fix + comparison families at 30–50 pages/week, ship-gate enforced in CI
- YouTube channel live, transcripts mirrored with `VideoObject`
- Research report published + PR push
- Open-source tool released
- First 300-prompt AI visibility baseline recorded
- GBP claimed for any real locations

**Months 4–12**

- Certification and career/salary families, backed by your own survey data
- Up to 10 city pages, each passing the §13 bar
- Quarterly content pruning cycle running
- Quarterly refresh cycle: every page's `dateModified` within 180 days, with substantive changes
- Second research wave; begin competing directly on commercial "training in {city}" terms from a position of topical authority

---

# 16. Risk register

| Risk | Severity | Mitigation |
|---|---|---|
| **Scaled content abuse** — programmatic families classified as thin | Critical | UVU rule in CI; gradual publishing ramp; quarterly pruning; indexation-ratio monitoring per family |
| **Review snippet manual action** from unearned `aggregateRating` | Critical | Only mark up real, on-page, verifiable reviews. Never synthesise counts. |
| **Doorway abuse** from city pages | High | Hard cap of 10 cities; 60% uniqueness threshold; real local data on each |
| Preview deployments indexed | High | Middleware noindex on non-production (§7.2) |
| Duplicate content from per-page `.md` mirrors | Medium | Don't ship indexable Markdown mirrors; noindex them if you do |
| Over-investing in llms.txt, under-investing in HTML quality | Medium | Cap llms.txt effort at ~2 hours total (§10) |
| AI Overviews cannibalising clicks on informational terms | Medium | Shift conversion intent down-page; build brand recall; optimise for mentions, not just sessions |
| Single-author dependency | Low | Named multi-author model with real practitioner bios |

---

# 17. Appendix: copy-paste files

## A. `app/robots.ts`

```ts
import type { MetadataRoute } from 'next';

const HOST = 'https://example.com';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === 'production';
  if (!isProd) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/*?*sort='] },
      { userAgent: ['Googlebot', 'Bingbot'], allow: '/' },
      // Answer engines - allow, these are your distribution
      { userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'GPTBot'], allow: '/' },
      { userAgent: ['PerplexityBot', 'Perplexity-User'], allow: '/' },
      { userAgent: ['ClaudeBot', 'Claude-SearchBot', 'Claude-User'], allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${HOST}/sitemap.xml`,
    host: HOST,
  };
}
```

## B. `app/sitemap.ts` with splitting

```ts
import type { MetadataRoute } from 'next';

export async function generateSitemaps() {
  // one sitemap per page family - keeps each well under 50k URLs
  return [{ id: 'core' }, { id: 'tools' }, { id: 'errors' },
          { id: 'compare' }, { id: 'courses' }];
}

export default async function sitemap({ id }): Promise<MetadataRoute.Sitemap> {
  const pages = await getPagesByFamily(id);
  return pages.map((p) => ({
    url: `https://example.com${p.path}`,
    lastModified: p.dateModified,      // REAL dates only
    changeFrequency: p.family === 'errors' ? 'monthly' : 'weekly',
    priority: p.family === 'core' ? 1.0 : 0.7,
  }));
}
```

## C. `/llms.txt` (generated at build)

```
# YourBrand

> Practitioner-led training and reference material for DevOps, Cloud,
> SRE and Data Engineering. Original benchmarks, working configs and
> annual India hiring research.

Content is written and reviewed by named practising engineers. Salary and
hiring figures come from our own annual survey; methodology is linked on
each page. Prices are in INR and dated.

## Core guides
- [Kubernetes Operations Guide](https://example.com/devops/kubernetes/): Setup, day-2 operations, and the 20 most common failure modes with fixes.
- [Terraform Guide](https://example.com/devops/terraform/): Module design, state management, and migration patterns.
- [SRE Practice Guide](https://example.com/sre/): SLOs, error budgets, incident response and postmortems.
- [Data Engineering Guide](https://example.com/data-engineering/): Pipelines, warehousing and orchestration.

## Original research
- [State of DevOps & SRE Hiring in India 2027](https://example.com/research/hiring-2027/): Salary bands by role, city and experience from N respondents. CSV included.

## Courses
- [DevOps Engineering Certification](https://example.com/courses/devops-engineering/): 16 weeks, INR 54,999, next cohort dates and full syllabus.

## Optional
- [Comparison index](https://example.com/compare/): Head-to-head tool decisions with explicit selection thresholds.
- [Error index](https://example.com/fix/): Exact error strings with verified resolutions.
```

## D. Serving it with the right content type

```ts
// app/llms.txt/route.ts
import { buildLlmsTxt } from '@/lib/llms';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  return new Response(await buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

## E. Page frontmatter contract

```yaml
---
title: "Fix: Kubernetes CrashLoopBackOff with Exit Code 137"
family: errors
entities: [kubernetes, oomkilled, memory-limits, containers]
uvu: "Reproduced on EKS 1.31 with a real 137 transcript + the exact
      resource-request change that resolved it, plus node-pressure
      thresholds measured on t3.medium."
author: { name: "...", linkedin: "...", github: "..." }
reviewedBy: "..."
datePublished: 2026-09-17
dateModified: 2026-09-17
relatedCourse: /courses/kubernetes-administration/
---
```

---

## If you only do five things

1. Ship the preview-deployment noindex middleware before your first deploy.
2. Build the review-collection pipeline now, so `Course` + `aggregateRating` is honest and live in month three — those stars are the biggest CTR lever on that SERP.
3. Own the error-and-fix and comparison families. Nobody in that SERP can follow you there.
4. Fund one original research report per year. It's your only fast route to links, citations and first-party data at once.
5. Publish slowly with a hard uniqueness gate. The incumbents' page counts look like the goal; they're actually the liability.

---

*Figures on llms.txt adoption, AI-citation behaviour and Google's scaled content abuse enforcement are drawn from published 2026 industry analyses and Google's own spam policy documentation. Treat third-party study numbers as directional rather than precise, and re-verify the crawler user-agent list quarterly — it changes.*
