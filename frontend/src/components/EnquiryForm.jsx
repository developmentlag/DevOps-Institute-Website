import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CheckCircle2, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PHONE, PHONE_TEL, COURSES } from "@/data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function EnquiryForm({ defaultCourse = "", source = "website", testIdPrefix = "enquiry" }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: defaultCourse, message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    const nameTrimmed = form.name.trim();
    const phoneTrimmed = form.phone.trim();
    const emailTrimmed = form.email.trim();

    // 1. Name validation (Required, at least 2 chars)
    if (!nameTrimmed || nameTrimmed.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    // 2. Phone validation (Required, at least 10 digits, valid phone characters)
    const phoneDigits = phoneTrimmed.replace(/\D/g, "");
    const phoneRegex = /^[+]?[0-9\s\-()]{10,20}$/;
    if (!phoneTrimmed || phoneDigits.length < 10 || !phoneRegex.test(phoneTrimmed)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // 3. Email validation (Valid format if provided)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailTrimmed && !emailRegex.test(emailTrimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries`, {
        name: nameTrimmed,
        phone: phoneTrimmed,
        email: emailTrimmed,
        course: form.course || "General Enquiry",
        message: form.message.trim(),
        source,
      });
      setDone(true);
      toast.success("Enquiry submitted. Our counsellor will call you back shortly.");
    } catch (err) {
      const detail = err?.response?.data?.detail || err?.response?.data?.error;
      setError(typeof detail === "string" ? detail : "Something went wrong. Please call us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div
        data-testid={`${testIdPrefix}-form-success`}
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" aria-hidden="true" />
        <p className="mt-3 font-heading font-bold text-slate-900 text-lg">Thank you, {form.name.split(" ")[0]}!</p>
        <p className="mt-1 text-sm text-slate-600">
          Your enquiry has been received. Our counsellor will call you back shortly. For immediate assistance, call{" "}
          <a href={PHONE_TEL} data-testid={`${testIdPrefix}-success-call-link`} className="font-semibold text-blue-700">
            {PHONE}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} data-testid={`${testIdPrefix}-form`} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${testIdPrefix}-name`} className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name *
          </label>
          <Input
            id={`${testIdPrefix}-name`}
            data-testid={`${testIdPrefix}-name-input`}
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            required
            className="h-11 bg-white"
          />
        </div>
        <div>
          <label htmlFor={`${testIdPrefix}-phone`} className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone Number *
          </label>
          <Input
            id={`${testIdPrefix}-phone`}
            data-testid={`${testIdPrefix}-phone-input`}
            value={form.phone}
            onChange={update("phone")}
            placeholder="e.g. 98330 12345"
            type="tel"
            required
            className="h-11 bg-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${testIdPrefix}-email`} className="block text-sm font-medium text-slate-700 mb-1.5">
            Email (optional)
          </label>
          <Input
            id={`${testIdPrefix}-email`}
            data-testid={`${testIdPrefix}-email-input`}
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            type="email"
            className="h-11 bg-white"
          />
        </div>
        <div>
          <label htmlFor={`${testIdPrefix}-course`} className="block text-sm font-medium text-slate-700 mb-1.5">
            Course of Interest
          </label>
          <select
            id={`${testIdPrefix}-course`}
            data-testid={`${testIdPrefix}-course-select`}
            value={form.course}
            onChange={update("course")}
            className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Select a course</option>
            {COURSES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="General Enquiry">Not sure yet — need guidance</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor={`${testIdPrefix}-message`} className="block text-sm font-medium text-slate-700 mb-1.5">
          Message (optional)
        </label>
        <Textarea
          id={`${testIdPrefix}-message`}
          data-testid={`${testIdPrefix}-message-input`}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your background or ask about batch timings, fees, syllabus…"
          rows={4}
          className="bg-white"
        />
      </div>
      {error && (
        <p data-testid={`${testIdPrefix}-form-error`} className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        data-testid={`${testIdPrefix}-form-submit-button`}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 px-6 text-base font-semibold text-white shadow-md hover:bg-blue-800 transition-colors disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitting ? "Submitting…" : "Request a Callback"}
      </button>
      <p className="text-center text-sm text-slate-500">
        Prefer to talk now?{" "}
        <a href={PHONE_TEL} data-testid={`${testIdPrefix}-form-call-link`} className="inline-flex items-center gap-1 font-semibold text-slate-900">
          <Phone className="h-3.5 w-3.5 text-blue-700" aria-hidden="true" />
          Call {PHONE}
        </a>
      </p>
    </form>
  );
}
