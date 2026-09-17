import { Phone, MapPin, Navigation, Clock, Train, Bus } from "lucide-react";
import Seo from "@/components/Seo";
import EnquiryForm from "@/components/EnquiryForm";
import { BUSINESS_NAME, ADDRESS, PHONE, PHONE_TEL, MAP_EMBED_URL, MAP_DIRECTIONS_URL, buildBreadcrumbSchema, buildOrgSchema } from "@/data/site";

export default function Contact() {
  return (
    <div data-testid="contact-page">
      <Seo
        title="Contact Us | DevOps Institute - AWS, Azure & GCP Course, Chandivali, Powai"
        siteName={BUSINESS_NAME}
        description="Contact DevOps Institute at Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village, Chandivali, Powai, Mumbai 400072. Call 083695 18569 for course enquiries and campus directions."
        jsonLd={[
          buildOrgSchema(),
          buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact Us", url: "/contact" },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-blue-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Contact Us</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-[1.15]">
            Contact DevOps Institute in Chandivali, Powai
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Questions about an AWS course in Mumbai, Azure training in Powai, or our DevOps programs? Call us, send an
            enquiry, or visit the campus — we are happy to help you plan your cloud career.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <address className="not-italic rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" data-testid="contact-nap">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-slate-900">{BUSINESS_NAME}</p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 border border-orange-100 shrink-0">
                    <Phone className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-slate-900">Call Us</p>
                    <a href={PHONE_TEL} data-testid="contact-phone-link" className="mt-1 inline-block text-lg font-semibold text-blue-700">
                      {PHONE}
                    </a>
                  </div>
                </div>
              </address>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-slate-900">How to Reach the Campus</h2>
                <ul className="mt-4 space-y-4 text-sm text-slate-600 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <Train className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-slate-800">By Metro:</strong> Saki Naka and Marol Naka metro stations (Line 1) are the closest stops; the campus is a short auto ride from either.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bus className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-slate-800">By Road:</strong> We are on Saki Vihar Road near Tunga Village, Chandivali — directly connected to Powai, Andheri East and the LBS Marg corridor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-slate-800">Campus Visits:</strong> Walk in during working hours or call ahead and we will keep a counsellor ready for you.</span>
                  </li>
                </ul>
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-get-directions-button"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  <Navigation className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  Get Directions on Google Maps
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm min-h-[280px]">
                <iframe
                  title={`Map showing ${BUSINESS_NAME}, ${ADDRESS}`}
                  src={MAP_EMBED_URL}
                  className="w-full h-full min-h-[280px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="contact-google-map"
                />
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm sticky top-32">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900">Send Us an Enquiry</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill in the form and our counsellor will call you back with course details, batch timings and fees.
                </p>
                <div className="mt-6">
                  <EnquiryForm source="contact" testIdPrefix="contact-enquiry" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
