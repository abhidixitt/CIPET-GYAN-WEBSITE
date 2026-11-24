import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMeta = {
  "/": ["CIPET GYAN | Plastics & Polymer Knowledge, Careers and Support", "Independent plastics and polymer platform for technical education, career support, recruitment assistance and industrial consultancy."],
  "/about": ["About CIPET GYAN | Independent Plastics & Polymer Platform", "Learn about CIPET GYAN, an independent technical education, career support and industry guidance platform."],
  "/services": ["Our Services | CIPET GYAN", "Explore technical education, recruitment support, career guidance, laboratory support and consultancy services."],
  "/careers": ["Careers & Jobs | CIPET GYAN", "Explore plastics and polymer job updates, candidate support and recruitment coordination."],
  "/education": ["Education & Learning | CIPET GYAN", "Technical learning support and study resources for plastics and polymer students."],
  "/contact": ["Contact CIPET GYAN | Enquiries & Support", "Contact CIPET GYAN about technical services, career support, recruitment and education."],
  "/disclaimer": ["Disclaimer | CIPET GYAN", "Independence, service scope and outcome disclaimers for CIPET GYAN."],
  "/terms-and-conditions": ["Terms and Conditions | CIPET GYAN", "Terms for using the CIPET GYAN website, learning app, services and enquiry forms."],
  "/privacy-policy": ["Privacy Policy | CIPET GYAN", "How CIPET GYAN handles account, learning, payment and website enquiry information."],
  "/refund-policy": ["Refund Policy | CIPET GYAN", "Refund information for CIPET GYAN digital learning content and purchases."],
  "/delete-account": ["Account and Data Deletion | CIPET GYAN", "How to request deletion of a CIPET GYAN account and associated personal data."],
};

const socialImage = "https://cipetgyan.me/cipet-gyan-logo.jpeg";

const RouteMetadata = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const canonicalUrl = `https://cipetgyan.me${normalizedPath === "/" ? "/" : `${normalizedPath}/`}`;
    const [title, description] = pageMeta[normalizedPath] || ["Page not found | CIPET GYAN", "This CIPET GYAN page could not be found."];
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute("href", canonicalUrl);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", socialImage);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute("content", socialImage);
  }, [pathname]);
  return null;
};
export default RouteMetadata;
