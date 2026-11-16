import { Link } from "react-router-dom";
import { TESTIMONIALS, GBP_REVIEWS_URL } from "@/data/site";
import { GOOGLE_REVIEWS_BADGE } from "@/data/ownerKeyPages";

const SNAPSHOT_NAMES = ["Rajeswari Singh", "Sneha P.", "Umesh Sonawane"];

function FactList({ facts }) {
  return (
    <ul className="mt-4 space-y-2 text-slate-700">
      {facts.map(([label, value]) => (
        <li key={label}>
          <strong>{label}:</strong> {value}
        </li>
      ))}
    </ul>
  );
}

function ModuleList({ modules }) {
  return (
    <ul className="mt-4 space-y-3 text-slate-700">
      {modules.map(([label, value]) => (
        <li key={label}>
          <strong>{label}</strong> – {value}
        </li>
      ))}
    </ul>
  );
}

function ComparisonTable({ table }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[640px] text-sm border border-slate-200">
        <caption className="text-left font-semibold px-3 py-2 bg-slate-50 border-b border-slate-200">
          {table.caption}
        </caption>
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col" className="text-left px-3 py-2 border-b border-slate-200 bg-slate-50">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-200">
              {row.map((cell, index) => (
                <td key={cell} className="px-3 py-2 align-top">
                  {index === row.length - 1 ? <strong>{cell}</strong> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReviewSnapshots() {
  const cards = SNAPSHOT_NAMES.map((name) => TESTIMONIALS.find((item) => item.name === name)).filter(Boolean);
  return (
    <div className="mt-4">
      <a
        href={GBP_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900"
        data-testid="owner-google-reviews-badge"
      >
        {GOOGLE_REVIEWS_BADGE}
      </a>
      <div className="mt-4 space-y-4">
        {cards.map((item) => (
          <figure key={item.name} className="rounded-xl border border-slate-200 p-4">
            <blockquote className="text-slate-800">“{item.quote}”</blockquote>
            <figcaption className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">{item.name}</span>
              {" · "}
              {item.role}
              {" · "}
              {item.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function OwnerHero({ page }) {
  if (!page) return null;
  return (
    <div className="mt-4" data-testid="owner-hero">
      <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{page.subheadline}</p>
      {page.primaryLabel ? (
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Link
            to={page.primaryHref}
            data-testid="owner-primary-cta"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-blue-800"
          >
            {page.primaryLabel}
          </Link>
          <a
            href={page.secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="owner-secondary-cta"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm sm:text-base font-semibold text-slate-900 hover:border-blue-600"
          >
            {page.secondaryLabel}
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default function OwnerKeyBody({ page }) {
  if (!page) return null;
  return (
    <div data-testid="owner-key-body">
      {page.sections.map((section) => (
        <section key={section.h2} className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-slate-900">{section.h2}</h2>
          {(section.paragraphs || []).map((paragraph) => (
            <p key={paragraph.slice(0, 80)} className="mt-3 text-slate-700 leading-relaxed">{paragraph}</p>
          ))}
          {section.facts ? <FactList facts={section.facts} /> : null}
          {section.modules ? <ModuleList modules={section.modules} /> : null}
          {section.bullets ? (
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.steps ? (
            <ol className="mt-4 list-decimal pl-5 space-y-3 text-slate-700">
              {section.steps.map(([label, value]) => (
                <li key={label}>
                  <strong>{label}:</strong> {value}
                </li>
              ))}
            </ol>
          ) : null}
          {section.table ? <ComparisonTable table={section.table} /> : null}
          {section.reviews ? <ReviewSnapshots /> : null}
          {section.faqs ? (
            <dl className="mt-4 space-y-4">
              {section.faqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="font-semibold text-slate-900">{faq.q}</dt>
                  <dd className="mt-1 text-slate-700">{faq.a}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </section>
      ))}
    </div>
  );
}
