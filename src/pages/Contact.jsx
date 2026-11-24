import { useState } from "react";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, FileUp, GraduationCap, Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import { useLocation } from "react-router-dom";

const email = "abhishekdixit9719@gmail.com";
const netlifyFormsEnabled = import.meta.env.VITE_NETLIFY_FORMS_ENABLED === "true";
const formNames = { general: "general-enquiry", employer: "employer-recruitment", candidate: "candidate-profile" };
const emailSubjects = { general: "CIPET GYAN | General Enquiry (%{submissionId})", employer: "CIPET GYAN | Employer Recruitment Request (%{submissionId})", candidate: "CIPET GYAN | Candidate Profile (%{submissionId})" };
const paths = [
  { id: "general", number: "01", icon: MessageSquareText, title: "Ask a question", audience: "For students, professionals and organisations", text: "Questions about services, learning resources, technical support or collaboration." },
  { id: "employer", number: "02", icon: BriefcaseBusiness, title: "Hire candidates", audience: "For employers and HR teams", text: "Share a vacancy and the qualifications, experience and location you need." },
  { id: "candidate", number: "03", icon: GraduationCap, title: "Share your profile", audience: "For job seekers and candidates", text: "Send your qualifications and experience for career or recruitment support." },
];

const PreviewForm = ({ type, title, intro, children }) => {
  const [status, setStatus] = useState({ kind: "idle", message: "" });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!netlifyFormsEnabled) {
      setStatus({ kind: "info", message: "Preview only. This form is not sending or storing submissions yet." });
      return;
    }
    const resume = form.elements.namedItem("resume")?.files?.[0];
    if (resume && resume.size > 8 * 1024 * 1024) {
      setStatus({ kind: "error", message: "Please choose a PDF smaller than 8 MB." });
      return;
    }
    setStatus({ kind: "sending", message: "Sending your enquiry…" });
    const formData = new FormData(form);
    formData.set("form-name", formNames[type]);
    try {
      const response = await fetch("/", { method: "POST", body: formData });
      if (!response.ok) throw new Error("We couldn’t send your enquiry. Please try again.");
      setStatus({ kind: "success", message: "Enquiry sent successfully! The CIPET GYAN team will follow up using the contact details you provided." });
      form.reset();
    } catch (error) {
      setStatus({ kind: "error", message: error.message || "We couldn’t send your enquiry. Please try again." });
    }
  };
  return <form className="preview-form" name={formNames[type]} method="POST" action="/" encType="multipart/form-data" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value={formNames[type]} />
    <input type="hidden" name="subject" value={emailSubjects[type]} />
    <div className="form-heading"><h3>{title}</h3><p>{intro}</p></div>
    <label className="honeypot-field" aria-hidden="true" tabIndex="-1">Leave this field empty<input name="bot-field" type="text" autoComplete="off" tabIndex="-1" /></label>
    {children}
    <button className="button button-primary" type="submit" disabled={status.kind === "sending"}>{netlifyFormsEnabled ? "Send enquiry" : "Preview this form"} <ArrowRight size={15} /></button>
    {status.message && <p className={`form-preview-status ${status.kind}`} role="status">{status.message}</p>}
  </form>;
};
const Field = ({ label, name, type = "text", required = false, ...props }) => <label className="form-field">{label}{type === "textarea" ? <textarea name={name} required={required} rows="4" {...props} /> : <input name={name} type={type} required={required} {...props} />}</label>;

