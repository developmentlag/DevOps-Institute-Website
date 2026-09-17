import Seo from "@/components/Seo";
import FaqAccordion from "@/components/FaqAccordion";
import { CallNowButton, DarkCtaBand } from "@/components/CallButtons";
import { BUSINESS_NAME, PHONE, ALL_FAQS, buildFaqSchema, buildBreadcrumbSchema } from "@/data/site";

export default function Faqs() {
  return (
    <div data-testid="faqs-page">
      <Seo
        title="FAQs | DevOps Institute - AWS, Azure & GCP Course, Powai, Mumbai"
        siteName={BUSINESS_NAME}
        description="Frequently asked questions about DevOps Institute in Chandivali, Powai, Mumbai: location, AWS/Azure/GCP/DevOps courses, batches, tools covered and how to visit. Call 083695 18569."
        jsonLd={[
          buildFaqSchema(ALL_FAQS),
          buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQs", url: "/faqs" },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-blue-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Help Centre</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-[1.15]">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Answers about our courses, campus location in Chandivali, Powai, batch options and how to get started with
            cloud and DevOps training in Mumbai.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={ALL_FAQS} idPrefix="faqs" />

          <div className="mt-12 rounded-2xl bg-blue-50 border border-blue-100 p-8 text-center" data-testid="faqs-contact-card">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">Still Have a Question?</h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
              Our counsellors at the Powai campus can help with syllabus details, fees, batch schedules and choosing the
              right course for your background.
            </p>
            <div className="mt-5 flex justify-center">
              <CallNowButton testId="faqs-call-button" label={`Call ${PHONE}`} />
            </div>
          </div>
        </div>
      </section>

      <DarkCtaBand
        title="Ready to Build Practical Cloud & DevOps Skills?"
        subtitle="Join learners from Chandivali, Powai, Andheri East and across Mumbai at our hands-on training campus."
      />
    </div>
  );
}
