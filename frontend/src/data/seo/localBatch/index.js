/**
 * Batch 1 local pages. Existing DevOps suburb URLs are not repeated.
 * Ghatkopar, Thane and Navi Mumbai stay on the sister site.
 */

import { GBP_PROFILE_URL } from "@/data/site";
import { DEVOPS_NEW } from "@/data/seo/localBatch/devopsNew";
import { CLOUD_NEW } from "@/data/seo/localBatch/cloudNew";
import { CLOUD_EXISTING } from "@/data/seo/localBatch/cloudExisting";

const PHONE = "083695 18569";

export const BATCH_AREAS = {
  chembur: "Chembur",
  vidyavihar: "Vidyavihar",
  "vile-parle": "Vile Parle",
  jogeshwari: "Jogeshwari",
  kandivali: "Kandivali",
  wadala: "Wadala",
  vikhroli: "Vikhroli",
  kanjurmarg: "Kanjurmarg",
  bhandup: "Bhandup",
  mulund: "Mulund",
  kurla: "Kurla",
  "saki-naka": "Saki Naka",
  goregaon: "Goregaon",
  chandivali: "Chandivali",
  andheri: "Andheri",
  powai: "Powai",
  malad: "Malad",
  borivali: "Borivali",
  sion: "Sion",
  dadar: "Dadar",
  "juhu-santacruz": "Juhu and Santacruz",
};

const CLOUD_SLUGS = new Set([
  "chembur",
  "vidyavihar",
  "vile-parle",
  "jogeshwari",
  "kandivali",
  "wadala",
  "vikhroli",
  "kanjurmarg",
  "bhandup",
  "mulund",
  "kurla",
  "saki-naka",
  "goregaon",
  "chandivali",
  "andheri",
  "powai",
]);

const NEIGHBORS = {
  chembur: ["kurla", "wadala", "vidyavihar"],
  vidyavihar: ["kurla", "kanjurmarg", "chembur"],
  "vile-parle": ["andheri", "juhu-santacruz", "jogeshwari"],
  jogeshwari: ["andheri", "goregaon", "vile-parle"],
  kandivali: ["malad", "borivali", "goregaon"],
  wadala: ["sion", "dadar", "chembur"],
  vikhroli: ["kanjurmarg", "bhandup", "powai"],
  kanjurmarg: ["vikhroli", "bhandup", "vidyavihar"],
  bhandup: ["kanjurmarg", "mulund", "vikhroli"],
  mulund: ["bhandup", "kanjurmarg", "vikhroli"],
  kurla: ["chembur", "saki-naka", "vidyavihar"],
  "saki-naka": ["chandivali", "kurla", "andheri"],
  goregaon: ["jogeshwari", "andheri", "malad"],
  chandivali: ["saki-naka", "powai", "andheri"],
};

const DEVOPS_TEACHES = [
  "Linux and Git",
  "CI/CD with Jenkins",
  "Docker and Kubernetes",
  "Terraform, Ansible and monitoring",
];

const CLOUD_TEACHES = [
  "AWS IAM, EC2, S3 and VPC",
  "Azure virtual machines, Entra ID and AKS",
  "Google Compute Engine, VPC and GKE",
  "Cloud monitoring and a sample deployment",
];

function coursePath(slug, course) {
  return course === "devops" ? `/devops-course-in-${slug}` : `/cloud-computing-course-in-${slug}`;
}

function neighborLinks(slug, course) {
  return (NEIGHBORS[slug] || []).map((near) => {
    const label = BATCH_AREAS[near];
    const useCloud = course === "cloud" && CLOUD_SLUGS.has(near);
    const href = useCloud ? `/cloud-computing-course-in-${near}` : `/devops-course-in-${near}`;
    const prefix = useCloud ? "Cloud computing course in" : "DevOps course in";
    return { href, label: `${prefix} ${label}` };
  });
}

function linksFor(slug, course) {
  const label = BATCH_AREAS[slug];
  const shared = [
    { href: "/trainers", label: "Trainers at the Powai campus" },
    { href: "/reviews", label: "Reviews and the Google rating" },
    { href: "/placements", label: "Placement stories" },
    { href: "/contact", label: "Contact and campus map" },
  ];
  if (course === "devops") {
    return [
      { href: "/devops-course-in-mumbai", label: "DevOps course in Mumbai" },
      { href: "/courses/devops", label: "DevOps course" },
      { href: "/devops-course", label: "DevOps course pillar" },
      { href: "/devops-course-syllabus", label: "DevOps course syllabus" },
      { href: "/devops-course-in-mumbai-with-placement", label: "DevOps course in Mumbai with placement" },
      { href: coursePath(slug, "cloud"), label: `Cloud computing course in ${label}` },
      { href: "/devops-course-for-freshers", label: "DevOps course for freshers" },
      { href: "/devops-course-for-working-professionals", label: "DevOps course for working professionals" },
      ...neighborLinks(slug, course),
      ...shared,
    ];
  }
  const devopsHref = `/devops-course-in-${slug}`;
  return [
    { href: "/cloud-computing-course-in-mumbai", label: "Cloud computing course in Mumbai" },
    { href: "/cloud-computing-course", label: "Cloud computing course pillar" },
    { href: "/cloud-computing-course-with-placement", label: "Cloud computing course with placement" },
    { href: "/courses/aws", label: "AWS course" },
    { href: "/courses/azure", label: "Azure course" },
    { href: "/courses/gcp", label: "GCP course" },
    { href: "/devops-vs-cloud-computing-course", label: "DevOps vs cloud computing course" },
    { href: devopsHref, label: `DevOps course in ${label}` },
    ...neighborLinks(slug, course),
    ...shared,
  ];
}

