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
import { TESTIMONIALS, GOOGLE_REVIEWS_STATS, GOOGLE_BUSINESS_PROFILE_URLS } from "@/data/site";

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

function withExtra(base, extra) {
  const sections = [...(base.sections || [])];
  if (extra) sections.push(extra);
  return { ...base, sections };
}

const TRUST = {
  "/trainers": {
    answer:
      "DevOps Institute in Chandivali, Powai says its classes are led by trainers with industry experience in cloud and DevOps. This page does not name a trainer, because no name, bio or LinkedIn profile is stored in the site repository. Call 083695 18569 to ask who is teaching the next batch.",
    sections: [
      {
        h2: "What is published about the trainers?",
        paragraphs: [
          "The About page says classes are led by trainers who have worked with cloud infrastructure and DevOps toolchains in real industry environments. The Why Choose list repeats “Industry-Experienced Trainers.” The campus photos show batches with trainers, without captions that name them. That is the whole biography the repository contains.",
          "TODO: add the lead trainer’s name, a short bio and a LinkedIn URL. Until that exists, this page will not invent a person, and the course schema will not name an instructor. A made-up instructor would be worse than a blank one.",
        ],
      },
      {
        h2: "Who should you ask instead?",
        paragraphs: [
          "Call the Powai campus on 083695 18569 and ask who teaches the batch you would join, and what they have operated. Write the answer down. If the institute wants that answer on the website, add it here and only then add Person schema. The same gap is marked on the buyer's guide, in the trainer row.",
        ],
      },
    ],
    faqs: [
      { q: "Who is the lead trainer?", a: "TODO: the name is not in this repository. Do not treat any name in a review as the faculty list." },
      { q: "Do testimonials name trainers?", a: "They say mentors and trainers. They do not give a legal name for the faculty." },
      { q: "Where are classes held?", a: "Lodha Supremus, B 1307, Saki Vihar Road, Chandivali, Powai, Mumbai 400072." },
      { q: "Is there a LinkedIn profile to cite?", a: "TODO: add the trainer’s LinkedIn URL. The institute Instagram is https://www.instagram.com/devopsinstituteinmumbai/ and that is not a trainer profile." },
    ],
  },
  "/reviews": {
    answer:
      "DevOps Institute in Chandivali, Powai publishes a 4.7 rating from 130 Google reviews, plus four named student stories already printed on this website. Dates for those Google reviews are not stored here. Call 083695 18569 if you want to visit before you rely on a quote.",
    sections: [
      {
        h2: "What review facts are on this website?",
        paragraphs: [
          `The site data records ${GOOGLE_REVIEWS_STATS.ratingValue} out of 5 from ${GOOGLE_REVIEWS_STATS.reviewCount} Google reviews. The public llms.txt file has also said 4.8 from 132 reviews. TODO: confirm the live Google count and keep one figure. This page shows the figure used by the on-page badge, which is 4.7 from 130.`,
          "The four stories below are copied from the testimonials already rendered on the homepage and course pages. They are not a fresh scrape, and they do not include a review date. TODO: add the Google review date beside each quote. TODO: replace the review link below with the Google Business Profile “write a review” URL. The only profile URL stored today is the share link.",
        ],
      },
    ],
    faqs: [
      { q: "What rating does the site show?", a: "4.7 from 130 Google reviews, in the site data used by the review badge." },
      { q: "Are the quotes verbatim?", a: "Yes. They match the testimonial text already published on this website." },
      { q: "Why are there no dates?", a: "TODO: the repository does not store a Google review date for these quotes." },
      { q: "How do I leave a review?", a: `TODO: add the write-a-review URL. The stored profile link is ${GOOGLE_BUSINESS_PROFILE_URLS[0]}.` },
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
          "Four people are named in the testimonials. Only Rajeswari Singh’s card says she was placed, at 6.5 LPA, and it still does not name an employer. The others describe training, a career shift or a role label. Filtering them does not create 450 records. TODO: add company, role and a consented photo for each person you want in the 450+ list. Schema below uses only the names and descriptions already published.",
        ],
      },
    ],
    faqs: [
      { q: "How many placements are published as a total?", a: "450+ placed, with 350+ hiring partners." },
      { q: "Why are so few names listed?", a: "Because only four names are in the website content. The rest are not invented." },
      { q: "What is 360° Placement Assurance?", a: "A published phrase. TODO: add the institute’s own definition of what it includes." },
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
      sections: [...page.sections, ...devopsShared()],
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
      sections: [...base.sections, ...cloudShared(topicFocus(path)), ...(LENGTH_BOOST[path] || [])],
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
    sections: [...(guide.sections || []), ...(LENGTH_BOOST[path] || [])],
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
