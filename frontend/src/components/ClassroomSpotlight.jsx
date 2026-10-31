import { MapPin, Star, CalendarClock, Award, Users } from "lucide-react";
import GbpPicture from "@/components/GbpPicture";
import { GBP_HERO } from "@/data/gbpPhotos";
import { HERO_STATS } from "@/data/site";

const STAT_ICONS = [Star, CalendarClock, Award, Users];

export default function ClassroomSpotlight() {
  return (
    <section className="mt-6" data-testid="classroom-spotlight" aria-label="Powai classroom and Google Business Profile">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
        <figure className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl glow-blue bg-slate-100">
          <GbpPicture
            photo={GBP_HERO}
            priority
            sizes="(min-width: 1024px) 640px, 100vw"
            className="h-full w-full object-cover aspect-[4/5]"
          />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Live batch · Powai campus
          </span>
          <div className="absolute bottom-4 left-4 rounded-xl border border-slate-200 bg-white px-5 py-3.5 shadow-lg" data-testid="hero-placement-card">
            <p className="text-2xl font-extrabold text-emerald-600 leading-none font-heading">100%</p>
            <p className="mt-1 text-xs font-medium text-slate-600">Placement support after training</p>
          </div>
        </figure>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 content-start" data-testid="hero-stats-strip">
          {HERO_STATS.map((stat, index) => {
            const Icon = STAT_ICONS[index % STAT_ICONS.length];
            return (
              <div key={stat.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shrink-0">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-lg font-extrabold text-slate-900 leading-none">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
