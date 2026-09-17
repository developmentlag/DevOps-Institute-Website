import { Link } from "react-router-dom";
import { Cloud, Cloudy, CloudCog, GitBranch, Container, Terminal, ArrowRight, Clock, MapPin } from "lucide-react";
import Seo from "@/components/Seo";
import { DarkCtaBand } from "@/components/CallButtons";
import { BUSINESS_NAME, COURSES, buildCourseCatalogSchema, buildBreadcrumbSchema } from "@/data/site";

const ICONS = { cloud: Cloud, cloudy: Cloudy, cloudCog: CloudCog, gitBranch: GitBranch, container: Container, terminal: Terminal };

export default function Courses() {
  return (
    <div data-testid="courses-page">
      <Seo
        title="Cloud & DevOps Courses in Mumbai | AWS, Azure, GCP, Kubernetes - DevOps Institute"
        siteName={BUSINESS_NAME}
        description="Explore practical cloud courses in Mumbai: AWS, Azure, GCP, DevOps, Kubernetes, Docker, Linux & Terraform. Hands-on training at our Chandivali, Powai campus. Call 083695 18569."
        jsonLd={[
          buildCourseCatalogSchema(),
          buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-blue-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Course Catalog</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-[1.15]">
            Cloud &amp; DevOps Courses in Mumbai
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Every course at our Chandivali, Powai campus is taught hands-on, with labs on real cloud platforms. Choose a
            single cloud or build a complete multi-cloud and DevOps skill set.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COURSES.map((course) => {
              const Icon = ICONS[course.icon] || Cloud;
              return (
                <article
                  key={course.slug}
                  data-testid={`courses-page-card-${course.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">{course.name}</h2>
                      <p className="text-xs font-medium text-slate-500">{course.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">{course.cardDesc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.skills.slice(0, 4).map((s) => (
                      <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {s.split(":")[0]}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                      Chandivali, Powai campus
                    </span>
                    <Link
                      to={`/courses/${course.slug}`}
                      data-testid={`courses-page-details-${course.slug}-link`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Get Course Details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 p-8">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-blue-600 shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="font-heading text-xl font-bold text-slate-900">Flexible Batches for Students &amp; Working Professionals</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Weekday and weekend batch options are available across courses, so college students and working
                  professionals from Chandivali, Powai, Andheri East and across Mumbai can attend comfortably. Call us
                  for the current batch schedule — or combine courses into a multi-cloud learning path with our
                  counsellor's guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DarkCtaBand
        title="Not Sure Which Course Fits Your Career Goals?"
        subtitle="Call our counsellors at the Powai campus — we will map your background to the right AWS, Azure, GCP or DevOps learning path."
      />
    </div>
  );
}
