import { useEffect } from "react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Refund Policy | CIPET GYAN";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <main className="refund-policy page-container">
      <header className="privacy-policy-header">
        <span className="eyebrow">CIPET GYAN</span>
        <h1>Refund Policy</h1>
        <p className="privacy-policy-updated">Last updated: 12 October 2026</p>
        <p>CIPET GYAN supplies digital educational content, including PDFs, videos and mock tests. Please review the course description, price and payment method before confirming a purchase.</p>
      </header>
      <section className="privacy-policy-section">
        <h2>Digital access</h2>
        <p>Once digital content has been delivered or access has been granted, a refund is generally not available, except where required by applicable law or the payment provider's rules.</p>
      </section>
      <section className="privacy-policy-section">
        <h2>When to contact us</h2>
        <p>Contact us if you were charged but access was not granted, were charged more than once, or a technical problem prevents you from using content you purchased. We will review the order and may restore access or arrange a refund when appropriate. A support request does not itself guarantee a refund.</p>
      </section>
      <section className="privacy-policy-section">
        <h2>How to request help</h2>
        <p>For Google Play Billing purchases, use Google Play's purchase support and refund process; you may also contact us for help locating the transaction. For Razorpay transactions, email <a href="mailto:abhishekdixit9719@gmail.com">abhishekdixit9719@gmail.com</a> with your registered account email, course name and transaction or order reference. Never send your password, card number, UPI PIN or one-time code.</p>
        <p>Approved refunds are returned through the original payment method or provider. Processing time depends on that provider. Applicable law and Google Play or payment-provider rules take precedence over this general policy.</p>
      </section>
      <p className="privacy-policy-home"><Link to="/">Return to CIPET GYAN</Link></p>
    </main>
  );
};

export default RefundPolicy;
