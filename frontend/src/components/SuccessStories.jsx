import { ALUMNI_SUCCESS_STORIES } from "@/data/site";

function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#0a66c2"
      aria-hidden="true"
      style={{ width: "22px", height: "22px", minWidth: "22px", minHeight: "22px" }}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function AlumniCard({ alumnus, index }) {
  return (
    <div
      role="article"
      className="bg-white rounded-2xl sm:rounded-3xl border border-[#e3e8f0] shadow-[0_8px_24px_rgba(19,40,78,0.09)] hover:shadow-xl p-5 sm:p-6 flex flex-col items-center justify-between text-center transition-all w-[235px] sm:w-[255px] shrink-0 h-[280px] sm:h-[295px]"
      data-testid={`alumni-card-${index}`}
    >
      <img
        src={alumnus.photo}
        alt={alumnus.name}
        loading="lazy"
        decoding="async"
        className="w-20 h-20 sm:w-[84px] sm:h-[84px] rounded-full object-cover border-3 border-[#c9d6ee] shadow-sm mx-auto shrink-0"
      />
      <div className="w-full mt-2.5">
        <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg truncate">
          {alumnus.name}
        </h3>
        <p className="text-xs sm:text-sm text-[#566579] mt-0.5 truncate font-medium">
          {alumnus.role}
        </p>
      </div>

      <div className="h-10 flex items-center justify-center my-auto w-full px-2">
        {alumnus.logo ? (
          <img
            src={alumnus.logo}
            alt={`${alumnus.company || alumnus.name} logo`}
            loading="lazy"
            decoding="async"
            className="max-h-8 sm:max-h-9 max-w-[125px] object-contain"
          />
        ) : (
          <span className="text-sm font-semibold text-slate-700">
            {alumnus.company}
          </span>
        )}
      </div>

      <div className="mt-1">
        {alumnus.linkedin ? (
          <a
            href={alumnus.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${alumnus.name} on LinkedIn`}
            className="inline-flex items-center justify-center text-[#0a66c2] hover:opacity-80 transition-transform hover:scale-110 p-1"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        ) : (
          <div className="h-7" />
        )}
      </div>
    </div>
  );
}

export default function SuccessStories() {
  // Double the list so it loops infinitely with zero seams
  const rollingList = [...ALUMNI_SUCCESS_STORIES, ...ALUMNI_SUCCESS_STORIES];

  const content = (
    <div className="relative w-full">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#173b7a]">
          Our Success Stories
        </h2>
      </div>

      {/* Infinite Rolling Marquee with edge gradient fade */}
      <div className="relative mt-8 sm:mt-10 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0,#000_5%,#000_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_5%,#000_95%,transparent_100%)]">
        <div className="animate-rolling flex gap-5 py-4">
          {rollingList.map((alumnus, idx) => (
            <AlumniCard
              key={`${alumnus.name}-${idx}`}
              alumnus={alumnus}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="py-12 sm:py-16 bg-gradient-to-b from-blue-50/40 via-white to-white w-screen relative left-1/2 -translate-x-1/2 overflow-hidden"
      data-testid="success-stories-section"
    >
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
}
