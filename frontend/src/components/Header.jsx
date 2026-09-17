import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CloudCog, Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";
import { BUSINESS_NAME, ADDRESS, PHONE, PHONE_TEL, WHATSAPP_URL, COURSES } from "@/data/site";

const NAV = [
  { to: "/", label: "Home", testId: "header-nav-home-link" },
  { to: "/about", label: "About", testId: "header-nav-about-link" },
  { to: "/courses", label: "Courses", testId: "header-nav-courses-link" },
  { to: "/faqs", label: "FAQs", testId: "header-nav-faqs-link" },
  { to: "/contact", label: "Contact Us", testId: "header-nav-contact-link" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-blue-800 text-blue-100 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
          <a
            href={PHONE_TEL}
            data-testid="header-topbar-phone-link"
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-blue-200 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-blue-200" aria-hidden="true" />
            {PHONE}
          </a>
          <p className="hidden md:inline-flex items-center gap-1.5 truncate" data-testid="header-topbar-address">
            <MapPin className="h-3.5 w-3.5 text-blue-200 shrink-0" aria-hidden="true" />
            {ADDRESS}
          </p>
          <p className="md:hidden text-blue-200">Chandivali, Powai, Mumbai</p>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" data-testid="header-logo-link" className="flex items-center gap-3 min-w-0 py-1">
              <img
                src="/logo-color.png"
                alt="DevOps Institute Powai"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain shrink-0"
              />
              <span className="leading-tight min-w-0">
                <span className="block font-heading font-extrabold text-slate-900 text-base sm:text-lg truncate">
                  DevOps Institute
                </span>
                <span className="block text-[11px] font-medium text-slate-500 truncate">
                  AWS, Azure &amp; GCP Course — Powai, Mumbai
                </span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  data-testid={item.testId}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-2 ml-2 shrink-0 flex-nowrap">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="header-whatsapp-button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={PHONE_TEL}
                  data-testid="header-call-now-button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-800 transition-colors whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>

            <button
              type="button"
              data-testid="header-mobile-menu-button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-200 bg-white" data-testid="header-mobile-menu">
            <div className="px-4 py-3 space-y-1">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}-link`}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2.5 text-sm font-medium ${
                      isActive ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Our Courses</p>
              {COURSES.map((c) => (
                <NavLink
                  key={c.slug}
                  to={`/courses/${c.slug}`}
                  data-testid={`mobile-nav-course-${c.slug}-link`}
                  className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                >
                  {c.name}
                </NavLink>
              ))}
              <div className="mt-3 flex gap-2">
                <a
                  href={PHONE_TEL}
                  data-testid="mobile-menu-call-button"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-2.5 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="mobile-menu-whatsapp-button"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
              <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
                <p className="font-semibold text-slate-900">{BUSINESS_NAME}</p>
                <p className="mt-1">{ADDRESS}</p>
                <a href={PHONE_TEL} data-testid="mobile-menu-phone-link" className="mt-1 inline-block font-semibold text-blue-700">
                  Call: {PHONE}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
