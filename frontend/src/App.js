import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import SiteAnalytics from "@/components/SiteAnalytics";
import Header from "@/components/Header";
import Footer, { MobileStickyBar } from "@/components/Footer";
import PageEndMap from "@/components/PageEndMap";
import { KeyFactsSection } from "@/components/PageFacts";
import FloatingActions from "@/components/FloatingActions";
import Home from "@/pages/Home";
import { lazyPage } from "@/lib/lazyPage";
import { LOADERS } from "@/lib/pageLoaders";
import { SEO_ROUTES } from "@/data/seoRoutes";

const About = lazyPage("about", LOADERS.about);
const Courses = lazyPage("courses", LOADERS.courses);
const CourseDetail = lazyPage("courseDetail", LOADERS.courseDetail);
const Contact = lazyPage("contact", LOADERS.contact);
const Faqs = lazyPage("faqs", LOADERS.faqs);
const PrivacyPolicy = lazyPage("privacy", LOADERS.privacy);
const SeoLanding = lazyPage("seo", LOADERS.seo);
const NotFound = lazyPage("notFound", LOADERS.notFound);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {SEO_ROUTES.filter((route) => route.path !== "/404").map((route) => (
              <Route key={route.path} path={route.path} element={<SeoLanding />} />
            ))}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <KeyFactsSection />
        <PageEndMap />
        <Footer />
        <div className="h-16 md:hidden" aria-hidden="true" />
      </div>
      <MobileStickyBar />
      <FloatingActions />
      <Toaster position="top-center" richColors />
      <Analytics />
      <SiteAnalytics />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
