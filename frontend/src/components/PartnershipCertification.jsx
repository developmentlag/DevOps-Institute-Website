import { GraduationCap, Award, ShieldCheck, BookOpen, CheckCircle2 } from "lucide-react";

const CERTIFICATION_CARDS = [
  {
    id: "meity",
    badgeIcon: GraduationCap,
    renderLogo: () => (
      <div className="flex flex-col items-center">
        <img
          src="/images/certifications/emblem-india.svg"
          alt="Government of India Emblem"
          className="h-12 sm:h-14 w-auto object-contain"
          loading="lazy"
          decoding="async"
        />
        <span className="text-[11px] sm:text-xs font-semibold text-slate-700 tracking-tight mt-1 text-center leading-tight">
          Ministry of Electronics &amp; IT<br />Government of India
        </span>
      </div>
    ),
    title: "Recognized by MeitY",
    tag: "Govt. Recognition",
  },
  {
    id: "nasscom",
    badgeIcon: Award,
    renderLogo: () => (
      <img
        src="/images/certifications/nasscom.svg"
        alt="NASSCOM logo"
        className="h-10 sm:h-11 max-w-[160px] object-contain"
        loading="lazy"
        decoding="async"
      />
    ),
    title: "Industry Standards",
    tag: "Learning Partner",
  },
  {
    id: "microsoft",
    badgeIcon: ShieldCheck,
    renderLogo: () => (
      <img
        src="/images/certifications/microsoft.svg"
        alt="Microsoft logo"
        className="h-9 sm:h-10 max-w-[160px] object-contain"
        loading="lazy"
        decoding="async"
      />
    ),
    title: "Microsoft Solution Collaboration",
    tag: "Learning Partner",
  },
  {
    id: "iit-patna",
    badgeIcon: BookOpen,
    renderLogo: () => (
      <img
        src="/images/certifications/iit-patna-vishlesan.png"
        alt="IIT Patna Vishlesan I-Hub Foundation logo"
        className="h-24 sm:h-28 w-auto max-w-[190px] object-contain drop-shadow-sm transition-transform hover:scale-105 duration-300"
        loading="lazy"
        decoding="async"
      />
    ),
    title: "IIT Patna Vishlesan I-Hub",
    tag: "Academic Partner",
  },
];

const CORPORATE_PARTNERS = [
  { name: "Oracle", src: "/images/partners/oracle.svg", h: "h-6 sm:h-7" },
  { name: "Google", src: "/images/partners/google.svg", h: "h-7 sm:h-8" },
  { name: "Microsoft", src: "/images/partners/microsoft.svg", h: "h-6 sm:h-7" },
  { name: "EY", src: "/images/partners/ey.png", h: "h-8 sm:h-9" },
  { name: "Quality Kiosk", src: "/images/partners/qualitykiosk.svg", h: "h-7 sm:h-8" },
  { name: "Deloitte", src: "/images/partners/deloitte.svg", h: "h-6 sm:h-7" },
  { name: "Sony", src: "/images/partners/sony.svg", h: "h-5 sm:h-6" },
  { name: "Amazon", src: "/images/partners/amazon.svg", h: "h-7 sm:h-8" },
  { name: "IBM", src: "/images/partners/ibm.svg", h: "h-7 sm:h-8" },
  { name: "BNP Paribas", src: "/images/companies/bnp-paribas.png", h: "h-7 sm:h-8" },
  { name: "TCS", src: "/images/partners/tcs.png", h: "h-7 sm:h-8" },
  { name: "Zoom", src: "/images/companies/zoom.png", h: "h-6 sm:h-7" },
  { name: "Cubosquare", src: "/images/companies/cubosquare.png", h: "h-6 sm:h-7" },
  { name: "Dhan", src: "/images/companies/dhan.png", h: "h-8 sm:h-9" },
  { name: "Engagely.ai", src: "/images/partners/engagely.png", h: "h-6 sm:h-7" },
  { name: "Dept", src: "/images/partners/dept.png", h: "h-7 sm:h-8" },
  { name: "Techpaylogic", src: "/images/partners/techpaylogic.png", h: "h-8 sm:h-9" },
];

export default function PartnershipCertification() {
  // Duplicated list for seamless infinite marquee loop
  const marqueeList = [...CORPORATE_PARTNERS, ...CORPORATE_PARTNERS];

  return (
    <section
      className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white w-screen relative left-1/2 -translate-x-1/2 overflow-hidden border-t border-slate-100"
      data-testid="partnership-certification-section"
    >
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#173b7a]">
            Stand out with our <span className="text-[#1d4ed8]">Reputed Partnership Certification</span>
          </h2>
        </div>

        {/* 4 Accreditation Cards */}
        <div className="mt-10 sm:mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-4">
          {CERTIFICATION_CARDS.map((card) => {
            const BadgeIcon = card.badgeIcon;
            return (
              <div
                key={card.id}
                className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_24px_rgba(19,40,78,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col items-center justify-between text-center min-h-[240px] sm:min-h-[260px]"
                data-testid={`cert-card-${card.id}`}
              >
                {/* Floating Corner Badge Icon */}
                <span className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow-md border-2 border-white ring-2 ring-sky-100">
                  <BadgeIcon className="h-5 w-5" aria-hidden="true" />
                </span>

                {/* Logo Area */}
                <div className="h-24 sm:h-28 w-full flex items-center justify-center px-1">
                  {card.renderLogo()}
                </div>

                {/* Title & Tag */}
                <div className="mt-3 flex flex-col items-center gap-2 w-full">
                  <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {card.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 shrink-0" aria-hidden="true" />
                    {card.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Hiring Partners Strip - Infinite Marquee in full brand color */}
        <div className="mt-14 sm:mt-18 text-center w-full">
          <p className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-slate-700">
            DevOps &amp; Cloud Talent at Fortune 500 Companies
          </p>

          <div className="relative mt-6 sm:mt-8 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0,#000_5%,#000_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_5%,#000_95%,transparent_100%)]">
            <div className="animate-rolling flex items-center gap-8 sm:gap-12 lg:gap-14 py-4">
              {marqueeList.map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 transition-transform hover:scale-110 duration-200 px-1"
                  title={partner.name}
                >
                  <img
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    className={`${partner.h} w-auto max-w-[130px] sm:max-w-[160px] object-contain`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
