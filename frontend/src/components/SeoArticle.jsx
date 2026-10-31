import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "@/components/EnquiryForm";
import CampusMap from "@/components/CampusMap";
import StudentLifeGallery from "@/components/StudentLifeGallery";
import { AnswerBlock, Breadcrumbs, DirectAnswer, KeyFacts, UpdatedLine } from "@/components/PageFacts";
import { ClassroomHighlight, ClassroomMapCard } from "@/components/ClassroomSpotlight";
import PracticalTrainingCta from "@/components/PracticalTrainingCta";
import { MentorCards, MentorTeaser } from "@/components/Mentors";
import {
  ADDRESS,
  GHATKOPAR_URL,
  GOOGLE_BUSINESS_PROFILE_URLS,
  PHONE,
  PHONE_TEL,
  TESTIMONIALS,
  THANE_HOME,
  VASHI_URL,
  WHATSAPP_URL,
} from "@/data/site";
import { AREA_ROUTES, CLOUD_AREA_ROUTES, GUIDE_ROUTES, SEO_ROUTES, TRUST_ROUTES } from "@/data/seoRoutes";

function SectionTable({ table }) {
  if (!table) return null;
  return (
    <table className="mt-4 w-full text-sm border border-slate-200">
      <caption className="text-left font-semibold px-3 py-2 bg-slate-50 border-b border-slate-200">{table.caption}</caption>
      <thead>
        <tr>
          {table.headers.map((header) => (
            <th key={header} scope="col" className="text-left px-3 py-2 border-b border-slate-200">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row.join("|")} className="border-b border-slate-200">
            {row.map((cell) => (
              <td key={cell} className="px-3 py-2 align-top">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SyllabusTable({ modules }) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-heading text-2xl font-bold text-slate-900">Module by module</h2>
        <button
          type="button"
          className="no-print rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold"
          onClick={() => window.print()}
        >
          Print syllabus
        </button>
      </div>
      <table className="mt-4 w-full text-sm border border-slate-200">
        <caption className="text-left font-semibold px-3 py-2 bg-slate-50 border-b border-slate-200">
          DevOps course syllabus. Per-module hours are not published.
        </caption>
        <thead>
          <tr>
            {["Module", "Tools", "Hours", "Project"].map((header) => (
              <th key={header} scope="col" className="text-left px-3 py-2 border-b border-slate-200">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modules.map((mod) => (
            <tr key={mod.name} className="border-b border-slate-200">
              <th scope="row" className="text-left px-3 py-2 align-top font-semibold">
                {mod.name}
                <span className="block font-normal text-slate-600 mt-1">{mod.detail}</span>
              </th>
              <td className="px-3 py-2 align-top">{mod.tools}</td>
              <td className="px-3 py-2 align-top">{mod.hours}</td>
              <td className="px-3 py-2 align-top">{mod.project}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReviewsBlock() {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-2xl font-bold text-slate-900">Stories already published on this site</h2>
      <ul className="mt-4 space-y-4">
        {TESTIMONIALS.map((item) => (
          <li key={item.name} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.name}</p>
            <p className="text-sm text-slate-600">{item.role}. {item.company}.</p>
            <blockquote className="mt-2 text-slate-800">{item.quote}</blockquote>
            <p className="mt-2 text-sm text-slate-500">Google review dates are not published. Rating on the card: {item.rating} out of 5.</p>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        <a href={GOOGLE_BUSINESS_PROFILE_URLS[0]} className="font-semibold text-blue-700" rel="noopener noreferrer" target="_blank">
          Leave us a Google review
        </a>
      </p>
      <p className="mt-2 text-sm text-slate-600">
        This is the stored Google Business Profile share link, not a write-a-review URL. A place id is not published.
      </p>
    </section>
  );
}

function PlacementsBlock() {
  const [filter, setFilter] = useState("all");
  const rows = useMemo(
    () =>
      TESTIMONIALS.map((item) => ({
        ...item,
        bucket: item.role.toLowerCase().includes("placed")
          ? "placed"
          : item.company.toLowerCase().includes("shift")
            ? "shift"
            : "story",
      })),
    [],
  );
  const visible = rows.filter((row) => filter === "all" || row.bucket === filter);
  return (
    <section className="mt-10">
      <h2 className="font-heading text-2xl font-bold text-slate-900">Alumni named on this website</h2>
      <label className="mt-4 block text-sm font-semibold text-slate-700" htmlFor="placement-filter">
        Filter
      </label>
      <select
        id="placement-filter"
        className="mt-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="all">All published stories</option>
        <option value="placed">Placement package named</option>
        <option value="shift">Career shift described</option>
        <option value="story">Other published stories</option>
      </select>
      <ul className="mt-4 space-y-4">
        {visible.map((item) => (
          <li key={item.name} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.name}</p>
            <p className="text-sm text-slate-700">{item.role}</p>
            <p className="text-sm text-slate-600">Published detail: {item.company}</p>
            <p className="text-sm text-slate-600">Employer name is not published.</p>
            <p className="text-sm text-slate-600">A consented photo is not published.</p>
            <p className="mt-2 text-slate-800">{item.quote}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SitemapBlock() {
  const groups = [
    {
      title: "Courses",
      links: [
        { href: "/courses", label: "All courses" },
        { href: "/courses/devops", label: "DevOps course" },
        { href: "/courses/aws", label: "AWS course" },
        { href: "/courses/azure", label: "Azure course" },
        { href: "/courses/gcp", label: "GCP course" },
        { href: "/courses/kubernetes-docker", label: "Kubernetes and Docker course" },
        { href: "/courses/linux-terraform", label: "Linux and Terraform course" },
        { href: "/devops-course", label: "DevOps course pillar" },
        { href: "/cloud-computing-course", label: "Cloud computing course pillar" },
      ],
    },
    { title: "DevOps course near you", links: AREA_ROUTES.map((route) => ({ href: route.path, label: route.h1 })) },
    { title: "Cloud computing course near you", links: CLOUD_AREA_ROUTES.map((route) => ({ href: route.path, label: route.h1 })) },
    { title: "Guides", links: GUIDE_ROUTES.map((route) => ({ href: route.path, label: route.h1 })) },
    {
      title: "Campus and trust",
      links: [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/faqs", label: "FAQs" },
        ...TRUST_ROUTES.map((route) => ({ href: route.path, label: route.h1 })),
      ],
    },
    {
      title: "Other campuses",
      links: [
        { href: THANE_HOME, label: "Thane and Navi Mumbai" },
        { href: VASHI_URL, label: "Vashi" },
        { href: GHATKOPAR_URL, label: "Ghatkopar" },
      ],
    },
  ];
  return (
    <div className="mt-8 space-y-6">
      {groups.map((group) => (
        <section key={group.title}>
          <h2 className="font-heading text-xl font-bold text-slate-900">{group.title}</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {group.links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("http") ? (
                  <a href={link.href} className="text-blue-700">{link.label}</a>
                ) : (
                  <Link to={link.href} className="text-blue-700">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <p className="text-sm text-slate-500">{SEO_ROUTES.filter((route) => route.index).length} indexable SEO routes, plus the original course pages.</p>
    </div>
  );
}

export default function SeoArticle({ page }) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs crumbs={page.crumbs} />
      <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {page.route.h1}
      </h1>
      {page.classroomFirst ? (
        <>
          <ClassroomHighlight />
          <PracticalTrainingCta demoHref="#seo-enquiry" testIdPrefix="area-hero" />
          <DirectAnswer>{page.answer}</DirectAnswer>
          <UpdatedLine />
        </>
      ) : (
        <AnswerBlock answer={page.answer} mentors={page.route.path !== "/trainers"} />
      )}
      {page.route.path === "/devops-course-in-powai" ? <StudentLifeGallery embedded /> : null}
      {page.route.path === "/trainers" ? <MentorCards /> : null}

      {page.sections.map((section) => (
        <section key={section.h2} className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-slate-900">{section.h2}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 80)} className="mt-3 text-slate-700 leading-relaxed">{paragraph}</p>
          ))}
          <SectionTable table={section.table} />
        </section>
      ))}

      {page.syllabusModules ? <SyllabusTable modules={page.syllabusModules} /> : null}
      {page.reviews ? <ReviewsBlock /> : null}
      {page.placements ? <PlacementsBlock /> : null}
      {page.sitemap ? <SitemapBlock /> : null}

      {page.faqs && page.faqs.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <dl className="mt-4 space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="font-semibold text-slate-900">{faq.q}</dt>
                <dd className="mt-1 text-slate-700">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {page.links && page.links.length > 0 ? (
        <nav className="mt-10" aria-label="Related pages">
          <h2 className="font-heading text-2xl font-bold text-slate-900">Related pages</h2>
          <ul className="mt-3 space-y-1">
            {page.links.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <Link to={link.href} className="text-blue-700 font-medium">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {page.classroomFirst ? (
        <>
          <MentorTeaser />
          <KeyFacts />
        </>
      ) : null}

      <section id="seo-enquiry" className="no-print mt-12 rounded-xl border border-slate-200 p-5">
        <h2 className="font-heading text-2xl font-bold text-slate-900">Ask about the next batch</h2>
        <p className="mt-2 text-slate-700">
          {ADDRESS}. Phone <a className="font-semibold text-blue-700" href={PHONE_TEL}>{PHONE}</a>.{" "}
          <a className="font-semibold text-blue-700" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp the campus</a>.
        </p>
        <div className="mt-4">
          <EnquiryForm source={page.route.path} testIdPrefix="seo-enquiry" />
        </div>
      </section>

      {page.classroomFirst ? <ClassroomMapCard className="mt-10" /> : null}
      {page.showMap ? <CampusMap /> : null}
    </article>
  );
}
