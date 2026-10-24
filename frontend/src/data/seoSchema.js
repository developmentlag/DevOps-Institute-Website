import { buildMentorPersonSchemas } from "@/data/mentors";
import {
  ADDRESS,
  GOOGLE_REVIEWS_STATS,
  LAST_UPDATED_ISO,
  PHONE,
  PROVIDER_NAME,
  TESTIMONIALS,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrgSchema,
  getSiteOrigin,
} from "@/data/site";

function courseLanding({ name, description, path, teaches, duration }) {
  const origin = getSiteOrigin();
  const url = `${origin}${path}`;
  const schedule = { "@type": "Schedule", repeatFrequency: "P1W" };
  if (duration) schedule.duration = duration;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${url}#course`,
    name,
    description,
    url,
    courseCode: "DOI-POWAI",
    inLanguage: "en",
    educationalLevel: "Beginner to Advanced",
    teaches,
    provider: { "@id": `${origin}/#institute`, "@type": "EducationalOrganization", name: PROVIDER_NAME, url: origin },
    offers: {
      "@type": "Offer",
      category: "Paid",
      availability: "https://schema.org/InStock",
      url,
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: ["onsite", "blended"],
        courseWorkload: duration === "P4M" ? "PT160H" : "PT40H",
        location: { "@id": `${origin}/#institute` },
        courseSchedule: schedule,
      },
    ],
  };
}

function article(page) {
  const origin = getSiteOrigin();
  const url = `${origin}${page.route.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.route.h1,
    description: page.route.description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    inLanguage: "en",
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: PROVIDER_NAME,
      url: origin,
    },
    publisher: { "@id": `${origin}/#organization` },
  };
}

export function buildSeoSchema(page) {
  const blocks = [
    buildOrgSchema(),
    buildBreadcrumbSchema(page.crumbs.map((crumb) => ({ name: crumb.name, url: crumb.href }))),
  ];
  if (page.faqs && page.faqs.length) blocks.push(buildFaqSchema(page.faqs));

  const path = page.route.path;
  const coursePaths =
    page.route.group === "area" ||
    page.route.group === "topic" ||
    path === "/devops-course" ||
    path === "/cloud-computing-course" ||
    path === "/devops-course-in-mumbai-with-placement" ||
    path === "/cloud-computing-course-with-placement";
  if (coursePaths) {
    blocks.push(
      courseLanding({
        name: page.route.h1,
        description: page.route.description,
        path,
        teaches: [
          "Linux and Git",
          "AWS, Azure and Google Cloud",
          "Docker and Kubernetes",
          "Terraform and CI/CD",
        ],
        duration: "P4M",
      }),
    );
  }
  if (page.route.group === "guide" || page.route.group === "trust") blocks.push(article(page));
  if (path === "/trainers") blocks.push(...buildMentorPersonSchemas());
  if (path === "/devops-course-in-mumbai" || path === "/cloud-computing-course-in-mumbai" || path === "/sitemap") {
    const origin = getSiteOrigin();
    blocks.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: page.route.h1,
      itemListElement: (page.links || []).map((link, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: link.label,
        url: link.href.startsWith("http") ? link.href : `${origin}${link.href}`,
      })),
    });
  }
  if (page.reviews) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "@id": `${getSiteOrigin()}/reviews#reviews`,
      name: PROVIDER_NAME,
      telephone: PHONE,
      address: ADDRESS,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: GOOGLE_REVIEWS_STATS.ratingValue,
        reviewCount: GOOGLE_REVIEWS_STATS.reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
      review: TESTIMONIALS.map((item) => ({
        "@type": "Review",
        author: { "@type": "Person", name: item.name },
        reviewBody: item.quote,
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(item.rating),
          bestRating: "5",
          worstRating: "1",
        },
      })),
    });
  }
  return blocks;
}
