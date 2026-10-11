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
      <p className="legal-updated">Last updated: 11 October 2026</p>
      <p>These Terms and Conditions apply to your access to and use of the CIPET GYAN website, mobile application, and learning services. By using them, you agree to these terms. If you do not agree, please do not use the services.</p>
    </header>

    <section className="legal-section">
      <h2>1. About CIPET GYAN</h2>
      <p>CIPET GYAN provides educational resources and study support for learners, including notes, syllabus guidance, and practice materials. The available features and content may change over time.</p>
    </section>

    <section className="legal-section">
      <h2>2. Using the services</h2>
      <p>You agree to use CIPET GYAN lawfully and for its intended educational purpose. Do not misuse the services, interfere with their operation, attempt unauthorized access, or use them in a way that infringes another person’s rights.</p>
      <p>You are responsible for having a compatible device and internet connection. You are also responsible for keeping any sign-in details associated with your account secure.</p>
    </section>

    <section className="legal-section">
      <h2>3. Paid features and purchases</h2>
      <p>Some features or learning materials may require payment. Before you purchase, we will show the applicable price, what is included, and any duration or renewal details. Your purchase is subject to the payment, cancellation, and refund terms shown by the payment provider and at checkout, as well as applicable law. Please review those details before confirming a purchase.</p>
      <p>Access to paid content may depend on the account and purchase channel used. Contact support if a completed purchase is not reflected in your account.</p>
    </section>

    <section className="legal-section">
      <h2>4. Learning content</h2>
      <p>Learning materials are provided for general educational support. They do not guarantee examination results, admission, employment, or any particular outcome. You should check official CIPET or examination sources for current requirements, dates, and instructions.</p>
      <p>We work to keep materials useful and current, but we do not promise that every item will always be complete, error-free, or available. Please contact us if you find an issue with content.</p>
    </section>

    <section className="legal-section">
      <h2>5. Intellectual property</h2>
      <p>CIPET GYAN and its licensors retain rights to the service and materials they own. You may use available content for your personal study. Do not copy, sell, redistribute, or publicly publish materials unless you have permission or the law allows it.</p>
      <p>Some educational content may belong to third parties. Rights in that content remain with its respective owners.</p>
    </section>

    <section className="legal-section">
      <h2>6. Third-party services</h2>
      <p>The app or website may link to third-party websites or services. Those services are operated independently, and their own terms and privacy policies apply to your use of them.</p>
    </section>

    <section className="legal-section">
      <h2>7. Changes and availability</h2>
      <p>We may update, suspend, or discontinue features or content. We may also revise these terms. Updated terms will be posted on this page with a new “Last updated” date. Your continued use after an update means you accept the revised terms.</p>
    </section>

    <section className="legal-section">
      <h2>8. Contact</h2>
      <p>For questions about these terms or the learning content, contact <a href="mailto:abhishekdixit9719@gmail.com">abhishekdixit9719@gmail.com</a>.</p>
    </section>

    <p className="legal-home"><Link to="/">Return to CIPET GYAN</Link></p>
    </main>
  );
};

export default TermsAndConditions;
