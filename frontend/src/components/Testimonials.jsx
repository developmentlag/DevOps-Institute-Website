import { Star, Quote, ExternalLink } from "lucide-react";
import { TESTIMONIALS, GOOGLE_REVIEWS_STATS, GOOGLE_BUSINESS_PROFILE_URLS } from "@/data/site";

const AVATAR_COLORS = [
  "bg-blue-600",
  "bg-emerald-600",
  "bg-indigo-600",
  "bg-sky-600",
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Student Stories
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              What Our Students Say
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Learners from across Mumbai train with us and move into cloud &amp; DevOps roles. Here is what recent
              batches have shared about the classroom experience.
            </p>
          </div>

          <a
            href={GOOGLE_BUSINESS_PROFILE_URLS[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group shrink-0"
            data-testid="google-reviews-badge"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 font-extrabold text-xl font-heading shadow-xs">
              {GOOGLE_REVIEWS_STATS.ratingValue}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-800 mt-1">
                {GOOGLE_REVIEWS_STATS.reviewCount}+ Verified Google Reviews
              </p>
              <p className="text-[11px] text-slate-500 flex items-center gap-1">
                5+ years in business
                <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </p>
            </div>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              data-testid={`testimonial-card-${i + 1}`}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-6 w-6 text-blue-200" aria-hidden="true" />
              <div className="mt-2 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-sm font-bold text-white`}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span className="leading-tight">
                  <span className="block font-heading font-bold text-slate-900 text-sm">{t.name}</span>
                  <span className="block text-xs text-slate-500">
                    {t.role} · {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400">
          Testimonials reflect representative student experiences at our Powai campus.
        </p>
      </div>
    </section>
  );
}
