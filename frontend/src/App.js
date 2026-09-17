import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer, { MobileStickyBar } from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Contact from "@/pages/Contact";
import Faqs from "@/pages/Faqs";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
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
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <div className="h-16 md:hidden" aria-hidden="true" />
      </div>
      <MobileStickyBar />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default App;
