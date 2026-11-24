import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Check, GraduationCap, Handshake, MessageSquareText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import brandHero from "../assets/01_Brand_Hero.jpg";
import industryHero from "../assets/plastic industry.jfif";
import { industries, services } from "../data/siteContent";
import PlatformShowcase from "../components/PlatformShowcase";

const Home = () => (
  <main>
    <section className="industrial-hero" id="home">
      <img className="industrial-hero-photo" src={industryHero} alt="Plastics and polymer manufacturing floor" />
      <div className="industrial-hero-shade" />
      <div className="page-container industrial-hero-content">
        <span className="hero-kicker"><span /> Independent. Industry focused. Practical.</span>
        <h1>Empowering the Plastics &amp; Polymer Industry Through Knowledge, Careers and Technical Excellence</h1>
        <p>Your independent platform for technical education, recruitment support, career development and industrial consultancy.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/services">Explore our services <ArrowRight size={17} /></Link>
          <Link className="button button-ghost" to="/careers">Find job opportunities <ArrowUpRight size={16} /></Link>
        </div>
        <a className="hero-scroll" href="#about"><ArrowDown size={16} /> Discover CIPET GYAN</a>
      </div>
      <div className="hero-caption">Technical Knowledge <i /> Career Support <i /> Industrial Consultancy</div>
    </section>

    <div className="independence-note"><div className="page-container"><ShieldCheck size={18} aria-hidden="true" /><p><strong>Independent platform:</strong> CIPET GYAN is not an official CIPET branch, government organisation or authorised affiliate unless confirmed through written authorisation.</p><Link to="/disclaimer">Read disclaimer</Link></div></div>

    <section className="section-pad about-intro" id="about">
      <div className="page-container split-intro">
        <div><span className="eyebrow">ABOUT CIPET GYAN</span><h2>Connecting technical learning with industry needs.</h2></div>
        <div><p>CIPET GYAN is an independent technical education, career guidance, recruitment support and industrial consultancy platform focused on the plastics, polymer and allied industries.</p><p>Our objective is to bridge technical education, industrial requirements and employment opportunities through knowledge-based resources and professional support.</p><Link className="text-action" to="/about">Read more about us <ArrowRight size={16} /></Link></div>
      </div>
      <div className="page-container about-photo-banner"><img src={brandHero} alt="Plastic processing machines in a modern factory" /><span>Materials <i /> Processes <i /> People</span></div>
      <div className="page-container value-cards">
        <article><span className="value-icon"><GraduationCap /></span><strong>For learners</strong><p>Technical learning, study material and career guidance.</p></article>
        <article><span className="value-icon"><BriefcaseBusiness /></span><strong>For professionals</strong><p>Industry opportunities and profile development support.</p></article>
        <article><span className="value-icon"><Handshake /></span><strong>For organisations</strong><p>Recruitment coordination and technical guidance.</p></article>
      </div>
    </section>

    <section className="section-pad services-preview" id="services">
      <div className="page-container">
        <div className="section-title-row"><div><span className="eyebrow">WHAT WE DO</span><h2>Technical support for every step forward.</h2></div><Link className="text-action" to="/services">View all 10 services <ArrowRight size={16} /></Link></div>
        <div className="service-card-grid home-service-grid">{services.map((service) => <Link className="service-card home-service-card" to={`/services#${service.slug}`} key={service.slug}>
          {service.image ? <img src={service.image} alt={service.alt} loading="lazy" /> : <span className="service-card-placeholder"><Check /></span>}
          <div className="service-card-body"><span className="service-number">{service.number} / SERVICE</span><h3>{service.title}</h3><p>{service.summary}</p><span className="service-card-link">Learn more <ArrowUpRight size={15} /></span></div>
        </Link>)}</div>
      </div>
    </section>

    <section className="section-pad industries-section" id="industries">
      <div className="page-container"><div className="section-heading-centered"><span className="eyebrow">INDUSTRIES WE SUPPORT</span><h2>Focused on plastics, polymer and allied sectors.</h2><p>Technical learning and support shaped around the industries our communities work in.</p></div>
        <div className="industry-grid">{industries.map((item) => <article className="industry-card" key={item.title}><img src={item.image} alt={item.alt} loading="lazy" /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </div>
    </section>

    <section className="career-band" id="careers">
      <div className="page-container career-band-inner"><div><span className="eyebrow">CAREERS &amp; OPPORTUNITIES</span><h2>Find your next opportunity in plastics and polymer.</h2><p>Explore job updates, candidate support and recruitment coordination for technical roles.</p></div><div className="career-actions"><Link className="button button-light" to="/careers">Explore careers <ArrowRight size={16} /></Link><Link className="button button-outline-light" to="/contact?service=resume">Submit your resume</Link><a className="career-whatsapp" href="https://whatsapp.com/channel/0029Vamhez14inotQigdgn2C" target="_blank" rel="noreferrer">Follow job updates <ArrowUpRight size={15} /></a></div></div>
    </section>

    <section className="section-pad learning-section" id="education">
      <div className="page-container learning-grid"><div><span className="eyebrow">LEARNING &amp; EDUCATION</span><h2>Build practical knowledge with a clearer study path.</h2><p>Explore technical notes, syllabus guidance, previous-year practice, and learning resources for plastics and polymer subjects.</p><Link className="button button-primary" to="/education">Explore education <ArrowRight size={16} /></Link></div><div className="learning-tiles"><article><BookOpen /><strong>Technical notes</strong><span>Processing, testing and materials</span></article><article><GraduationCap /><strong>Course guidance</strong><span>Diploma and degree pathways</span></article><article><ShieldCheck /><strong>Industry readiness</strong><span>Interview and practical topics</span></article></div></div>
    </section>

    <PlatformShowcase />

    <section className="section-pad why-section" id="why-us"><div className="page-container why-grid"><div><span className="eyebrow">WHY CIPET GYAN</span><h2>Industry context with a learning-first approach.</h2><p>A focused independent platform for people and organisations connected to plastics and polymer technology.</p></div><ul>{["Plastics and polymer industry focus", "Technical and practical knowledge orientation", "Career support for freshers and professionals", "Recruitment coordination for organisations", "Laboratory documentation guidance", "A bridge between learners and industry needs"].map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div></section>

    <section className="mission-section"><div className="page-container mission-grid"><article><span className="eyebrow">OUR MISSION</span><h2>Empower learners, professionals and organisations.</h2><p>Through technical education, career development, recruitment assistance and industry-oriented consultancy.</p></article><article><span className="eyebrow">OUR VISION</span><h2>A trusted independent industry knowledge platform.</h2><p>For career opportunities, technical guidance and professional connections in plastics and polymer.</p></article></div></section>

    <section className="contact-band" id="contact"><div className="page-container contact-band-inner"><div><span className="eyebrow">START A CONVERSATION</span><h2>Have a technical, career or recruitment enquiry?</h2><p>Tell us what support you are looking for.</p></div><Link className="button button-primary" to="/contact">Contact CIPET GYAN <ArrowRight size={16} /></Link></div></section>
    <Link className="floating-enquiry-button" to="/contact" aria-label="Open enquiry form"><MessageSquareText size={18} aria-hidden="true" /><span>Enquiry</span></Link>
  </main>
);

export default Home;
