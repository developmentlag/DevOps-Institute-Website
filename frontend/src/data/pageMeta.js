import { COURSES } from "@/data/site";
import { SEO_ROUTES } from "@/data/seoRoutes";

/** Titles, descriptions and 40–60 word answers for pages that already existed. */

export const STATIC_PAGES = [
  {
    route: "/",
    text: "Become a",
    title: "DevOps Training in Mumbai with Placement | Powai",
    description:
      "Classroom DevOps training in Powai, Mumbai: a 4-month path, weekday and weekend batches, and placement support. Call 083695 18569.",
    answer:
      "DevOps Institute in Chandivali, Powai teaches a classroom DevOps course in Mumbai with placement support. The published program runs for four months, with weekday and weekend batches and hands-on AWS, Azure and GCP labs at Lodha Supremus. 450+ placed and 100% Placement are the published outcomes. Call 083695 18569.",
    jsonLd: true,
  },
  {
    route: "/about",
    text: "About DevOps Institute",
    title: "About DevOps Institute | Powai, Mumbai Campus",
    description:
      "About DevOps Institute in Chandivali, Powai: lab-first cloud and DevOps classes for students and working professionals. Call 083695 18569.",
    answer:
      "DevOps Institute is a classroom training institute at Lodha Supremus in Chandivali, Powai, Mumbai. Courses cover AWS, Azure, GCP, DevOps, Kubernetes, Docker, Linux and Terraform, with about 80% of each session spent in labs. Call 083695 18569 to visit.",
    jsonLd: true,
  },
  {
    route: "/courses",
    text: "Cloud & DevOps Courses in Mumbai",
    title: "Cloud & DevOps Courses in Mumbai | Powai",
    description:
      "Browse AWS, Azure, GCP, DevOps, Kubernetes, Docker, Linux and Terraform courses at the Chandivali, Powai campus. Call 083695 18569.",
    answer:
      "DevOps Institute in Chandivali, Powai lists classroom courses in AWS, Azure, GCP, DevOps, Kubernetes, Docker, Linux and Terraform. Each one is taught with labs at Lodha Supremus, with weekday and weekend batches. Call 083695 18569 for the current batch.",
    jsonLd: true,
  },
  {
    route: "/contact",
    text: "Contact DevOps Institute in Chandivali, Powai",
    title: "Contact DevOps Institute in Powai, Mumbai",
    description:
      "Call or visit DevOps Institute at Lodha Supremus, Chandivali, Powai, Mumbai 400072. Phone 083695 18569 for batches and directions.",
    answer:
      "DevOps Institute in Chandivali, Powai can be reached at Lodha Supremus, B 1307, Saki Vihar Road, Tunga Village, Mumbai 400072. Call 083695 18569 or send the enquiry form for batch timings and a campus visit. The map on this page opens directions.",
    jsonLd: true,
  },
  {
    route: "/faqs",
    text: "Frequently Asked Questions",
    title: "DevOps Course FAQs | Powai Campus, Mumbai",
    description:
      "FAQs on DevOps Institute in Chandivali, Powai: courses, batches, tools and how to visit the campus. Call 083695 18569.",
    answer:
      "These answers cover DevOps Institute in Chandivali, Powai: where the campus is, which AWS, Azure, GCP and DevOps courses run, and how weekday and weekend batches work. Fees are not printed. Call 083695 18569 and the campus will confirm the current batch.",
    jsonLd: true,
  },
  {
    route: "/privacy-policy",
    text: "Privacy Policy",
    title: "Privacy Policy | DevOps Institute, Powai",
    description:
      "How DevOps Institute in Chandivali, Powai collects and uses enquiry details. Phone 083695 18569. Read the full privacy policy here.",
    answer:
      "This privacy policy explains how DevOps Institute in Chandivali, Powai handles the name, phone and message you send through the enquiry form. The campus address is Lodha Supremus on Saki Vihar Road. Call 083695 18569 if you want a record corrected.",
    jsonLd: false,
  },
];

const COURSE_TEXT = {
  aws: "AWS Course in Mumbai with Placement",
  azure: "Azure Course in Mumbai",
  gcp: "GCP Course in Mumbai",
  devops: "DevOps Course in Mumbai with Placement",
  "kubernetes-docker": "Kubernetes & Docker Course in Mumbai",
  "linux-terraform": "Linux & Terraform Course in Mumbai",
};

export const COURSE_ANSWERS = {
  aws:
    "DevOps Institute in Chandivali, Powai teaches an AWS course in Mumbai with placement support. Labs cover IAM, EC2, S3, VPC, RDS and CloudWatch at Lodha Supremus, in weekday or weekend batches. The work sits inside the published four-month classroom path. Call 083695 18569.",
  azure:
    "DevOps Institute in Chandivali, Powai teaches an Azure course in Mumbai with placement support. Labs cover virtual machines, virtual networks, Entra ID and AKS at Lodha Supremus. Weekday and weekend batches are both published. Call 083695 18569 to ask which batch is open.",
  gcp:
    "DevOps Institute in Chandivali, Powai teaches a GCP course in Mumbai with placement support. Labs cover Compute Engine, Cloud Storage, GKE and Cloud Build at Lodha Supremus. Weekday and weekend batches run at the same campus. Call 083695 18569 for the next start date.",
  devops:
    "DevOps Institute in Chandivali, Powai teaches a DevOps course in Mumbai with placement support. Labs cover Git, Jenkins, Docker, Kubernetes and Terraform in a published four-month classroom. Weekday and weekend batches both run at Lodha Supremus. Call 083695 18569.",
  "kubernetes-docker":
    "DevOps Institute in Chandivali, Powai teaches Kubernetes and Docker in Mumbai. Labs cover images, pods, ingress and Helm at Lodha Supremus, with weekday and weekend batches. Placement support uses the institute's published lines. Call 083695 18569 for the next batch.",
  "linux-terraform":
    "DevOps Institute in Chandivali, Powai teaches Linux and Terraform in Mumbai. Labs cover the shell, Bash and infrastructure as code at Lodha Supremus, with weekday and weekend batches. The campus phone is 083695 18569. Ask which batch still has seats.",
};

export function staticPage(route) {
  return STATIC_PAGES.find((page) => page.route === route);
}

export function buildPrerenderPages() {
  const courses = COURSES.map((course) => ({
    route: `/courses/${course.slug}`,
    text: COURSE_TEXT[course.slug],
    title: course.metaTitle,
    description: course.metaDescription,
    jsonLd: true,
    index: true,
  }));
  const seo = SEO_ROUTES.map((route) => ({
    route: route.path,
    text: route.h1,
    title: route.title,
    description: route.description,
    jsonLd: route.jsonLd !== false,
    index: route.index !== false,
  }));
  return [...STATIC_PAGES.map((page) => ({ ...page, index: true })), ...courses, ...seo];
}
