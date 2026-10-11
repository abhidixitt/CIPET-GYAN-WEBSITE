import { ArrowUpRight, FileText, FlaskConical, Layers3 } from "lucide-react";

const materials = [
  { icon: FileText, label: "01 / NOTES", title: "Injection Moulding Notes", text: "Detailed study material covering all core concepts.", tone: "blue" },
  { icon: FlaskConical, label: "02 / SYLLABUS", title: "Polymer Science Syllabus", text: "A complete CIPET syllabus breakdown for a clearer study path.", tone: "purple" },
  { icon: Layers3, label: "03 / PRACTICE", title: "Previous Year Papers", text: "Practice with real exam questions and build confidence.", tone: "cyan" },
];

const StudyMaterials = () => (
  <div className="resource-grid">
    {materials.map(({ icon: Icon, label, title, text, tone }) => (
      <article className={`resource-card ${tone}`} key={title}>
        <div className="resource-card-top"><span className="resource-icon"><Icon size={21} aria-hidden="true" /></span><span>{label}</span></div>
        <h3>{title}</h3>
        <p>{text}</p>
        <a className="resource-link" href="#app">View in app <ArrowUpRight size={16} aria-hidden="true" /></a>
      </article>
    ))}
  </div>
);

export default StudyMaterials;