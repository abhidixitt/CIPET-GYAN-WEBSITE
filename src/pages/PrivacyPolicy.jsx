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
        <p>This policy explains how CIPET GYAN handles information when you use our learning app and website.</p>
      </header>

      <section className="privacy-policy-section">
        <h2>Information we handle</h2>
        <p>When you create and use an account, we handle information such as your name, email address, account details, and information needed to provide the services you request.</p>
        <p>When you use learning and purchase features, we handle mock-test answers and results, purchased-content access, and purchase or order details such as the content purchased, amount, and payment transaction identifiers. If you contact support, we also handle the information you include in your message.</p>
        <p>Payment providers process payment credentials. CIPET GYAN does not intentionally store complete card, UPI, or bank credentials on its own servers.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>How we use information</h2>
        <ul>
          <li>Create and manage student accounts.</li>
          <li>Provide learning materials, mock tests, and purchased-content access.</li>
          <li>Process and verify purchases and protect against fraud.</li>
          <li>Maintain service security, respond to support requests, and improve the service.</li>
          <li>Meet legal obligations and resolve disputes.</li>
        </ul>
      </section>

      <section className="privacy-policy-section">
        <h2>Service providers and sharing</h2>
        <p>We use service providers to operate CIPET GYAN, including Firebase services for account authentication and app data, our hosting and backend providers, and Razorpay for payment processing. These providers process information needed for their services under their own terms and privacy policies.</p>
        <p>We do not sell or rent personal information. We may disclose information when needed to protect users or the service, respond to valid legal requests, or comply with applicable law.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>Storage, security, and retention</h2>
        <p>Account information and associated learning or purchase records are stored with our service providers while needed to operate your account and provide the service. We use reasonable safeguards, but no internet service can guarantee absolute security.</p>
        <p>If you delete your account, we delete the account and associated data held by CIPET GYAN, including profile, purchase, and mock-test records. Payment providers may retain transaction records under their own policies or legal obligations. See our <Link to="/delete-account">account deletion page</Link> for instructions.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>Your choices</h2>
        <p>You can request deletion from <strong>My Profile &gt; Delete Account</strong> in the app. If you cannot access the app, use the request method on our <Link to="/delete-account">account deletion page</Link>. For questions or requests about your information, contact us at <a href="mailto:abhishekdixit9719@gmail.com">abhishekdixit9719@gmail.com</a>.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>Children and minors</h2>
        <p>CIPET GYAN is an educational service for students. Where a user is a minor, use of the service should follow applicable age requirements and any required parent or guardian supervision.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>Changes and contact</h2>
        <p>We may update this policy when our services or legal obligations change. The updated policy will be posted on this page with a revised date.</p>
        <p>For privacy questions, contact CIPET GYAN at <a href="mailto:abhishekdixit9719@gmail.com">abhishekdixit9719@gmail.com</a>.</p>
      </section>

      <p className="privacy-policy-home"><Link to="/">Return to CIPET GYAN</Link></p>
    </main>
  );
};

export default PrivacyPolicy;