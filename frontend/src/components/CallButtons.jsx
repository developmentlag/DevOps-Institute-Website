import { Link } from "react-router-dom";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "@/data/site";

export const CallNowButton = ({ testId = "call-now-button", label, className = "" }) => (
  <a
    href={PHONE_TEL}
    data-testid={testId}
    className={`inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 px-6 text-base font-semibold text-white shadow-md hover:bg-blue-800 transition-colors ${className}`}
  >
    <Phone className="h-4 w-4" aria-hidden="true" />
    {label || `Call Now: ${PHONE}`}
  </a>
);

export const EnquireNowButton = ({ testId = "enquire-now-button", to = "/contact", label = "Enquire Now", className = "" }) => (
  <Link
    to={to}
    data-testid={testId}
    className={`inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-3 px-6 text-base font-semibold text-slate-900 shadow-sm hover:border-slate-900 transition-colors ${className}`}
  >
    {label}
    <ArrowRight className="h-4 w-4" aria-hidden="true" />
  </Link>
);

export const DarkCtaBand = ({ title, subtitle }) => (
  <section className="bg-blue-800" data-testid="call-cta-band">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
      <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">{title}</h2>
      <p className="mt-3 text-blue-100 max-w-2xl mx-auto">{subtitle}</p>
      <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={PHONE_TEL}
          data-testid="cta-band-call-button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white py-3 px-6 sm:px-8 text-base font-semibold text-blue-800 shadow-md hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          Call Now: {PHONE}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-band-whatsapp-button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 px-6 sm:px-8 text-base font-semibold text-white shadow-md hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);
