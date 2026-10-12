import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Privacy Policy | CIPET GYAN";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <main className="privacy-policy page-container">
      <header className="privacy-policy-header">
        <span className="eyebrow">CIPET GYAN</span>
        <h1>Privacy Policy</h1>
        <p className="privacy-policy-updated">Last updated: 12 October 2026</p>
        <p>CIPET GYAN is an independent learning app. It is not an official CIPET app and is not endorsed by or affiliated with CIPET.</p>
      </header>
      <section className="privacy-policy-section">
        <h2>Information we collect</h2>
        <p>When you register, we collect your name, email address, Firebase account identifier and account details. When you use learning features, we process course access and purchase records, mock-test question selections, correctness and answer times, and support information you send us.</p>
        <p>If you use the profile-switch feature, the app can save the account email and password you provide in your device's secure storage so it can switch profiles. Use that feature only on a device you control.</p>
      </section>
      <section className="privacy-policy-section">
        <h2>How we use information</h2>
        <ul><li>Create and secure accounts.</li><li>Provide learning materials and purchased-content access.</li><li>Operate mock tests and show whether answers were correct.</li><li>Process and verify payments, handle support and prevent misuse.</li><li>Meet legal and platform requirements.</li></ul>
      </section>
      <section className="privacy-policy-section">
        <h2>Payments</h2>
        <p>Payments may use Google Play Billing or, when offered and selected in India, Razorpay through the app's billing-choice flow. Payment providers handle payment credentials; CIPET GYAN does not intentionally store complete card, UPI PIN, or bank-login credentials. We receive and store limited transaction and purchase references to verify payment and provide access. For an India alternative-billing transaction, we report required transaction, product, amount, tax, time and state information to Google Play. Google Play and Razorpay process information under their own policies.</p>
      </section>
      <section className="privacy-policy-section">
        <h2>Service providers and sharing</h2>
        <p>We use Firebase for authentication and app data, Render to host our backend, Cloudflare R2 to store and deliver files, Google Play or Razorpay to process payments, and YouTube/Google when you play embedded YouTube videos. Those providers receive information needed for their services and handle it under their own privacy terms.</p>
        <p>We do not sell personal information. We may disclose information where necessary to protect users or the service, respond to valid legal requests, or comply with law.</p>
      </section>
      <section className="privacy-policy-section">
        <h2>Retention and deletion</h2>
        <p>Use <strong>My Profile &gt; Delete Account</strong> to delete your account in the app. On successful deletion, we delete the account and associated profile, purchase-access records and individual mock answers from our active account systems. Some transaction reports and records required for accounting, legal, security or fraud-prevention purposes, and non-identifying aggregate test statistics, may be retained for as long as needed for those purposes. Payment providers may retain their own records under their policies and legal duties. See our <Link to="/delete-account">account deletion page</Link> for deletion without the app.</p>
      </section>
      <section className="privacy-policy-section">
        <h2>Age and security</h2>
        <p>CIPET GYAN is intended for people aged 13 or older and is not designed for children under 13. We take reasonable steps to protect information, but no online service can guarantee complete security. Keep your password private and use profile switching only on a trusted device.</p>
      </section>
      <section className="privacy-policy-section">
        <h2>Changes and contact</h2>
        <p>We may update this policy and will show the revised date when we do. For privacy questions or deletion help, contact <a href="mailto:abhishekdixit9719@gmail.com">abhishekdixit9719@gmail.com</a>.</p>
      </section>
      <p className="privacy-policy-home"><Link to="/">Return to CIPET GYAN</Link></p>
    </main>
  );
};

export default PrivacyPolicy;
