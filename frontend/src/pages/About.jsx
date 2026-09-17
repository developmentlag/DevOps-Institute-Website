import { Link } from "react-router-dom";
import { GraduationCap, FlaskConical, Users, Briefcase, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import CampusMap from "@/components/CampusMap";
import { CallNowButton, DarkCtaBand } from "@/components/CallButtons";
import { BUSINESS_NAME, ADDRESS, PHONE, buildBreadcrumbSchema, buildOrgSchema } from "@/data/site";

const PILLARS = [
  {
    icon: FlaskConical,
    title: "Lab-First Methodology",
    desc: "Around 80% of every session is hands-on practice on real cloud services, with concepts introduced exactly when you need them in the lab.",
  },
  {
    icon: Users,
    title: "Industry-Experienced Trainers",
    desc: "Classes are led by trainers who have worked with cloud infrastructure and DevOps toolchains in real industry environments.",
  },
  {
    icon: GraduationCap,
    title: "Structured Learning Paths",
    desc: "From Linux fundamentals to multi-cloud and Kubernetes, courses are sequenced so beginners and professionals both progress without gaps.",
  },
  {
    icon: Briefcase,
    title: "Career-Focused Support",
    desc: "Resume reviews, mock interviews and guidance on cloud and DevOps roles help you convert new skills into career moves in Mumbai's IT market.",
  },
];

export default function About() {
  return (
    <div data-testid="about-page">
      <Seo
        title="About DevOps Institute | Cloud & DevOps Training in Powai, Mumbai"
        siteName={BUSINESS_NAME}
        description="About DevOps Institute - AWS, Azure & GCP Course: a practical cloud and DevOps training institute at Lodha Supremus, Chandivali, Powai, Mumbai. Call 083695 18569."
        jsonLd={[
          buildOrgSchema(),
          buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-blue-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">About Us</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-[1.15]">
            About DevOps Institute — A Cloud Training Institute in Powai, Mumbai
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {BUSINESS_NAME} is a technology training institute in Chandivali, Powai, built for students and working
            professionals who want practical, career-focused cloud skills — not just certificates.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Our Mission</h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Cloud and DevOps roles reward people who can actually build, deploy and troubleshoot real infrastructure.
                Our mission is to make that level of practical training accessible locally — so a learner in Chandivali,
                Powai or Andheri East does not need to travel across Mumbai for quality cloud and DevOps classes.
              </p>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Every course at our Powai campus — AWS, Azure, GCP, DevOps, Kubernetes, Docker, Linux and Terraform — is
                taught through guided labs on real platforms, small batches and direct access to trainers.
              </p>
              <h2 className="mt-10 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Our Campus in Chandivali, Powai
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                The institute is located at Lodha Supremus on Saki Vihar Road, a well-known business hub near Tunga
                Village in Chandivali. The campus is easy to reach from Powai, Hiranandani, Saki Naka, Kanjurmarg and
                Andheri East, with classroom and lab setups designed for hands-on learning.
              </p>
              <address className="not-italic mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5 text-sm text-slate-700" data-testid="about-nap">
                <p className="font-semibold text-slate-900">{BUSINESS_NAME}</p>
                <p className="mt-1">{ADDRESS}</p>
                <p className="mt-1">Phone: {PHONE}</p>
              </address>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PILLARS.map((p, i) => (
                <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm" data-testid={`about-pillar-${i + 1}`}>
                  <p.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  <h3 className="mt-3 font-heading text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
              <img
                src="/campus/campus-team.webp"
                alt="A batch of DevOps Institute students and trainers at the Chandivali, Powai campus in Mumbai"
                loading="lazy"
                className="rounded-xl border border-slate-200 object-cover w-full h-full min-h-[220px] sm:col-span-2"
              />
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-blue-50 border border-blue-100 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">Want to see the campus and labs yourself?</h2>
              <p className="mt-2 text-sm text-slate-600">
                Drop in for a counselling session at our Chandivali, Powai campus, or explore our{" "}
                <Link to="/courses" data-testid="about-courses-link" className="font-semibold text-blue-700 inline-flex items-center gap-1">
                  full course catalog <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </p>
            </div>
            <CallNowButton testId="about-call-button" label={`Call ${PHONE}`} />
          </div>
        </div>
      </section>

      <CampusMap />
      <DarkCtaBand
        title="Start Your Cloud & DevOps Journey in Mumbai"
        subtitle="Call our Powai campus for batch timings, fees and a free counselling session on the right course for your goals."
      />
    </div>
  );
}
