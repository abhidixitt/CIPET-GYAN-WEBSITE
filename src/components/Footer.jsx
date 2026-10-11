import { ArrowUpRight, BookOpen } from "lucide-react";

const Footer = () => (
  <footer className="site-footer">
    <div className="page-container footer-grid">
      <div><a className="brand footer-brand" href="/#home"><span className="brand-mark"><BookOpen size={18} aria-hidden="true" /></span>CIPET GYAN</a><p>A focused study companion for CIPET learners.</p></div>
      <div className="footer-links"><span>Explore</span><a href="/#resources">Resources <ArrowUpRight size={13} aria-hidden="true" /></a><a href="/#how-it-works">How it works <ArrowUpRight size={13} aria-hidden="true" /></a><a href="/#about">About <ArrowUpRight size={13} aria-hidden="true" /></a><a href="/terms-and-conditions">Terms and Conditions <ArrowUpRight size={13} aria-hidden="true" /></a></div>
    </div>
    <div className="page-container footer-bottom"><span>© 2026 CIPET Gyan. All rights reserved.</span><span>Built for focused learning.</span></div>
  </footer>
);

export default Footer;
