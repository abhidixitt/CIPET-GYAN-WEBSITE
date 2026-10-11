import { ArrowRight, BookOpen, Download, FileText, GraduationCap, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import heroAsset from "../assets/hero.png";

const APP_DOWNLOAD_URL = "/app-download.apk";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="page-container hero-grid">
        <div>
          <motion.div className="eyebrow" variants={reveal} initial="hidden" animate="visible">LEARN WITH CLARITY</motion.div>
          <motion.h1 variants={reveal} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
            Build your next chapter with <span>CIPET GYAN.</span>
          </motion.h1>
          <motion.p className="hero-copy" variants={reveal} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            A focused home for CIPET learners to find study materials, understand the syllabus, and practise with previous-year papers.
          </motion.p>
          <motion.div className="hero-actions" variants={reveal} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
            <a className="hero-button" href="#resources">Explore resources <ArrowRight size={17} aria-hidden="true" /></a>
            <a className="hero-button secondary" href="#about">Why CIPET GYAN</a>
            <a className="hero-button download-button" href={APP_DOWNLOAD_URL}><Download size={17} aria-hidden="true" /> Download app</a>
          </motion.div>
        </div>

        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}>
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-panel">
            <div className="hero-panel-top">
              <span className="hero-panel-title">Your study desk</span>
              <span className="hero-panel-badge">Ready to learn</span>
            </div>
            <div className="hero-progress" aria-label="Study path overview"><span /></div>
            <div className="hero-lessons">
              <div className="lesson-row"><span className="lesson-icon"><BookOpen size={18} aria-hidden="true" /></span><span><strong>Core concepts</strong><small>Injection moulding notes</small></span></div>
              <div className="lesson-row"><span className="lesson-icon"><Layers3 size={18} aria-hidden="true" /></span><span><strong>Know the path</strong><small>Polymer science syllabus</small></span></div>
              <div className="lesson-row"><span className="lesson-icon"><FileText size={18} aria-hidden="true" /></span><span><strong>Practise smart</strong><small>Previous-year papers</small></span></div>
            </div>
          </div>
          <span className="floating-chip chip-one"><GraduationCap size={16} aria-hidden="true" /> Study materials</span>
          <span className="floating-chip chip-two"><FileText size={16} aria-hidden="true" /> Practice papers</span>
          <img className="hero-asset" src={heroAsset} alt="Abstract CIPET GYAN layered learning mark" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;