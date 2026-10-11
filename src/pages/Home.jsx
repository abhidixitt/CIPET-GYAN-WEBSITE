import { ArrowRight, Compass, FileCheck2, Search } from "lucide-react";
import Hero from "../components/Hero";
import StudyMaterials from "../components/StudyMaterials";

const Home = () => (
  <main>
    <Hero />

    <section className="value-strip" aria-label="CIPET GYAN highlights">
      <div className="page-container value-grid">
        <span><FileCheck2 size={19} aria-hidden="true" /> Structured materials</span>
        <span><Compass size={19} aria-hidden="true" /> Clear syllabus direction</span>
        <span><Search size={19} aria-hidden="true" /> Practice-led learning</span>
      </div>
    </section>

    <section className="resources-section" id="resources">
      <div className="page-container">
        <div className="section-heading">
          <div><span className="eyebrow">START HERE</span><h2>Resources that make studying feel lighter.</h2></div>
          <p>Find the right starting point for your next study session, then keep building from there.</p>
        </div>
        <StudyMaterials />
      </div>
    </section>

    <section className="how-section" id="how-it-works">
      <div className="page-container how-grid">
        <div>
          <span className="eyebrow">A SIMPLE RHYTHM</span>
          <h2>Move from “where do I start?” to “I’ve got this.”</h2>
          <p>Use the library in a sequence that matches how real study works: orient yourself, learn the core ideas, and practise what you know.</p>
          <a className="text-link" href="#resources">Browse the library <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="rhythm-list">
          <div><b>01</b><span><strong>Get oriented</strong><small>Use the syllabus to see the shape of your study.</small></span></div>
          <div><b>02</b><span><strong>Go deeper</strong><small>Return to notes when a concept needs more time.</small></span></div>
          <div><b>03</b><span><strong>Test your recall</strong><small>Use previous-year papers to practise deliberately.</small></span></div>
        </div>
      </div>
    </section>

    <section className="about-section" id="about">
      <div className="page-container about-card">
        <span className="eyebrow">WHY CIPET GYAN</span>
        <h2>Less searching. More learning.</h2>
        <p>CIPET GYAN brings essential study support into one focused place, so learners can spend more energy understanding the subject and less time finding their way around.</p>
        <a className="hero-button" href="#resources">Find a resource <ArrowRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  </main>
);

export default Home;
