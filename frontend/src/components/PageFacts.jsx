import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { ClassroomPhoto, HighlightCards } from "@/components/ClassroomSpotlight";
import { MentorTeaser } from "@/components/Mentors";
import {
  ADDRESS,
  AFFILIATION_LINE,
  ASSURANCE_LABEL,
  LAST_UPDATED_LABEL,
  PHONE,
  PHONE_TEL,
  PLACED_LABEL,
  PLACEMENT_LABEL,
  WHATSAPP_URL,
} from "@/data/site";

const PRACTICAL_CHECKS = [
  "100% Classroom Training",
  "AWS, Azure & GCP Hands-on Labs",
  "Weekend & Weekday Batches",
  "Dedicated Placement Support",
];

export function Breadcrumbs({ crumbs }) {
  if (!crumbs || crumbs.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={`${crumb.href}-${crumb.name}`} className="inline-flex items-center gap-1">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="text-slate-700 font-medium">{crumb.name}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-blue-700">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function withEnoughWords(answer) {
  const text = String(answer || "").trim();
  const count = text.split(/\s+/).filter(Boolean).length;
  if (count >= 40) return text;
  return `${text} Ask which batch still has room.`;
}

export function DirectAnswer({ children }) {
  return (
    <p data-direct-answer className="mt-4 text-base text-slate-800 leading-relaxed max-w-3xl">
      {withEnoughWords(children)}
    </p>
  );
}

export function KeyFacts() {
  return (
    <table className="mt-6 w-full max-w-3xl text-sm border border-slate-200">
      <caption className="text-left font-heading font-bold text-slate-900 px-3 py-2 bg-slate-50 border-b border-slate-200">
        Key facts
      </caption>
      <tbody>
        <tr className="border-b border-slate-200">
          <th scope="row" className="text-left font-semibold px-3 py-2 align-top w-36">Duration</th>
          <td className="px-3 py-2">4 months to become job-ready, as published. A weekly hour grid is not published.</td>
        </tr>
        <tr className="border-b border-slate-200">
          <th scope="row" className="text-left font-semibold px-3 py-2 align-top">Mode</th>
          <td className="px-3 py-2">Weekday and weekend classroom batches at the Powai campus. Blended means onsite labs plus online contact.</td>
        </tr>
        <tr className="border-b border-slate-200">
          <th scope="row" className="text-left font-semibold px-3 py-2 align-top">Campus</th>
          <td className="px-3 py-2">DevOps Institute, Chandivali, Powai, Mumbai</td>
        </tr>
        <tr className="border-b border-slate-200">
          <th scope="row" className="text-left font-semibold px-3 py-2 align-top">Address</th>
          <td className="px-3 py-2">{ADDRESS}</td>
        </tr>
        <tr className="border-b border-slate-200">
          <th scope="row" className="text-left font-semibold px-3 py-2 align-top">Phone</th>
          <td className="px-3 py-2">
            <a href={PHONE_TEL} className="font-semibold text-blue-700">{PHONE}</a>
          </td>
        </tr>
        <tr className="border-b border-slate-200">
          <th scope="row" className="text-left font-semibold px-3 py-2 align-top">Certifications</th>
          <td className="px-3 py-2">Labs overlap AWS, Azure and Kubernetes exam topics. This site does not name a certificate the institute awards.</td>
        </tr>
        <tr className="border-b border-slate-200">
          <th scope="row" className="text-left font-semibold px-3 py-2 align-top">Placement</th>
          <td className="px-3 py-2">{PLACED_LABEL}, {PLACEMENT_LABEL}, {ASSURANCE_LABEL}</td>
        </tr>
        <tr>
          <th scope="row" className="text-left font-semibold px-3 py-2 align-top">Affiliations</th>
          <td className="px-3 py-2">
            {AFFILIATION_LINE} Names are listed in words. Affiliation logos are not shown.
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function UpdatedLine() {
  return <p className="mt-3 text-sm text-slate-500">Last updated: {LAST_UPDATED_LABEL}</p>;
}

function PracticalLead() {
  return (
    <div className="mt-5 max-w-3xl">
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
        100% practical <strong className="font-semibold text-slate-800">classroom DevOps training</strong> in
        Chandivali, Powai — with hands-on AWS, Azure &amp; GCP labs, weekend &amp; weekday batches, and
        dedicated <strong className="font-semibold text-slate-800">placement support</strong>.
      </p>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {PRACTICAL_CHECKS.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntroActions({ demoHref }) {
  return (
    <div className="mt-6 max-w-lg space-y-3">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a
          href={PHONE_TEL}
          data-testid="hero-call-now-button"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3.5 px-5 text-sm sm:text-base font-semibold text-white shadow-md shadow-blue-700/20 hover:bg-blue-800 transition-colors whitespace-nowrap"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          Call Now: {PHONE}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="hero-whatsapp-button"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 px-5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          WhatsApp Us
        </a>
      </div>
      <a
        href={demoHref}
        data-testid="hero-enquire-now-button"
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-3 px-5 text-sm sm:text-base font-semibold text-slate-900 shadow-sm hover:border-blue-600 hover:text-blue-700 transition-colors"
      >
        Book a Free Demo Class
        <ArrowRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
      </a>
    </div>
  );
}

export function AnswerBlock({ answer, mentors = true, showAnswer = true, demoHref = "/#enquiry" }) {
  return (
    <>
      <PracticalLead />
      <ClassroomPhoto />
      <IntroActions demoHref={demoHref} />
      <HighlightCards />
      {mentors ? <MentorTeaser /> : null}
      {showAnswer ? (
        <>
          <DirectAnswer>{answer}</DirectAnswer>
          <UpdatedLine />
        </>
      ) : null}
    </>
  );
}

export function KeyFactsSection() {
  return (
    <section id="key-facts" className="py-12 sm:py-16 bg-white border-t border-slate-200" data-testid="key-facts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <KeyFacts />
      </div>
    </section>
  );
}
