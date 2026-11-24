import { Link } from "react-router-dom";

const Disclaimer = () => <main className="legal-page page-container">
  <header className="legal-header"><span className="eyebrow">CIPET GYAN</span><h1>Disclaimer</h1><p className="legal-updated">Independent platform notice</p><p>This page explains the scope and limitations of CIPET GYAN’s educational, career, recruitment and technical guidance content.</p></header>
  <ol className="disclaimer-list">
    <li>CIPET GYAN is an independent educational, career guidance, recruitment support and technical consultancy platform.</li>
    <li>It is not an official branch, department, representative, franchise or authorised affiliate of CIPET unless separately confirmed through written authorisation.</li>
    <li>CIPET GYAN is not a government organisation or government recruitment agency.</li>
    <li>Recruitment support does not guarantee employment, interview selection, salary or placement.</li>
    <li>Educational materials are provided for learning and preparation purposes. Users should verify current academic requirements with official sources.</li>
    <li>Technical consultancy is guidance-based and does not guarantee BIS approval, NABL accreditation, ISO certification, audit clearance or regulatory compliance.</li>
    <li>References to ASTM, ISO, IS, BIS, NABL and ISO/IEC 17025 are informational and do not imply endorsement or certification.</li>
    <li>Third-party job information and external links should be independently verified with the relevant organisation.</li>
    <li>No specific academic, employment, business, technical or financial outcome is guaranteed.</li>
    <li>Website content and intellectual property may not be copied or commercially reused without permission, subject to applicable law.</li>
    <li>CIPET GYAN may update this disclaimer when required. Check this page for the current version.</li>
  </ol>
  <section className="legal-section"><h2>Contact</h2><p>For questions about this disclaimer, contact <a href="mailto:abhishekdixit9719@gmail.com">abhishekdixit9719@gmail.com</a>.</p></section>
  <p className="legal-home"><Link to="/">Return to CIPET GYAN</Link></p>
</main>;
export default Disclaimer;
