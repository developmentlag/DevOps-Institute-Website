import { Link, useParams, Navigate } from "react-router-dom";
import { Cloud, Cloudy, CloudCog, GitBranch, Container, Terminal, CheckCircle2, Target, Wrench, Users, Phone, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import EnquiryForm from "@/components/EnquiryForm";
import FaqAccordion from "@/components/FaqAccordion";
import { BUSINESS_NAME, ADDRESS, PHONE, PHONE_TEL, COURSES, buildCourseSchema, buildBreadcrumbSchema, buildFaqSchema } from "@/data/site";

const ICONS = { cloud: Cloud, cloudy: Cloudy, cloudCog: CloudCog, gitBranch: GitBranch, container: Container, terminal: Terminal };

export default function CourseDetail() {
  const { slug } = useParams();
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return <Navigate to="/courses" replace />;

  const Icon = ICONS[course.icon] || Cloud;
  const related = COURSES.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div data-testid={`course-page-${course.slug}`}>
      <Seo
        title={course.metaTitle}
        siteName={BUSINESS_NAME}
        description={course.metaDescription}
        jsonLd={[
          buildCourseSchema(course),
          buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: course.name, url: `/courses/${course.slug}` },
          ]),
          ...(course.faqs ? [buildFaqSchema(course.faqs)] : []),
        ]}
      />

      <section className="bg-gradient-to-b from-blue-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="text-xs text-slate-500 mb-5" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/courses" className="hover:text-blue-700">Courses</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">{course.name}</span>
          </nav>
          <div className="flex items-start gap-5">
            <span className="hidden sm:flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 border border-blue-500 shrink-0">
              <Icon className="h-7 w-7 text-white" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{course.tagline}</p>
              <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-[1.15]">
                {course.h1}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">{course.intro}</p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_TEL}
                  data-testid="course-call-button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 px-6 text-base font-semibold text-white shadow-md hover:bg-blue-800 transition-colors"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {PHONE}
                </a>
                <a
                  href="#course-enquiry"
                  data-testid="course-enquire-button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-3 px-6 text-base font-semibold text-slate-900 hover:border-blue-400 transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Who This Course Is For</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {course.whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex items-center gap-3">
                <Target className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Learning Outcomes</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {course.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Skills Covered</h2>
              <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-100">
                {course.skills.map((skill, i) => (
                  <div key={skill} className="flex items-center gap-4 px-5 py-3.5" data-testid={`course-skill-${i + 1}`}>
                    <span className="font-code text-xs font-semibold text-blue-600 w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-slate-700">{skill}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3">
                <Wrench className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Tools &amp; Technologies</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1.5 text-xs font-semibold text-blue-700 font-code">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="course-enquiry" className="py-16 sm:py-24 bg-slate-50" data-testid="course-enquiry-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Course Enquiry</p>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Get the {course.shortName} Syllabus, Batch Timings &amp; Fees
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Classes run at our campus in Chandivali, Powai, Mumbai — easy to reach from Saki Vihar Road, Tunga
                Village, Andheri East and Hiranandani. Send an enquiry and our counsellor will call you back, or reach
                us directly.
              </p>
              <address className="not-italic mt-8 rounded-xl bg-white border border-slate-200 p-5 text-sm text-slate-700" data-testid="course-nap">
                <p className="font-semibold text-slate-900">{BUSINESS_NAME}</p>
                <p className="mt-1">{ADDRESS}</p>
                <p className="mt-1">
                  Phone:{" "}
                  <a href={PHONE_TEL} data-testid="course-phone-link" className="font-semibold text-blue-700">
                    {PHONE}
                  </a>
                </p>
              </address>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <EnquiryForm defaultCourse={course.name} source={`course-${course.slug}`} testIdPrefix="course-enquiry" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-center">
            {course.shortName} Course FAQs
          </h2>
          <div className="mt-10">
            <FaqAccordion items={course.faqs} idPrefix={`${course.slug}-faq`} />
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900">Explore Related Courses</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/courses/${r.slug}`}
                data-testid={`related-course-${r.slug}-link`}
                className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <p className="font-heading font-bold text-slate-900">{r.name}</p>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{r.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  View course <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
