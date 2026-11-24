import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

const studyAreas = [
  { icon: Layers3, title: "Processing & materials", text: "Plastic processing, polymer science, material technology, moulding processes and engineering plastics." },
  { icon: ClipboardCheck, title: "Testing & quality", text: "Plastic testing, characterisation, laboratory practice, quality control and industrial safety." },
  { icon: BookOpen, title: "Study resources", text: "Notes, entrance preparation, previous-year question practice, technical MCQs and interview question banks." },
];
const Education = () => <main className="interior-page">
  <header className="interior-hero"><div className="page-container"><span className="eyebrow">EDUCATION &amp; LEARNING</span><h1>Technical learning for plastics and polymer careers.</h1><p>Build understanding across processing, material science, testing and industry practice.</p><Link className="button button-primary" to="/services#study-materials">Browse learning support <ArrowRight size={16} /></Link></div></header>
  <section className="page-container education-content"><div className="education-audience"><span className="eyebrow">WHO THIS SUPPORT IS FOR</span><h2>For students across technical pathways.</h2><p>DPT, DPMT, PGD-PPT, B.Tech Polymer or Plastic Engineering, and other allied technical courses.</p></div><div className="education-grid">{studyAreas.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div><div className="education-note"><GraduationCap /><div><strong>Preparation support, not a guarantee</strong><p>Resources are for learning and preparation. Check your institution’s current syllabus, examination notices and standards directly.</p></div></div></section>
</main>;
export default Education;
