import { Phone, ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "@/data/site";

const CHIPS = [
  "100% Classroom Training",
  "AWS, Azure & GCP Hands-on Labs",
  "Weekend & Weekday Batches",
  "Dedicated Placement Support",
];

export default function PracticalTrainingCta({
  demoHref = "#enquiry",
  testIdPrefix = "hero",
}) {
  return (
    <div className="mt-6 max-w-3xl" data-testid={`${testIdPrefix}-practical-training`}>
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
        100% practical <strong className="font-semibold text-slate-800">classroom DevOps training</strong> in
        Chandivali, Powai — with hands-on AWS, Azure &amp; GCP labs, weekend &amp; weekday batches, and
        dedicated <strong className="font-semibold text-slate-800">placement support</strong>.
      </p>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {CHIPS.map((chip) => (
          <li key={chip} className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
            {chip}
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-3 max-w-lg">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={PHONE_TEL}
            data-testid={`${testIdPrefix}-call-now-button`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3.5 px-5 text-sm sm:text-base font-semibold text-white shadow-md shadow-blue-700/20 hover:bg-blue-800 transition-colors whitespace-nowrap"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            Call Now: {PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`${testIdPrefix}-whatsapp-button`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 px-5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
        <a
          href={demoHref}
          data-testid={`${testIdPrefix}-enquire-now-button`}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-3 px-5 text-sm sm:text-base font-semibold text-slate-900 shadow-sm hover:border-blue-600 hover:text-blue-700 transition-colors"
        >
          Book a Free Demo Class
          <ArrowRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
