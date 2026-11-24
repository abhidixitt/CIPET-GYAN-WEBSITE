import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve("dist");
const logoUrl = "https://cipetgyan.me/cipet-gyan-logo.jpeg";
const routes = [
  ["/", "CIPET GYAN | Plastics & Polymer Knowledge, Careers and Support", "Independent plastics and polymer platform for technical education, career support, recruitment assistance and industrial consultancy."],
  ["/about", "About CIPET GYAN | Independent Plastics & Polymer Platform", "Learn about CIPET GYAN, an independent technical education, career support and industry guidance platform."],
  ["/services", "Our Services | CIPET GYAN", "Explore technical education, recruitment support, career guidance, laboratory support and consultancy services."],
  ["/careers", "Careers & Jobs | CIPET GYAN", "Explore plastics and polymer job updates, candidate support and recruitment coordination."],
  ["/education", "Education & Learning | CIPET GYAN", "Technical learning support and study resources for plastics and polymer students."],
  ["/contact", "Contact CIPET GYAN | Enquiries & Support", "Contact CIPET GYAN about technical services, career support, recruitment and education."],
  ["/disclaimer", "Disclaimer | CIPET GYAN", "Independence, service scope and outcome disclaimers for CIPET GYAN."],
  ["/terms-and-conditions", "Terms and Conditions | CIPET GYAN", "Terms for using the CIPET GYAN website, learning app, services and enquiry forms."],
  ["/privacy-policy", "Privacy Policy | CIPET GYAN", "How CIPET GYAN handles account, learning, payment and website enquiry information."],
  ["/refund-policy", "Refund Policy | CIPET GYAN", "Refund information for CIPET GYAN digital learning content and purchases."],
  ["/delete-account", "Account and Data Deletion | CIPET GYAN", "How to request deletion of a CIPET GYAN account and associated personal data."],
];

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);
const baseHtml = await readFile(path.join(outputRoot, "index.html"), "utf8");

function withMetadata(html, route, title, description) {
  const url = `https://cipetgyan.me${route === "/" ? "/" : `${route}/`}`;
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  let page = html;
  const replace = (pattern, value) => { page = page.replace(pattern, value); };
  replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`);
  replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${safeDescription}" />`);
  replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`);
  replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${safeDescription}" />`);
  replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${logoUrl}" />`);
  replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${safeTitle}" />`);
  replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${safeDescription}" />`);
  replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${logoUrl}" />`);
  return page;
}

for (const [route, title, description] of routes) {
  let page = withMetadata(baseHtml, route, title, description);
  if (route !== "/") {
    page = page.replace(/\s*<!-- Static form declarations[\s\S]*?(?=\s*<div id="root">)/, "");
    const routeDirectory = path.join(outputRoot, route.slice(1));
    await mkdir(routeDirectory, { recursive: true });
    await writeFile(path.join(routeDirectory, "index.html"), page);
  } else {
    await writeFile(path.join(outputRoot, "index.html"), page);
  }
}

console.log(`Generated route-specific metadata pages for ${routes.length} routes.`);
