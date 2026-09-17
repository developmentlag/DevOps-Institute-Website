import { useRef, useState } from "react";
import { Play, Instagram, ArrowUpRight } from "lucide-react";
import { CAMPUS_REELS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/data/site";

const Reel = ({ reel, index }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    const v = videoRef.current;
    if (v) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  };

  return (
    <figure
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm aspect-[9/16]"
      data-testid={`campus-reel-${index + 1}`}
    >
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        preload="none"
        playsInline
        controls={playing}
        loop
        className="h-full w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={play}
          data-testid={`campus-reel-play-${index + 1}`}
          aria-label={`Play video: ${reel.title}`}
          className="absolute inset-0 flex flex-col items-center justify-end gap-3 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent p-5 text-left"
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-blue-700 shadow-lg transition-transform hover:scale-110">
            <Play className="h-7 w-7 translate-x-0.5 fill-current" aria-hidden="true" />
          </span>
          <span className="w-full text-sm font-semibold text-white">{reel.title}</span>
        </button>
      )}
    </figure>
  );
};

export default function VideoReels() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" data-testid="campus-reels-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Campus Reels
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              See Our Powai Classroom in Action
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Real videos from our DevOps &amp; cloud training batches in Chandivali, Powai — classroom sessions,
              hands-on labs and student life.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="reels-instagram-link"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            More on Instagram {INSTAGRAM_HANDLE}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-xl sm:max-w-none mx-auto">
          {CAMPUS_REELS.map((reel, i) => (
            <Reel key={reel.src} reel={reel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
