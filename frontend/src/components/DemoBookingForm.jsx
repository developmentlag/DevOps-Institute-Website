import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PHONE, PHONE_TEL } from "@/data/site";
import { attributionFormFields } from "@/lib/attribution";
import { trackGenerateLead } from "@/lib/analytics";
import { DEMO_SLOTS, DEMO_STATUSES, DEMO_TRACKS, DEMO_WHATSAPP_URL } from "@/data/ownerKeyPages";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

function WhatsAppBookButton() {
  return (
    <a
      href={DEMO_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="demo-whatsapp-book-button"
      className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 px-6 text-base font-semibold text-white shadow-md hover:bg-[#20bd5a] transition-colors"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      Instant Book via WhatsApp (+91 83695 18569)
    </a>
  );
}

export default function DemoBookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", track: "", status: "", slot: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    const nameTrimmed = form.name.trim();
    const phoneTrimmed = form.phone.trim();
    if (!nameTrimmed || nameTrimmed.length < 2) {
      setError("Please enter your full name.");
      return;
    }
    const phoneDigits = phoneTrimmed.replace(/\D/g, "");
    const phoneRegex = /^[+]?[0-9\s\-()]{10,20}$/;
    if (!phoneTrimmed || phoneDigits.length < 10 || !phoneRegex.test(phoneTrimmed)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!DEMO_TRACKS.includes(form.track)) {
      setError("Please select a track.");
      return;
    }
    if (!DEMO_STATUSES.includes(form.status)) {
      setError("Please select your current status.");
      return;
    }
    if (!DEMO_SLOTS.includes(form.slot)) {
      setError("Please select a preferred demo slot.");
      return;
    }

    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries`, {
        name: nameTrimmed,
        phone: phoneTrimmed,
        email: "",
        course: form.track,
        message: `Current status: ${form.status}. Preferred demo slot: ${form.slot}.`,
        source: "/free-demo-powai",
        ...attributionFormFields(),
      });
      try {
        trackGenerateLead({ formSource: "/free-demo-powai", course: form.track });
      } catch {
        /* analytics must not block a saved enquiry */
      }
      setDone(true);
      toast.success("Demo request submitted. Our counsellor will call you back shortly.");
    } catch (err) {
      const detail = err?.response?.data?.detail || err?.response?.data?.error;
      setError(typeof detail === "string" ? detail : "Something went wrong. Please call us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div data-testid="demo-booking-success" className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" aria-hidden="true" />
        <p className="mt-3 font-heading font-bold text-slate-900 text-lg">Thank you, {form.name.split(" ")[0]}!</p>
        <p className="mt-1 text-sm text-slate-600">
          Your demo request has been received. For immediate booking, call{" "}
          <a href={PHONE_TEL} className="font-semibold text-blue-700">{PHONE}</a>.
        </p>
        <WhatsAppBookButton />
      </div>
    );
  }

  return (
    <form onSubmit={submit} data-testid="demo-booking-form" className="space-y-4" noValidate>
      <div>
        <label htmlFor="demo-name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
        <Input id="demo-name" data-testid="demo-name-input" value={form.name} onChange={update("name")} required className="h-11 bg-white" />
      </div>
      <div>
        <label htmlFor="demo-phone" className="block text-sm font-medium text-slate-700 mb-1.5">Mobile / WhatsApp Number *</label>
        <Input id="demo-phone" data-testid="demo-phone-input" value={form.phone} onChange={update("phone")} type="tel" required className="h-11 bg-white" />
      </div>
      <div>
        <label htmlFor="demo-track" className="block text-sm font-medium text-slate-700 mb-1.5">Select Track *</label>
        <select id="demo-track" data-testid="demo-track-select" value={form.track} onChange={update("track")} required className={selectClass}>
          <option value="">Select a track</option>
          {DEMO_TRACKS.map((track) => (
            <option key={track} value={track}>{track}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="demo-status" className="block text-sm font-medium text-slate-700 mb-1.5">Current Status *</label>
        <select id="demo-status" data-testid="demo-status-select" value={form.status} onChange={update("status")} required className={selectClass}>
          <option value="">Select your status</option>
          {DEMO_STATUSES.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="demo-slot" className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Demo Slot *</label>
        <select id="demo-slot" data-testid="demo-slot-select" value={form.slot} onChange={update("slot")} required className={selectClass}>
          <option value="">Select a slot</option>
          {DEMO_SLOTS.map((slot) => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
      </div>
      {error ? <p data-testid="demo-form-error" className="text-sm font-medium text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={submitting}
        data-testid="demo-form-submit-button"
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 px-6 text-base font-semibold text-white shadow-md hover:bg-blue-800 transition-colors disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitting ? "Submitting…" : "Book Free Demo Class"}
      </button>
      <WhatsAppBookButton />
    </form>
  );
}
