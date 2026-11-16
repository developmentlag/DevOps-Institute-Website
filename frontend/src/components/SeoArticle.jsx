import { Link } from "react-router-dom";
import EnquiryForm from "@/components/EnquiryForm";
import CampusMap from "@/components/CampusMap";
import StudentLifeGallery from "@/components/StudentLifeGallery";
import FeeHook from "@/components/FeeHook";
import VerifiedOutcomes from "@/components/VerifiedOutcomes";
import OwnerKeyBody, { OwnerHero } from "@/components/OwnerKeyPage";
import DemoBookingForm from "@/components/DemoBookingForm";
import { ownerKeyPage } from "@/data/ownerKeyPages";
import { AnswerBlock, Breadcrumbs, DirectAnswer, UpdatedLine } from "@/components/PageFacts";
import { MentorCards } from "@/components/Mentors";
import { MapPin } from "lucide-react";
import {
  ADDRESS,
  GHATKOPAR_URL,
  PHONE,
  PHONE_TEL,
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

const FEE_HOOK_PATHS = new Set([
  "/devops-course",
  "/cloud-computing-course",
]);

function SitemapBlock() {
  const groups = [
    {
      title: "Featured courses and demo",
      links: [
        { href: "/aws-devops-course", label: "AWS Cloud & DevOps course" },
        { href: "/azure-devops-course", label: "Microsoft Azure DevOps course" },
        { href: "/kubernetes-docker-course", label: "Kubernetes & Docker course" },
        { href: "/free-demo-powai", label: "Free demo class in Powai" },
      ],
    },
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
  const owner = ownerKeyPage(page.route.path);
  const demoHref = owner
    ? (page.route.path === "/free-demo-powai" ? "#demo-form" : "/free-demo-powai")
    : "#enquiry";
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {page.classroomFirst ? (
        <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          Classroom Training in Powai, Mumbai
        </p>
      ) : null}
      <Breadcrumbs crumbs={page.crumbs} />
      <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {page.route.h1}
      </h1>
      <OwnerHero page={owner} />
      {FEE_HOOK_PATHS.has(page.route.path) ? (
        <FeeHook demoHref="#enquiry" testId="seo-fee-hook" className="mt-6" />
      ) : null}
      <AnswerBlock
        answer={page.answer}
        mentors={page.route.path !== "/trainers"}
        showAnswer={page.route.path !== "/trainers" && !owner}
        demoHref={demoHref}
      />
      {page.route.path === "/devops-course-in-powai" ? <StudentLifeGallery embedded /> : null}
      {page.route.path === "/trainers" ? (
        <>
          <MentorCards />
          <DirectAnswer>{page.answer}</DirectAnswer>
          <UpdatedLine />
        </>
      ) : null}

      {owner ? <OwnerKeyBody page={owner} /> : null}
      {page.route.path === "/free-demo-powai" ? (
        <section id="demo-form" className="no-print mt-10 rounded-xl border border-slate-200 p-5">
          <h2 className="font-heading text-2xl font-bold text-slate-900">Book your free demo</h2>
          <div className="mt-4">
            <DemoBookingForm />
          </div>
        </section>
      ) : null}
      {owner ? (
        <p className="mt-10 text-slate-700 leading-relaxed">{page.answer}</p>
      ) : null}

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
      {page.reviews || page.placements ? <VerifiedOutcomes embedded /> : null}
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

      {page.route.path === "/free-demo-powai" ? null : (
        <section id="enquiry" className="no-print mt-12 rounded-xl border border-slate-200 p-5">
          <h2 className="font-heading text-2xl font-bold text-slate-900">Ask about the next batch</h2>
          <p className="mt-2 text-slate-700">
            {ADDRESS}. Phone <a className="font-semibold text-blue-700" href={PHONE_TEL}>{PHONE}</a>.{" "}
            <a className="font-semibold text-blue-700" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp the campus</a>.
          </p>
          <div className="mt-4">
            <EnquiryForm source={page.route.path} testIdPrefix="seo-enquiry" />
          </div>
        </section>
      )}

      {page.showMap ? <CampusMap /> : null}
    </article>
  );
}
