import { useRef, useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { ALUMNI_REELS, CALL_NOW_ALUMNI_TEL, CALL_NOW_ALUMNI_PHONE } from "@/data/site";

function ReelCard({ reel, isPlaying, onPlay, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const p = videoRef.current.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {});
      }
    }
  }, [isPlaying]);

  return (
    <div
      role="article"
      className="relative shrink-0 snap-center w-[280px] sm:w-[310px] lg:flex-1 lg:max-w-[340px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_10px_28px_rgba(23,43,77,0.16)] hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      onClick={() => {
        if (!isPlaying) onPlay();
      }}
      data-testid={`alumni-reel-${reel.id}`}
    >
      {isPlaying ? (
        <div className="relative w-full h-full bg-black">
          <video
            ref={videoRef}
            src={reel.src}
            poster={reel.poster}
            playsInline
            controls
            autoPlay
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover z-20 bg-black"
            onEnded={onClose}
            onError={(e) => {
              if (reel.remoteSrc && e.target.src !== reel.remoteSrc) {
                e.target.src = reel.remoteSrc;
                e.target.play().catch(() => {});
              }
            }}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close video"
            className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <>
          <img
            src={reel.poster}
            alt={reel.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

          {/* Large Semi-transparent play button in the dead center */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPlay();
            }}
            aria-label={`Play video: ${reel.title}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border-2 border-white/70 text-white shadow-2xl transition-all duration-200 group-hover:scale-110 group-hover:bg-black/55 active:scale-95"
          >
            <Play className="h-8 w-8 sm:h-9 sm:w-9 translate-x-0.5 fill-white text-white opacity-95" aria-hidden="true" />
          </button>

          {/* Bottom Card Label Pill - Exactly 74px tall on ALL 5 cards so they are 100% in line */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 h-[74px] rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xs p-3 shadow-lg border border-slate-100 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 truncate">
                {reel.title}
              </h3>
              {reel.linkedin ? (
                <a
                  href={reel.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${reel.title} on LinkedIn`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center text-[#0a66c2] hover:opacity-80 shrink-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="#0a66c2"
                    aria-hidden="true"
                    style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
              ) : null}
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs sm:text-[13px] text-slate-600 font-medium truncate flex-1 min-w-0">
                {reel.role}
              </p>
              {reel.logo && (
                <img
                  src={reel.logo}
                  alt={`${reel.title} employer logo`}
                  className="h-5 max-w-[75px] object-contain shrink-0 ml-1.5"
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function VideoReels() {
  const trackRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const cardWidth = 340;
    trackRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  const content = (
    <div className="relative w-full">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          Hear From <span className="text-[#1d4ed8]">Our Alumni</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Student stories and where our alumni are working after the programme.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative mt-8 sm:mt-12 group/slider w-full">
        {/* Mobile / Tablet scroll buttons */}
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous reels"
          className="hidden md:flex xl:hidden absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-xl hover:bg-slate-50 hover:text-blue-700 transition-all"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next reels"
          className="hidden md:flex xl:hidden absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-xl hover:bg-slate-50 hover:text-blue-700 transition-all"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Scrollable Track (Smooth mobile scroll, no scrollbar, wide on desktop) */}
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto py-4 px-4 sm:px-6 scroll-smooth snap-x snap-mandatory overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden justify-start xl:justify-center items-stretch"
        >
          {ALUMNI_REELS.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              isPlaying={playingId === reel.id}
              onPlay={() => setPlayingId(reel.id)}
              onClose={() => setPlayingId(null)}
            />
          ))}
        </div>
      </div>

      {/* Call Now Pill Button */}
      <div className="mt-10 sm:mt-12 flex justify-center">
        <a
          href={CALL_NOW_ALUMNI_TEL}
          className="inline-flex items-center gap-3 rounded-full bg-[#173b7a] hover:bg-[#122e60] text-white px-8 py-3.5 text-base sm:text-lg font-semibold shadow-[0_8px_24px_rgba(23,59,122,0.25)] transition-all hover:scale-105 border-2 border-blue-200/60"
          aria-label={`Call DevOps Institute Mumbai on ${CALL_NOW_ALUMNI_PHONE}`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#173b7a] shadow-sm">
            <Phone className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
          </span>
          <span>Call Now: {CALL_NOW_ALUMNI_PHONE}</span>
        </a>
      </div>
    </div>
  );

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-slate-50/50 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden"
      data-testid="hear-from-alumni-section"
    >
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
}
