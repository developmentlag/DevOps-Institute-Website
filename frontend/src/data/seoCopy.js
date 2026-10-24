import { SEO_ROUTES, AREA_ROUTES } from "@/data/seoRoutes";
import { AREA_EAST } from "@/data/seo/areaEast";
import { AREA_WEST } from "@/data/seo/areaWest";
import { AREA_EXTRA } from "@/data/seo/areaExtra";
import { TOPIC_PAGES } from "@/data/seo/topics";
import { DEVOPS_PILLAR } from "@/data/seo/pillarDevops";
import { CLOUD_PILLAR } from "@/data/seo/pillarCloud";
import { GUIDES_A } from "@/data/seo/guidesA";
import { GUIDES_B, SYLLABUS_MODULES } from "@/data/seo/guidesB";
import { devopsShared, cloudShared } from "@/data/seo/sharedBlocks";
import { LENGTH_BOOST } from "@/data/seo/lengthBoost";
import { MENTORS } from "@/data/mentors";
import { AFFILIATION_LINE, TESTIMONIALS, GOOGLE_REVIEWS_STATS, GOOGLE_BUSINESS_PROFILE_URLS } from "@/data/site";

const AREAS = { ...AREA_EAST, ...AREA_WEST };

const NEAR = {
  mumbai: ["powai", "andheri"],
  powai: ["chandivali", "saki-naka"],
  chandivali: ["powai", "saki-naka"],
  "saki-naka": ["chandivali", "andheri"],
  andheri: ["saki-naka", "juhu-santacruz"],
  vikhroli: ["kanjurmarg", "powai"],
  kanjurmarg: ["vikhroli", "bhandup"],
  bhandup: ["kanjurmarg", "mulund"],
  mulund: ["bhandup", "vikhroli"],
  goregaon: ["malad", "andheri"],
  malad: ["goregaon", "borivali"],
  "bandra-bkc": ["dadar", "kurla"],
  kurla: ["sion", "saki-naka"],
  sion: ["dadar", "kurla"],
  dadar: ["sion", "bandra-bkc"],
  borivali: ["malad", "goregaon"],
  "juhu-santacruz": ["andheri", "bandra-bkc"],
};

const AREA_LABEL = {
  mumbai: "Mumbai",
  powai: "Powai",
  andheri: "Andheri",
  chandivali: "Chandivali",
  "saki-naka": "Saki Naka",
  vikhroli: "Vikhroli",
  kanjurmarg: "Kanjurmarg",
  bhandup: "Bhandup",
  mulund: "Mulund",
  goregaon: "Goregaon",
  malad: "Malad",
  "bandra-bkc": "Bandra and BKC",
  kurla: "Kurla",
  sion: "Sion",
  dadar: "Dadar",
  borivali: "Borivali",
  "juhu-santacruz": "Juhu and Santacruz",
};

function areaLinks(slug) {
  if (slug === "mumbai") {
    return AREA_ROUTES.filter((item) => item.path !== "/devops-course-in-mumbai").map((item) => ({
      href: item.path,
      label: `DevOps course in ${AREA_LABEL[item.path.replace("/devops-course-in-", "")]}`,
    }));
  }
  const hubLabels = ["DevOps course in Mumbai", "DevOps course in Mumbai with placement", "classroom DevOps course in Mumbai"];
  const index = Object.keys(NEAR).indexOf(slug);
  return [
    { href: "/devops-course-in-mumbai", label: hubLabels[index % hubLabels.length] },
    { href: "/courses/devops", label: index % 2 === 0 ? "DevOps course" : "DevOps course with placement" },
    { href: "/devops-course-in-mumbai-with-placement", label: "DevOps course in Mumbai with placement" },
    ...(NEAR[slug] || []).map((near) => ({
      href: `/devops-course-in-${near}`,
      label: `DevOps course in ${AREA_LABEL[near]}`,
    })),
  ];
}

function withAffiliationSection(sections) {
  const list = sections || [];
  if (JSON.stringify(list).includes("NASSCOM")) return list;
  return [
    ...list,
    {
      h2: "Which affiliations does DevOps Institute claim?",
      paragraphs: [
        `${AFFILIATION_LINE} The names are written out in words. This page does not show affiliation logos.`,
      ],
    },
  ];
}

function withExtra(base, extra) {
  const sections = [...(base.sections || [])];
  if (extra) sections.push(extra);
  return { ...base, sections };
}

