import GbpPicture from "@/components/GbpPicture";
import { GBP_GALLERY } from "@/data/gbpPhotos";

export default function StudentLifeGallery({ embedded = false }) {
  const body = (
    <>
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          On campus
        </span>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Student life &amp; classroom
        </h2>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Photographs from the DevOps classroom at the Powai campus in Mumbai, including lab batches, a group photo, certificates and a student thank-you.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {GBP_GALLERY.map((photo) => (
          <figure key={photo.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white" data-testid={`student-life-${photo.id}`}>
            <GbpPicture
              photo={photo}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="h-full w-full object-cover aspect-[4/3]"
            />
            <figcaption className="px-3 py-2 text-xs sm:text-sm text-slate-600">{photo.alt}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return (
      <section className="mt-10" data-testid="student-life-gallery" aria-label="Student life and classroom">
        {body}
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" data-testid="student-life-gallery" aria-label="Student life and classroom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{body}</div>
    </section>
  );
}
