import Seo from "@/components/Seo";
import { BUSINESS_NAME, ADDRESS, PHONE, PHONE_TEL } from "@/data/site";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you submit an enquiry form on this website, we collect your name, phone number, and optionally your email address, course of interest and message. We also collect standard, non-identifying technical information such as browser type and pages visited to help us improve the website.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information you provide only to respond to your enquiry, share course details, batch timings and fee information, and to contact you about the courses you have expressed interest in. We do not sell, rent or share your personal information with third parties for their marketing purposes.",
  },
  {
    title: "3. Data Storage & Security",
    body: "Enquiry details are stored securely and accessed only by authorised team members who need them to respond to you. We retain enquiry information only for as long as needed to handle your request and any follow-up communication.",
  },
  {
    title: "4. Third-Party Services",
    body: "This website embeds Google Maps to help you locate our campus. When you interact with the map, Google may collect information as described in Google's own privacy policy. Our click-to-call links simply open your device's dialler and do not transmit data to us.",
  },
  {
    title: "5. Your Choices & Rights",
    body: "You may ask us at any time to correct or delete the personal information you have shared with us. To do so, contact us using the details below and we will act on your request promptly.",
  },
  {
    title: "6. Changes to This Policy",
    body: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div data-testid="privacy-policy-page">
      <Seo
        title="Privacy Policy | DevOps Institute - AWS, Azure & GCP Course, Mumbai"
        siteName={BUSINESS_NAME}
        description="Privacy policy of DevOps Institute - AWS, Azure & GCP Course, Chandivali, Powai, Mumbai. How we collect, use and protect your enquiry information."
      />

      <section className="bg-gradient-to-b from-blue-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Legal</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base text-slate-600 max-w-3xl">
            Last updated: July 2026. This policy explains how {BUSINESS_NAME} handles the information you share with us.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900">{s.title}</h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900">7. Contact Us</h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                For any questions about this privacy policy or your personal information, contact us at:
              </p>
              <address className="not-italic mt-4 rounded-xl bg-slate-50 border border-slate-200 p-5 text-sm text-slate-700" data-testid="privacy-nap">
                <p className="font-semibold text-slate-900">{BUSINESS_NAME}</p>
                <p className="mt-1">{ADDRESS}</p>
                <p className="mt-1">
                  Phone:{" "}
                  <a href={PHONE_TEL} data-testid="privacy-phone-link" className="font-semibold text-blue-700">
                    {PHONE}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
