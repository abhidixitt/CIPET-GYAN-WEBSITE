import { ArrowRight, ArrowUpRight, Check, CircleHelp } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/siteContent";

const Services = () => <main className="interior-page">
  <header className="interior-hero"><div className="page-container"><span className="eyebrow">OUR SERVICES</span><h1>Technical knowledge and career support for the plastics industry.</h1><p>Explore education, recruitment, technical guidance and professional support in one independent platform.</p><Link className="button button-primary" to="/contact">Discuss your requirements <ArrowRight size={16} /></Link></div></header>
  <section className="page-container detail-services">{services.map((service) => <article className="detail-service" id={service.slug} key={service.slug}>
    <div className="detail-service-visual">{service.image ? <img src={service.image} alt={service.alt} loading="lazy" /> : <span className="detail-placeholder"><CircleHelp size={42} /></span>}<span className="detail-service-index">{service.number}</span></div>
    <div className="detail-service-content"><span className="eyebrow">SERVICE {service.number}</span><h2>{service.title}</h2><p className="detail-service-summary">{service.summary}</p><p className="detail-audience"><strong>Who it supports:</strong> {service.audience}</p><h3>Support includes</h3><ul className="check-list">{service.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>{service.roles && <><h3>Example positions</h3><ul className="check-list compact-list">{service.roles.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></>}{service.industries && <><h3>Relevant industries</h3><div className="tag-list">{service.industries.map((item) => <span key={item}>{item}</span>)}</div></>}<Link className="text-action" to={`/contact?service=${service.slug}`}>{service.cta} <ArrowUpRight size={16} /></Link></div>
  </article>)}</section>
  <section className="closing-cta"><div className="page-container closing-cta-inner"><div><span className="eyebrow">LET’S CONNECT</span><h2>Need support for your next step?</h2><p>Share your enquiry and we’ll direct it to the right conversation.</p></div><Link className="button button-light" to="/contact">Contact us <ArrowRight size={16} /></Link></div></section>
</main>;

export default Services;
