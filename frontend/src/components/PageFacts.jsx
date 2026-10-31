import { Link } from "react-router-dom";
import ClassroomSpotlight from "@/components/ClassroomSpotlight";
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
} from "@/data/site";

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

export function AnswerBlock({ answer, mentors = true, afterSpotlight = null }) {
  return (
    <>
      <DirectAnswer>{answer}</DirectAnswer>
      <ClassroomSpotlight />
      {afterSpotlight}
      <UpdatedLine />
      {mentors ? <MentorTeaser /> : null}
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