const TRUST = {
  "/trainers": {
    answer:
      "DevOps Institute in Chandivali, Powai lists the mentors who teach its cloud, DevOps and AI batches. Each card names the person, an employer only when the profile states one, and a LinkedIn profile. Call 083695 18569 to ask who leads the next batch.",
    sections: [
      {
        h2: "How should you read a mentor card?",
        paragraphs: [
          "Each card names one mentor at DevOps Institute. The headline follows the public profile: a DevOps title stays a DevOps title, and an architecture or training title stays that. Years use the lower figure the profile supports, such as 18+ years. A missing number is not a claim of zero experience.",
          "Where a profile names a current employer, it is written in words. It is not a logo, and it is not an endorsement of this institute. Yogesh Devpura's card names a former role and does not name a current employer. LinkedIn links point at the profile the institute was given. A card does not assign that person to a particular batch. Call 083695 18569 to ask who teaches the batch you would join.",
        ],
      },
      {
        h2: "What does each profile support?",
        paragraphs: MENTORS.map((mentor) => `${mentor.name}: ${mentor.detail}`),
      },
    ],
    faqs: [
      {
        q: "Who are the mentors?",
        a: "The trainers page lists Yogesh Devpura, Sirin Ali, Ninad Samudre, Amit Mishra, Arshad Mitha, Priyanka Gawada, Ankit Shukla, Mehar Nafis and Armugharaj Nadar.",
      },
      {
        q: "Does an employer endorse DevOps Institute?",
        a: "No. The employer is the mentor's current job, written in plain text. The name is not a logo and it is not an endorsement.",
      },
      {
        q: "What does Mehar Nafis do?",
        a: "He is a Solution Architect for AI/ML at Frontier Business Systems. The profile also lists DevOps and corporate training. The card does not state a year count.",
      },
      {
        q: "Who teaches the next batch?",
        a: "The page does not assign a mentor to a batch. Call 083695 18569 and ask who is teaching the batch you would join.",
      },
      {
        q: "Where are classes held?",
        a: "Lodha Supremus, B 1307, Saki Vihar Road, Chandivali, Powai, Mumbai 400072.",
      },
    ],
  },
  "/reviews": {
    answer:
      "DevOps Institute in Chandivali, Powai publishes a 4.7 rating from 130 Google reviews, plus four named student stories already printed on this website. Dates for those Google reviews are not stored here. Call 083695 18569 if you want to visit before you rely on a quote.",
    sections: [
      {
        h2: "What review facts are on this website?",
        paragraphs: [
          `The site shows ${GOOGLE_REVIEWS_STATS.ratingValue} out of 5 from ${GOOGLE_REVIEWS_STATS.reviewCount} Google reviews. llms.txt uses the same figure, 4.7 from 130.`,
          "The four stories below are copied from the testimonials already rendered on the homepage and course pages. They are not a fresh scrape, and they do not include a review date. Google review dates are not published. The link below is the stored profile share link, not a separate write-a-review URL.",
        ],
      },
    ],
    faqs: [
      { q: "What rating does the site show?", a: "4.7 from 130 Google reviews, in the site data used by the review badge." },
      { q: "Are the quotes verbatim?", a: "Yes. They match the testimonial text already published on this website." },
      { q: "Why are there no dates?", a: "The site does not store a Google review date for these quotes." },
      { q: "How do I leave a review?", a: `A separate write-a-review URL is not published. The stored profile link is ${GOOGLE_BUSINESS_PROFILE_URLS[0]}.` },
    ],
    reviews: true,
  },
  "/placements": {
    answer:
      "DevOps Institute in Chandivali, Powai publishes 450+ placed, 100% Placement and 360° Placement Assurance. This page lists only the alumni names already on the site, with company and photo left blank where the site never recorded them. Call 083695 18569 for the current batch.",
    sections: [
      {
        h2: "What can the filter show?",
        paragraphs: [
          "Four people are named in the testimonials. Only Rajeswari Singh’s card says she was placed, at 6.5 LPA, and it still does not name an employer. The others describe training, a career shift or a role label. Filtering them does not create 450 records. Company, role and a consented photo are not published for the rest of the 450+ list. Schema below uses only the names and descriptions already published.",
        ],
      },
    ],
    faqs: [
      { q: "How many placements are published as a total?", a: "450+ placed, with 350+ hiring partners." },
      { q: "Why are so few names listed?", a: "Because only four names are in the website content. The rest are not invented." },
      { q: "What is 360° Placement Assurance?", a: "A published phrase. The institute has not published its own definition of what the phrase includes." },
      { q: "Where do I read the longer note?", a: "On the DevOps course in Mumbai with placement page." },
    ],
    placements: true,
  },
  "/sitemap": {
    answer:
      "This HTML sitemap lists the public pages of DevOps Institute in Chandivali, Powai: courses, Mumbai area pages, guides and the Thane campus link. Use it to find a DevOps course in Mumbai with placement support. Call 083695 18569.",
    sections: [
      {
        h2: "What is on this sitemap?",
        paragraphs: [
          "Every indexable route rendered by this site, grouped so a person and a crawler can see the same set. The XML sitemap is at /sitemap.xml and is generated at build time. Thane, Vashi and Ghatkopar are not duplicated here. They remain on https://devopsinstitutemumbai.co.in/.",
        ],
      },
    ],
    faqs: [],
    sitemap: true,
  },
  "/404": {
    answer:
      "This address is not a page on DevOps Institute in Chandivali, Powai. The campus is still at Lodha Supremus on Saki Vihar Road, and the DevOps course in Mumbai with placement support is linked below. Call 083695 18569.",
    sections: [
      {
        h2: "Where should you go instead?",
        paragraphs: [
          "Open the Mumbai hub, the course list, or the HTML sitemap. If you were looking for Thane, Vashi or Ghatkopar, use https://devopsinstitutemumbai.co.in/ rather than a lookalike URL on this domain.",
        ],
      },
    ],
    faqs: [],
  },
};

