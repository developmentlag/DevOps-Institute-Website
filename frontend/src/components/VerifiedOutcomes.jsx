import { Star } from "lucide-react";
import { PLACEMENT_OUTCOMES } from "@/data/placementOutcomes";
import {
  GBP_REVIEWS_URL,
  GOOGLE_REVIEWS_STATS,
  PLACED_LABEL,
  PLACEMENT_DISCLAIMER,
  PLACEMENT_SUPPORT_LABEL,
  TESTIMONIALS,
} from "@/data/site";

const COLUMNS = ["Alumni Name", "Background", "Role Placed", "Company Tier", "Package Range", "Campus"];

function ReviewCards() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {TESTIMONIALS.map((item) => (
        <figure key={item.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" data-testid={`verified-review-${item.name.replace(/\s+/g, "-").toLowerCase()}`}>
          <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
            {Array.from({ length: item.rating }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-3 text-sm text-slate-700 leading-relaxed">“{item.quote}”</blockquote>
          <figcaption className="mt-4 border-t border-slate-100 pt-3">
            <p className="font-heading font-bold text-slate-900">{item.name}</p>
            <p className="text-xs text-slate-500">{item.role} · {item.company}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function OutcomeTable() {
  if (!PLACEMENT_OUTCOMES.length) return null;
  return (
    <div className="mt-10" data-testid="placement-outcome-table">
      <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
        Verified via Google Reviews & Alumni LinkedIn
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm border border-slate-200 bg-white">
          <caption className="text-left font-heading font-bold text-slate-900 px-3 py-2 bg-slate-50 border-b border-slate-200">
            Placement outcomes
          </caption>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              {COLUMNS.map((column) => (
                <th key={column} scope="col" className="text-left font-semibold px-3 py-2">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLACEMENT_OUTCOMES.map((row) => (
              <tr key={row.name} className="border-b border-slate-200">
                <th scope="row" className="text-left font-semibold px-3 py-2">{row.name}</th>
                <td className="px-3 py-2">{row.background}</td>
                <td className="px-3 py-2">{row.role}</td>
                <td className="px-3 py-2">{row.companyTier}</td>
                <td className="px-3 py-2">{row.packageRange}</td>
                <td className="px-3 py-2">{row.campus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function VerifiedOutcomes({ embedded = false }) {
  const body = (
    <>
      <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
        {GOOGLE_REVIEWS_STATS.ratingValue} from {GOOGLE_REVIEWS_STATS.reviewCount} Google reviews
      </span>
      <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
        Verified Alumni Outcomes & Google Reviews
      </h2>
      <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-3xl">
        {PLACED_LABEL}. {PLACEMENT_SUPPORT_LABEL}. The quotes below are the student stories already published on this website.
      </p>
      <a
        href={GBP_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="verified-google-reviews-link"
        className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-blue-800 transition-colors"
      >
        Read Our Verified {GOOGLE_REVIEWS_STATS.ratingValue}★ Google Reviews
      </a>
      <p className="mt-4 max-w-3xl text-xs leading-relaxed text-slate-500" data-testid="placement-disclaimer">
        {PLACEMENT_DISCLAIMER}
      </p>
      <ReviewCards />
      <OutcomeTable />
    </>
  );

  if (embedded) {
    return (
      <section className="mt-10" data-testid="verified-outcomes">
        {body}
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" data-testid="verified-outcomes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{body}</div>
    </section>
  );
}
