import { Link } from "react-router-dom";
import { CloudCog, Phone, MapPin, Navigation, Instagram, MessageCircle } from "lucide-react";
import { BUSINESS_NAME, ADDRESS, PHONE, PHONE_TEL, MAP_DIRECTIONS_URL, COURSES, INSTAGRAM_URL, WHATSAPP_URL } from "@/data/site";
import { AREA_ROUTES, GUIDE_ROUTES } from "@/data/seoRoutes";

export const MobileStickyBar = () => (
  <div
    className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 p-3 flex gap-3 shadow-2xl"
    data-testid="mobile-sticky-bar"
  >
    <a
      href={PHONE_TEL}
      data-testid="mobile-sticky-call-button"
      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-sm font-semibold text-white"
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call Now
    </a>
    <Link
      to="/contact"
      data-testid="mobile-sticky-enquire-button"
      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800 py-3 text-sm font-semibold text-white"
    >
      Enquire Now
    </Link>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo-white.png"
              alt="DevOps Institute Powai"
              width="600"
              height="600"
              className="h-16 sm:h-20 w-auto object-contain shrink-0"
            />
            <span className="font-heading font-extrabold text-white text-lg">DevOps Institute</span>
          </div>
          <address className="not-italic mt-5 text-sm leading-relaxed" data-testid="footer-nap">
            <p className="font-semibold text-white">{BUSINESS_NAME}</p>
            <p className="mt-2">{ADDRESS}</p>
            <p className="mt-2">
              Phone:{" "}
              <a href={PHONE_TEL} data-testid="footer-phone-link" className="text-blue-300 font-semibold hover:text-orange-300">
                {PHONE}
              </a>
            </p>
          </address>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram-link"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:border-sky-400 transition-colors"
          >
            <Instagram className="h-4 w-4 text-sky-400" aria-hidden="true" />
            Follow us on Instagram
          </a>
        </div>

        <nav aria-label="Course links">
          <p className="font-heading font-bold text-white text-sm uppercase tracking-wider">Courses</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {COURSES.map((c) => (
              <li key={c.slug}>
                <Link to={`/courses/${c.slug}`} data-testid={`footer-course-${c.slug}-link`} className="hover:text-sky-400 transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <p className="font-heading font-bold text-white text-sm uppercase tracking-wider">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" data-testid="footer-home-link" className="hover:text-sky-400 transition-colors">Home</Link></li>
            <li><Link to="/about" data-testid="footer-about-link" className="hover:text-sky-400 transition-colors">About DevOps Institute</Link></li>
            <li><Link to="/courses" data-testid="footer-courses-link" className="hover:text-sky-400 transition-colors">All Courses</Link></li>
            <li><Link to="/faqs" data-testid="footer-faqs-link" className="hover:text-sky-400 transition-colors">FAQs</Link></li>
            <li><Link to="/trainers" data-testid="footer-trainers-link" className="hover:text-sky-400 transition-colors">Trainers</Link></li>
            <li><Link to="/contact" data-testid="footer-contact-link" className="hover:text-sky-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy-policy" data-testid="footer-privacy-link" className="hover:text-sky-400 transition-colors">Privacy Policy</Link></li>
            <li>
              <a
                href="https://devopsinstitutemumbai.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-thane-navi-mumbai-link"
                className="hover:text-sky-400 transition-colors"
              >
                Thane &amp; Navi Mumbai campus
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="font-heading font-bold text-white text-sm uppercase tracking-wider">Visit Our Campus</p>
          <address className="not-italic mt-4 text-sm leading-relaxed" data-testid="footer-visit-nap">
            <p className="font-semibold text-white">{BUSINESS_NAME}</p>
            <p className="mt-2 text-slate-300">{ADDRESS}</p>
            <p className="mt-2 text-slate-300">
              Phone:{" "}
              <a href={PHONE_TEL} data-testid="footer-visit-phone-link" className="font-semibold text-blue-300 hover:text-blue-200">
                {PHONE}
              </a>
            </p>
          </address>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-directions-button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              <Navigation className="h-4 w-4 text-blue-300" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-button"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
          <a
            href={PHONE_TEL}
            data-testid="footer-call-button"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {PHONE}
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
          <nav aria-label="Course guides">
            <p className="font-heading font-bold text-white text-sm uppercase tracking-wider">Courses</p>
            <ul className="mt-4 space-y-2">
              <li><Link to="/devops-course" className="hover:text-sky-400">DevOps course</Link></li>
              <li><Link to="/devops-course-in-mumbai-with-placement" className="hover:text-sky-400">DevOps course in Mumbai with placement</Link></li>
              <li><Link to="/cloud-computing-course" className="hover:text-sky-400">Cloud computing course</Link></li>
              <li><Link to="/cloud-computing-course-with-placement" className="hover:text-sky-400">Cloud computing course with placement</Link></li>
              {COURSES.map((course) => (
                <li key={`guide-${course.slug}`}>
                  <Link to={`/courses/${course.slug}`} className="hover:text-sky-400">{course.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="DevOps course near you">
            <p className="font-heading font-bold text-white text-sm uppercase tracking-wider">DevOps course near you</p>
            <ul className="mt-4 space-y-2">
              {AREA_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className="hover:text-sky-400">{route.h1}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Guides">
            <p className="font-heading font-bold text-white text-sm uppercase tracking-wider">Guides</p>
            <ul className="mt-4 space-y-2">
              {GUIDE_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className="hover:text-sky-400">{route.h1}</Link>
                </li>
              ))}
              <li>
                <a href="https://devopsinstitutemumbai.co.in/" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                  Thane &amp; Navi Mumbai campus
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>AWS, Azure, GCP &amp; DevOps training in Chandivali, Powai, Mumbai.</p>
        </div>
      </div>
    </footer>
  );
}
