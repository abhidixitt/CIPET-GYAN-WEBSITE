import { useEffect } from "react";
import { Link } from "react-router-dom";

const AccountDeletion = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Account and Data Deletion | CIPET GYAN";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <main className="account-deletion page-container">
      <header className="account-deletion-header">
        <span className="eyebrow">CIPET GYAN</span>
        <h1>Account and data deletion</h1>
        <p>Students can permanently delete their CIPET GYAN account and associated data from the app, or request deletion by email if they no longer have access to the app.</p>
      </header>

      <section className="account-deletion-section" aria-label="In-app deletion steps">
        <h2>Delete your account in the app</h2>
        <ol>
          <li>Sign in to your student account in the CIPET GYAN app.</li>
          <li>Open <strong>My Profile</strong> and select <strong>Delete Account</strong>.</li>
          <li>Review the information, confirm your choice, and enter your account password.</li>
        </ol>
        <p>Deletion is permanent. Your account and access to purchased content will be removed.</p>
      </section>

      <section className="account-deletion-section" aria-labelledby="email-deletion">
        <h2 id="email-deletion">Request deletion without the app</h2>
        <p>Email us from the email address registered to your CIPET GYAN account. Ask us to delete your account and associated data. We may contact you to verify that you own the account before processing the request.</p>
        <a className="hero-button account-deletion-button" href="mailto:abhishekdixit9719@gmail.com?subject=CIPET%20GYAN%20account%20deletion%20request">
          Request account deletion by email
        </a>
        <p className="account-deletion-note">Do not include your password in the email.</p>
      </section>

      <section className="account-deletion-section" aria-labelledby="data-deleted">
        <h2 id="data-deleted">What data is deleted</h2>
        <p>When the request is verified and completed, we delete your CIPET GYAN account, profile, purchase records held by us, mock test answers, and associated account data.</p>
        <p>Payment providers may retain transaction information they process under their own privacy policies and legal obligations.</p>
      </section>

      <p className="account-deletion-home"><Link to="/">Return to CIPET GYAN</Link></p>
    </main>
  );
};

export default AccountDeletion;