function crumbsFor(page) {
  if (page.course === "devops") {
    return [
      { name: "Home", href: "/" },
      { name: "DevOps course in Mumbai", href: "/devops-course-in-mumbai" },
      { name: page.h1, href: page.path },
    ];
  }
  return [
    { name: "Home", href: "/" },
    { name: "Cloud computing course in Mumbai", href: "/cloud-computing-course-in-mumbai" },
    { name: page.h1, href: page.path },
  ];
}

function decorate(raw) {
  const label = BATCH_AREAS[raw.slug];
  const path = coursePath(raw.slug, raw.course);
  const page = {
    ...raw,
    path,
    label,
    areaServed: `${label}, Mumbai`,
    group: raw.course === "devops" ? "area" : "topic",
    schemaTeaches: raw.course === "devops" ? DEVOPS_TEACHES : CLOUD_TEACHES,
    schemaDuration: raw.course === "devops" ? "P4M" : null,
    classroomFirst: true,
    gbpUrl: GBP_PROFILE_URL,
    phone: PHONE,
  };
  page.links = linksFor(raw.slug, raw.course);
  page.crumbs = crumbsFor(page);
  return page;
}

const RAW_PAGES = [...DEVOPS_NEW, ...CLOUD_NEW, ...CLOUD_EXISTING];

export const LOCAL_PAGES = RAW_PAGES.map(decorate);

const BY_PATH = new Map(LOCAL_PAGES.map((page) => [page.path, page]));

export function getLocalPage(path) {
  return BY_PATH.get(path) || null;
}

export const localSeoRoutes = LOCAL_PAGES.map((page) => ({
  path: page.path,
  group: page.group,
  title: page.title,
  h1: page.h1,
  description: page.description,
  summary: page.summary,
  index: true,
  jsonLd: true,
}));

export const MUMBAI_DEVOPS_HUB_SECTION = {
  h2: "Which newer suburb pages sit under this hub?",
  paragraphs: [
    "Chembur, Vidyavihar, Vile Parle, Jogeshwari, Kandivali and Wadala now have their own DevOps course pages, because this domain did not have those URLs. Andheri East stays on the Andheri page, which already covers East and West, SEEPZ, Marol and Chakala together. Saki Naka, Vikhroli, Kanjurmarg, Bhandup, Mulund, Kurla, Goregaon, Powai and Chandivali already had DevOps pages. Those were not copied into a second URL.",
    "Ghatkopar, Thane and Navi Mumbai are still not given pages here. Ghatkopar's classroom is published at https://devopsinstitutemumbai.co.in/devops-institute-ghatkopar/. Thane and Vashi are on https://devopsinstitutemumbai.co.in/. If that address is the shorter trip, use it. If you want Lodha Supremus in Chandivali, stay on this domain. Cloud computing pages for the same Powai campus are listed from the cloud computing course in Mumbai.",
  ],
};

export const MUMBAI_CLOUD_HUB_SECTION = {
  h2: "Which suburbs have a cloud computing course page?",
  paragraphs: [
    "Powai and Andheri already had cloud pages. This batch adds cloud pages for Chembur, Vidyavihar, Vile Parle, Jogeshwari, Kandivali, Wadala, Vikhroli, Kanjurmarg, Bhandup, Mulund, Kurla, Saki Naka, Goregaon and Chandivali. Each one is about AWS, Azure and GCP labs at Lodha Supremus, with the commute written for that suburb. They are not a second copy of the DevOps suburb page with the word cloud pasted in.",
    "The DevOps course in Mumbai remains the hub for pipeline and Kubernetes intent. Use the comparison page if you are choosing between the courses. Ghatkopar, Thane and Navi Mumbai stay on https://devopsinstitutemumbai.co.in/. Fees are not printed. Call 083695 18569 and name the suburb you are leaving from.",
  ],
};

export function cloudHubLinks() {
  return LOCAL_PAGES.filter((page) => page.course === "cloud").map((page) => ({
    href: page.path,
    label: page.h1,
  }));
}
