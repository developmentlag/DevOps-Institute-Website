import { Instagram, ArrowUpRight } from "lucide-react";
import { CAMPUS_PHOTOS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/data/site";

export default function CampusGallery() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50" data-testid="campus-gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Inside Our Campus
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Real Classrooms, Real Students, Real Labs
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              A look inside our Lodha Supremus campus in Chandivali, Powai — where every batch trains hands-on across
              AWS, Azure, GCP and DevOps.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="campus-instagram-cta"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Follow {INSTAGRAM_HANDLE}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CAMPUS_PHOTOS.map((photo, i) => (
            <figure
              key={photo.src}
              data-testid={`campus-photo-${i + 1}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white aspect-[4/5]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-4 text-xs sm:text-sm font-medium text-white">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
