import {
  ADDRESS,
  BUSINESS_NAME,
  GBP_PROFILE_URL,
  MAP_EMBED_URL,
  PHONE,
  PHONE_TEL,
} from "@/data/site";

export default function PageEndMap() {
  return (
    <section id="campus-map" className="bg-slate-50 border-t border-slate-200" data-testid="page-end-map" aria-label="Powai campus on Google">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title={`Google Map of ${BUSINESS_NAME}, ${ADDRESS}`}
            src={MAP_EMBED_URL}
            className="w-full min-h-[280px] bg-slate-100"
            width="600"
            height="280"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            data-testid="classroom-google-map"
          />
          <div className="px-4 py-4 text-sm text-slate-700">
            <a
              href={GBP_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="gbp-profile-link"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              View on Google / Reviews
            </a>
            <p className="mt-2 leading-relaxed">
              {BUSINESS_NAME}. {ADDRESS}. Phone{" "}
              <a href={PHONE_TEL} className="font-semibold text-blue-700">{PHONE}</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
