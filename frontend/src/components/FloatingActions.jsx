import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";

export default function FloatingActions() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-button"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-24 md:bottom-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:scale-105 hover:bg-[#20bd5a] transition-all duration-200"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
