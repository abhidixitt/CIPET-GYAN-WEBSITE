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
};

const RouteMetadata = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || ["CIPET GYAN | Information", "Independent technical education and career support for plastics and polymer." ];
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute("href", `https://cipetgyan.me${pathname === "/" ? "/" : pathname}`);
  }, [pathname]);
  return null;
};
export default RouteMetadata;
