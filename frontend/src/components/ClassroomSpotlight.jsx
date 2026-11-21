import { MapPin, Star, CalendarClock, Award, Users } from "lucide-react";
import GbpPicture from "@/components/GbpPicture";
import { GBP_HERO } from "@/data/gbpPhotos";
import { HERO_STATS } from "@/data/site";

const STAT_ICONS = [Star, CalendarClock, Award, Users];

export function ClassroomPhoto({ className = "" }) {
  return (
    <figure className={`relative w-full h-full min-h-[380px] overflow-hidden rounded-2xl border border-slate-200/90 shadow-xl glow-blue bg-slate-100 ${className}`} data-testid="classroom-spotlight">
      <GbpPicture
        photo={GBP_HERO}
        priority
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-full w-full"
      />
      <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-xs px-3.5 py-1.5 text-xs font-bold text-blue-700 shadow-sm border border-slate-100">
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        Live batch · Powai campus
      </span>
      <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-slate-100 bg-white/95 backdrop-blur-xs px-5 py-3.5 shadow-lg" data-testid="hero-placement-card">
        <p className="text-2xl font-extrabold text-emerald-600 leading-none font-heading">100%</p>
        <p className="mt-1 text-xs font-medium text-slate-600">Placement support after training</p>
      </div>
    </figure>
  );
}

export function HighlightCards({ className = "" }) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 ${className}`} data-testid="hero-stats-strip">
      {HERO_STATS.map((stat, index) => {
        const Icon = STAT_ICONS[index % STAT_ICONS.length];
        return (
          <div
            key={stat.label}
            className="flex items-center gap-3.5 rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all"
          >
            <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 shrink-0">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
