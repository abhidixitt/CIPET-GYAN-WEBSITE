import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Terms and Conditions | CIPET GYAN";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <main className="legal-page page-container">
      <header className="legal-header">
        <span className="eyebrow">CIPET GYAN</span>
        <h1>Terms and Conditions</h1>
        <p className="legal-updated">Last updated: 24 November 2026</p>
        <p>These terms apply to your use of the CIPET GYAN website, mobile app and learning services. By using them, you agree to these terms.</p>
      </header>
      <section className="legal-section"><h2>1. About CIPET GYAN</h2><p>CIPET GYAN is an independent technical education, career guidance, recruitment support and technical consultancy platform focused on plastics, polymer and allied industries. It is not an official CIPET service and is not endorsed by or affiliated with CIPET. We do not guarantee examination results, admission, employment or professional qualifications. Check official sources for current requirements and instructions.</p></section>
      <section className="legal-section"><h2>2. Accounts and age</h2><p>Provide accurate account details, keep your password secure and use only your own account unless you have permission. You are responsible for activity through your account. The app is intended for people aged 13 or older and is not designed for children under 13.</p></section>
      <section className="legal-section"><h2>3. Content and permitted use</h2><p>Your purchase or granted access is a personal, limited, non-transferable permission to use the relevant content for learning through your account. CIPET GYAN and its licensors retain rights in their service and materials. Do not copy, publish, redistribute, sell or share paid content or account access, bypass protections, reverse engineer the service, interfere with systems or use it unlawfully, except where law permits. Third-party materials remain subject to their owners' rights.</p></section>
      <section className="legal-section"><h2>4. Payments and refunds</h2><p>Prices and available payment methods are shown before purchase and may change for future purchases. Payments are processed by Google Play Billing or, where offered and selected in India, Razorpay through the app's billing-choice flow. Access is provided after payment verification. Refund requests follow our <Link to="/refund-policy">Refund Policy</Link>, the relevant payment provider's process and applicable law. Nothing in these terms removes mandatory consumer rights.</p></section>
      <section className="legal-section"><h2>5. Availability and account action</h2><p>Maintenance, network problems or provider outages may interrupt access. We may restrict or suspend access for suspected fraud, security threats, unlawful use or serious breach of these terms, taking applicable law into account. You may request account deletion in My Profile &gt; Delete Account. Some records may remain where required for legal, accounting, security or fraud-prevention purposes; see our <Link to="/privacy-policy">Privacy Policy</Link>.</p></section>
      <section className="legal-section"><h2>6. Changes and legal rights</h2><p>We may update, suspend or discontinue features or content. Material term changes will be notified in the app or on the website. The service is provided subject to applicable law. Nothing here excludes rights or liability that cannot legally be excluded.</p></section>
      <section className="legal-section"><h2>7. Contact</h2><p>For questions about these terms or learning content, contact <a href="mailto:abhishekdixit9719@gmail.com">abhishekdixit9719@gmail.com</a>.</p></section>
      <section className="legal-section"><h2>8. Recruitment support</h2><p>Recruitment support may include vacancy promotion, candidate sourcing, resume screening and coordination. It does not guarantee an interview, selection, placement, salary or employment. Candidates are responsible for the accuracy of information they provide. Employers are responsible for vacancy details, hiring decisions, employment terms and applicable legal requirements.</p></section>
      <section className="legal-section"><h2>9. Technical consultancy and educational information</h2><p>Technical consultancy and laboratory support are guidance-based. They do not guarantee BIS approval, NABL accreditation, ISO certification, audit clearance or regulatory compliance. Users remain responsible for verifying applicable standards, requirements and technical decisions with qualified professionals and official sources.</p></section>
      <section className="legal-section"><h2>10. Third-party links and information</h2><p>External links and third-party job or industry information are provided for convenience or general information. We do not control those services or guarantee the accuracy, availability or suitability of their content. Verify details directly with the relevant organisation before acting.</p></section>
      <section className="legal-section"><h2>11. Governing law</h2><p>These terms are subject to the laws of India, without limiting consumer rights or other protections that apply under mandatory law.</p></section>
      <p className="legal-home"><Link to="/">Return to CIPET GYAN</Link></p>
    </main>
  );
};

export default TermsAndConditions;