const GUIDES = {
  "/devops-course": DEVOPS_PILLAR,
  "/cloud-computing-course": CLOUD_PILLAR,
  ...GUIDES_A,
  ...GUIDES_B,
  ...TRUST,
};

function topicFocus(path) {
  if (path.includes("kubernetes")) return "kubernetes";
  if (path.includes("azure")) return "azure";
  if (path.includes("aws")) return "aws";
  return "cloud";
}

function topicLinks(path) {
  const links = [
    { href: "/cloud-computing-course", label: "cloud computing course" },
    { href: "/cloud-computing-course-with-placement", label: "cloud computing course with placement" },
    { href: "/devops-course-in-mumbai", label: "DevOps course in Mumbai" },
  ];
  if (path.includes("aws")) links.push({ href: "/courses/aws", label: "AWS course" });
  else if (path.includes("azure")) links.push({ href: "/courses/azure", label: "Azure course" });
  else if (path.includes("kubernetes")) links.push({ href: "/courses/kubernetes-docker", label: "Kubernetes course" });
  else links.push({ href: "/courses/aws", label: "AWS course" }, { href: "/courses/azure", label: "Azure course" }, { href: "/courses/gcp", label: "GCP course" });
  if (path.includes("powai")) links.push({ href: "/devops-course-in-powai", label: "DevOps course in Powai" });
  if (path.includes("andheri")) links.push({ href: "/devops-course-in-andheri", label: "DevOps course in Andheri" });
  return links;
}

export function getSeoPage(path) {
  const route = SEO_ROUTES.find((item) => item.path === path);
  if (!route) return null;

  if (route.group === "area") {
    const slug = path.replace("/devops-course-in-", "");
    const base = AREAS[slug];
    if (!base) return null;
    const page = withExtra(base, AREA_EXTRA[slug]);
    return {
      route,
      ...page,
      sections: withAffiliationSection([...page.sections, ...devopsShared()]),
      links: areaLinks(slug),
      showMap: true,
      crumbs: slug === "mumbai"
        ? [
            { name: "Home", href: "/" },
            { name: route.h1, href: path },
          ]
        : [
            { name: "Home", href: "/" },
            { name: "DevOps course in Mumbai", href: "/devops-course-in-mumbai" },
            { name: route.h1, href: path },
          ],
    };
  }

  if (route.group === "topic") {
    const base = TOPIC_PAGES[path];
    if (!base) return null;
    return {
      route,
      ...base,
      sections: withAffiliationSection([...base.sections, ...cloudShared(topicFocus(path)), ...(LENGTH_BOOST[path] || [])]),
      links: topicLinks(path),
      showMap: true,
      crumbs: [
        { name: "Home", href: "/" },
        { name: "Cloud computing course", href: "/cloud-computing-course" },
        { name: route.h1, href: path },
      ],
    };
  }

  const guide = GUIDES[path];
  if (!guide) return null;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/sitemap" },
    { name: route.h1, href: path },
  ];
  return {
    route,
    ...guide,
    sections: withAffiliationSection([...(guide.sections || []), ...(LENGTH_BOOST[path] || [])]),
    links: guide.links || [
      { href: "/devops-course-in-mumbai", label: "DevOps course in Mumbai" },
      { href: "/courses/devops", label: "DevOps course" },
      { href: "/devops-course-in-mumbai-with-placement", label: "DevOps course with placement" },
      { href: "/cloud-computing-course", label: "cloud computing course" },
    ],
    showMap: path !== "/404" && path !== "/sitemap",
    crumbs,
    syllabusModules: guide.syllabus ? SYLLABUS_MODULES : null,
  };
}

export { SYLLABUS_MODULES, TESTIMONIALS };
