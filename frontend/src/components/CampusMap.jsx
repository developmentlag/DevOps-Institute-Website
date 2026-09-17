import { useState } from "react";
import { MapPin, Phone, Navigation, Loader2, Star } from "lucide-react";
import { BUSINESS_NAME, ADDRESS, PHONE, PHONE_TEL, MAP_EMBED_URL, MAP_DIRECTIONS_URL, NEARBY_AREAS, GOOGLE_REVIEWS_STATS } from "@/data/site";

export default function CampusMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-slate-50" data-testid="campus-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Visit Our Campus in Chandivali, Powai</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Visit {BUSINESS_NAME} at:
            </h2>
            <address className="not-italic mt-4 text-base text-slate-700 leading-relaxed" data-testid="campus-nap">
              {ADDRESS}
            </address>
            <p className="mt-4 text-base text-slate-700">
              Call us:{" "}
              <a href={PHONE_TEL} data-testid="campus-call-link" className="font-semibold text-blue-700">
                {PHONE}
              </a>
            </p>
            <p className="mt-6 text-sm text-slate-600 leading-relaxed">
              Our campus at Lodha Supremus on Saki Vihar Road is easy to reach from{" "}
              {NEARBY_AREAS.slice(0, 7).join(", ")} and across Mumbai. If you are looking for an IT training institute near
              Powai or cloud and DevOps classes in Mumbai, drop in for a campus visit and a free counselling session.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {NEARBY_AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="campus-get-directions-button"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-slate-800 transition-colors"
              >
                <Navigation className="h-4 w-4 text-blue-300" aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={PHONE_TEL}
                data-testid="campus-call-button"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-800 transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {PHONE}
              </a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg min-h-[360px] bg-slate-100 flex items-center justify-center">
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 gap-2">
                <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                <span className="text-xs font-medium">Loading Google Map…</span>
              </div>
            )}
            <iframe
              title={`Map showing ${BUSINESS_NAME}, ${ADDRESS}`}
              src={MAP_EMBED_URL}
              onLoad={() => setLoaded(true)}
              className={`w-full h-full min-h-[360px] transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="campus-google-map"
            />
            {loaded && (
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 px-3 py-1 shadow-sm">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-slate-800">{GOOGLE_REVIEWS_STATS.ratingValue} · {GOOGLE_REVIEWS_STATS.reviewCount} Google Reviews</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
