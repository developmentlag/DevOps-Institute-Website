import { Download, CalendarCheck } from "lucide-react";
import { EMI_HOOK, FEE_STRUCTURE_WHATSAPP_URL } from "@/data/site";

const buttonClass =
  "inline-flex flex-1 items-center justify-center gap-2 rounded-lg py-3 px-3 text-center text-xs sm:text-sm font-semibold transition-colors";

export function FeeActions({ demoHref = "/free-demo-powai", testId = "fee-hook", tone = "light" }) {
  const downloadClass =
    tone === "dark"
      ? `${buttonClass} bg-white text-slate-900 hover:bg-blue-50`
      : `${buttonClass} bg-slate-900 text-white hover:bg-slate-800`;
  const demoClass =
    tone === "dark"
      ? `${buttonClass} border border-blue-300 bg-blue-700 text-white hover:bg-blue-600`
      : `${buttonClass} border border-blue-700 bg-white text-blue-800 hover:bg-blue-50`;

  return (
    <div className="mt-3 flex flex-col sm:flex-row gap-2">
      <a
        href={FEE_STRUCTURE_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`${testId}-download`}
        className={downloadClass}
      >
        <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
        Download Fee Structure & Syllabus
      </a>
      <a href={demoHref} data-testid={`${testId}-demo`} className={demoClass}>
        <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
        Book Free Demo Class
      </a>
    </div>
  );
}

export default function FeeHook({ demoHref = "/free-demo-powai", testId = "fee-hook", className = "" }) {
  return (
    <div className={className} data-testid={testId}>
      <p className="text-sm sm:text-base font-semibold text-slate-900" data-testid={`${testId}-emi`}>
        {EMI_HOOK}
      </p>
      <FeeActions demoHref={demoHref} testId={testId} />
    </div>
  );
}

export function StickyFeeBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 border-t border-slate-800 bg-slate-900 px-3 py-2.5 shadow-2xl"
      data-testid="mobile-sticky-bar"
    >
      <p className="text-center text-[11px] sm:text-sm font-semibold text-blue-50" data-testid="sticky-emi-hook">
        {EMI_HOOK}
      </p>
      <div className="mx-auto max-w-3xl">
        <FeeActions demoHref="/free-demo-powai" testId="sticky-fee" tone="dark" />
      </div>
    </div>
  );
}
