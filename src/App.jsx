import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import AccountDeletion from "./pages/AccountDeletion";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import RouteMetadata from "./components/RouteMetadata";
import "./App.css";

const RouteScrollManager = () => {
  const location = useLocation();
  useEffect(() => {
    const hash = decodeURIComponent(location.hash.slice(1));
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
  return null;
};

export const SiteApp = () => {
  return (
    <>
      <RouteMetadata />
      <RouteScrollManager />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/delete-account" element={<AccountDeletion />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => <Router><SiteApp /></Router>;

export default App;
