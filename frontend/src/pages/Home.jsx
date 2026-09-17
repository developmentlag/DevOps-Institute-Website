import { Link } from "react-router-dom";
import {
  Cloud, Cloudy, CloudCog, GitBranch, Container, Terminal,
  Phone, ArrowRight, CheckCircle2, MapPin, MessageCircle, Award, Users, CalendarClock, Star,
} from "lucide-react";
import Seo from "@/components/Seo";
import EnquiryForm from "@/components/EnquiryForm";
import CampusMap from "@/components/CampusMap";
import CampusGallery from "@/components/CampusGallery";
import VideoReels from "@/components/VideoReels";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import {
  BUSINESS_NAME, ADDRESS, PHONE, PHONE_TEL, WHATSAPP_URL,
  COURSE_CARDS, WHY_CHOOSE, HOME_FAQS, NEARBY_AREAS, HERO_STATS, buildOrgSchema, buildFaqSchema,
} from "@/data/site";

const CARD_ICONS = [Cloud, Cloudy, CloudCog, GitBranch, Container, Container, Terminal, Terminal, GitBranch];

const HERO_CHIPS = [
  "100% Classroom Training",
  "AWS, Azure & GCP Hands-on Labs",
  "Weekend & Weekday Batches",
  "Dedicated Placement Support",
];

const STAT_ICONS = [Star, CalendarClock, Award, Users];

export default function Home() {
  return (
    <div data-testid="home-page">
      <Seo
        title="DevOps Course in Mumbai | Classroom DevOps Training with Placement, Powai - DevOps Institute"
        siteName={BUSINESS_NAME}
        description="Become a DevOps Engineer in 4 months. Classroom DevOps, AWS, Azure & GCP training in Powai, Chandivali, Mumbai with hands-on labs, weekend batches & placement support. Call 083695 18569."
        jsonLd={[buildOrgSchema(), buildFaqSchema(HOME_FAQS)]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white hero-grid" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Classroom Training in Powai, Mumbai
              </p>
              <h1 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Become a <span className="text-blue-700">DevOps Engineer</span> in Just 4 Months
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                100% practical <strong className="font-semibold text-slate-800">classroom DevOps training</strong> in
                Chandivali, Powai — with hands-on AWS, Azure &amp; GCP labs, weekend &amp; weekday batches, and
                dedicated <strong className="font-semibold text-slate-800">placement support</strong>.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {HERO_CHIPS.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3 max-w-lg">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={PHONE_TEL}
                    data-testid="hero-call-now-button"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3.5 px-5 text-sm sm:text-base font-semibold text-white shadow-md shadow-blue-700/20 hover:bg-blue-800 transition-colors whitespace-nowrap"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Call Now: {PHONE}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="hero-whatsapp-button"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 px-5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </div>
                <a
                  href="#enquiry"
                  data-testid="hero-enquire-now-button"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-3 px-5 text-sm sm:text-base font-semibold text-slate-900 shadow-sm hover:border-blue-600 hover:text-blue-700 transition-colors"
                >
                  Book a Free Demo Class
                  <ArrowRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Hero image with floating placement card */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl glow-blue bg-slate-100">
                <img
                  src="/campus/campus-branded-1.jpg"
                  alt="DevOps classroom training batch in progress at DevOps Institute, Chandivali, Powai, Mumbai"
                  className="w-full h-full object-cover aspect-[4/3]"
                  fetchPriority="high"
                  decoding="async"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  Live batch · Powai campus
                </span>
              </div>
              <div className="absolute -bottom-5 -left-2 sm:left-4 rounded-xl border border-slate-200 bg-white px-5 py-3.5 shadow-lg" data-testid="hero-placement-card">
                <p className="text-2xl font-extrabold text-emerald-600 leading-none font-heading">100%</p>
                <p className="mt-1 text-xs font-medium text-slate-600">Placement support after training</p>
              </div>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4" data-testid="hero-stats-strip">
            {HERO_STATS.map((s, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div key={s.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shrink-0">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-extrabold text-slate-900 leading-none">{s.value}</p>
                    <p className="mt-1 text-xs text-slate-600">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-12 sm:py-16 lg:py-20" data-testid="courses-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Our Courses
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Cloud &amp; DevOps Courses in Mumbai, Taught Hands-On
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              From an AWS course near Chandivali to a complete DevOps course in Mumbai, every program at our Powai campus
              is built around practical labs and career-focused cloud skills.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSE_CARDS.map((card, i) => {
              const Icon = CARD_ICONS[i % CARD_ICONS.length];
              return (
                <Link
                  key={card.testId}
                  to={card.to}
                  data-testid={card.testId}
                  className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                    <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{card.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                    Get Course Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CampusGallery />
      <VideoReels />
      <Testimonials />

      {/* WHY CHOOSE */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              A DevOps Training Institute in Mumbai Focused on Real Skills
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <div key={item.title} className="bg-slate-50 rounded-xl border border-slate-200 p-6" data-testid={`why-choose-card-${i + 1}`}>
                <CheckCircle2 className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARN NEAR YOU */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50" data-testid="learn-near-you-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Learn Near You
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Cloud &amp; DevOps Classes Near Chandivali, Powai &amp; Andheri East
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Searching for an "AWS Azure GCP course near me"? Our campus at Lodha Supremus on Saki Vihar Road is minutes
              from Tunga Village and Chandivali, and a short commute from Hiranandani, Powai, Saki Naka, Kanjurmarg and
              Andheri East — making quality cloud training genuinely local.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {NEARBY_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CampusMap />

      {/* ENQUIRY */}
      <section id="enquiry" className="py-12 sm:py-16 lg:py-20" data-testid="enquiry-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Student Enquiry
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Book a Free Demo Class &amp; Counselling Call
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Tell us what you want to learn — DevOps, AWS, Azure, GCP, Kubernetes or Terraform — and our counsellor
                will call you back with the syllabus, batch timings, fees and placement details.
              </p>
              <address className="not-italic mt-8 rounded-xl bg-slate-50 border border-slate-200 p-5 text-sm text-slate-700" data-testid="enquiry-nap">
                <p className="font-semibold text-slate-900">{BUSINESS_NAME}</p>
                <p className="mt-1">{ADDRESS}</p>
                <p className="mt-1">
                  Phone:{" "}
                  <a href={PHONE_TEL} data-testid="enquiry-phone-link" className="font-semibold text-blue-700">
                    {PHONE}
                  </a>
                </p>
              </address>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <EnquiryForm source="home" testIdPrefix="enquiry" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-blue-800" data-testid="call-cta-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Talk to a Cloud &amp; DevOps Career Counsellor Today
          </h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
            One call is the fastest way to get batch timings, fees, syllabus and placement details for our Powai campus.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PHONE_TEL}
              data-testid="cta-band-call-button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white py-3 px-8 text-base font-semibold text-blue-800 shadow-md hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now: {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-band-whatsapp-button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 px-8 text-base font-semibold text-white shadow-md hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20" data-testid="faq-preview-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Common Questions
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={HOME_FAQS} idPrefix="home-faq" />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              data-testid="faq-preview-view-all-link"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              View all FAQs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