const Contact = () => {
  const location = useLocation();
  const requestedService = new URLSearchParams(location.search).get("service") || "";
  const [selectedPath, setSelectedPath] = useState("general");
  const current = paths.find((path) => path.id === selectedPath);
  return <main className="interior-page">
    <header className="interior-hero"><div className="page-container"><span className="eyebrow">CONTACT &amp; ENQUIRIES</span><h1>Choose the enquiry that fits you.</h1><p>Start by selecting who you are and what you need. We’ll show only the matching form.</p></div></header>
    <section className="page-container contact-choice-section">
      <div className="contact-choice-heading"><span className="eyebrow">STEP 1 · YOUR ENQUIRY TYPE</span><h2>What brings you here?</h2><p>Choose one option to see who it’s for and the details we’ll ask you to provide.</p></div>
      <div className="contact-path-grid" role="tablist" aria-label="Choose enquiry type">{paths.map(({ id, number, icon: Icon, title, audience, text }) => <button className={`contact-path-card ${selectedPath === id ? "is-selected" : ""}`} key={id} type="button" role="tab" id={`contact-tab-${id}`} aria-selected={selectedPath === id} aria-controls="contact-selected-panel" onClick={() => setSelectedPath(id)}>
        <span className="contact-path-number">{number}</span><Icon className="contact-path-icon" size={23} /><strong>{title}</strong><span className="contact-path-audience">{audience}</span><span className="contact-path-description">{text}</span><span className="contact-path-select">{selectedPath === id ? "Selected" : "Choose this"} <ArrowRight size={14} /></span>
      </button>)}</div>
      <div className="contact-selected-panel" id="contact-selected-panel" role="tabpanel" aria-labelledby={`contact-tab-${selectedPath}`} tabIndex="0">
        <div className="contact-selected-heading"><span className="eyebrow">STEP 2 · {current.number} / {current.title.toUpperCase()}</span><h2>{current.audience}</h2><p>{current.text}</p></div>
        {selectedPath === "general" && <PreviewForm type="general" title="General question or service enquiry" intro="Use this for learning support, consultancy, account questions, or general collaboration.">
          <div className="form-row"><Field label="Full name" name="fullName" required /><Field label="Email address" name="email" type="email" required /></div>
          <div className="form-row"><Field label="Mobile number (optional)" name="mobile" type="tel" /><Field label="Organisation / college (optional)" name="organisation" /></div>
          <label className="form-field">Service you’re asking about<select name="service" defaultValue={requestedService}><option value="">Choose a service</option><option value="recruitment-placement">Recruitment &amp; Placement</option><option value="technical-training">Technical Training</option><option value="interview-career-guidance">Interview &amp; Career Guidance</option><option value="technical-consultancy">Technical Consultancy</option><option value="laboratory-quality-support">Laboratory Support</option><option value="study-materials">Study Materials</option><option value="industrial-jobs">Industrial Job Updates</option><option value="resume-development">Resume Development</option><option value="industrial-training">Industrial Training</option><option value="professional-networking">Professional Networking</option></select></label>
          <Field label="Subject" name="querySubject" required /><Field label="How can we help?" name="message" type="textarea" required />
        </PreviewForm>}
        {selectedPath === "employer" && <PreviewForm type="employer" title="Employer recruitment request" intro="For a company or HR representative looking for candidates. Include the role, required skills and hiring location.">
          <div className="form-row"><Field label="Company name" name="company" required /><Field label="HR contact person" name="hrContact" required /></div>
          <div className="form-row"><Field label="Work email" name="email" type="email" required /><Field label="Phone number" name="employerPhone" type="tel" /></div>
          <div className="form-row"><Field label="Position to fill" name="position" required /><Field label="Number of vacancies" name="vacancies" type="number" min="1" /></div>
          <div className="form-row"><Field label="Required qualification" name="qualification" /><Field label="Required experience" name="experience" /></div>
          <Field label="Job location" name="jobLocation" /><Field label="Job description and key requirements" name="jobDescription" type="textarea" required />
        </PreviewForm>}
        {selectedPath === "candidate" && <PreviewForm type="candidate" title="Candidate profile submission" intro="For a student, fresher or experienced professional seeking job or career support. Add a PDF resume up to 8 MB.">
          <div className="form-row"><Field label="Full name" name="candidateName" required /><Field label="Email address" name="email" type="email" required /></div>
          <div className="form-row"><Field label="Phone number" name="candidatePhone" type="tel" required /><Field label="Qualification" name="candidateQualification" required /></div>
          <div className="form-row"><Field label="Specialisation" name="specialisation" /><Field label="Experience" name="candidateExperience" /></div>
          <Field label="Preferred job location" name="preferredLocation" />
          <label className="form-field file-field"><span>Resume file <small>(PDF, max 8 MB)</small></span><span className="file-picker"><FileUp size={18} /><input type="file" name="resume" accept="application/pdf,.pdf" required={netlifyFormsEnabled} />Choose a PDF file</span></label>
          <label className="consent-field"><input name="consent" type="checkbox" required={netlifyFormsEnabled} />I agree that CIPET GYAN may use these details to respond to my career or recruitment enquiry.</label>
        </PreviewForm>}
      </div>
    </section>
    <section className="contact-direct-section"><div className="page-container contact-direct-inner"><div><span className="eyebrow">PREFER EMAIL?</span><h2>Contact CIPET GYAN directly</h2><p>For account, payment, refund or educational-content queries, use the existing support email.</p></div><a className="email-contact" href={`mailto:${email}`}><Mail size={19} /><span><strong>Email CIPET GYAN</strong><small>{email}</small></span><ArrowUpRight size={16} /></a></div></section>
    <div className="page-container contact-safety-note"><ShieldCheck /><p>Do not send passwords or payment credentials. Candidate resumes are uploaded with their Netlify submission when live forms are enabled.</p></div>
  </main>;
};
export default Contact;
