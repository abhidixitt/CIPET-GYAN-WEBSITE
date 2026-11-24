import { ArrowUpRight, MessageCircle, PlayCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import logoAsset from "../assets/cipet-logo.jpeg";

const footerLinks = [
  ["Our Services", "/services"], ["Careers & Jobs", "/careers"], ["Education", "/education"],
  ["About Us", "/about"], ["Contact Us", "/contact"], ["Disclaimer", "/disclaimer"],
  ["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-and-conditions"], ["Refund Policy", "/refund-policy"],
];
const Footer = () => <footer className="site-footer">
  <div className="page-container footer-grid">
    <div><Link className="brand footer-brand" to="/"><span className="brand-mark"><img src={logoAsset} alt="" /></span>CIPET GYAN</Link><p>Technical knowledge, career support and industry guidance for plastics and polymer.</p><p className="footer-independence">An independent platform. Not an official CIPET or government organisation.</p></div>
    <div className="footer-links"><span>Explore</span>{footerLinks.map(([label, href]) => <Link key={href} to={href}>{label} <ArrowUpRight size={13} aria-hidden="true" /></Link>)}
      <a className="footer-whatsapp" href="https://whatsapp.com/channel/0029Vamhez14inotQigdgn2C" target="_blank" rel="noreferrer"><MessageCircle size={14} aria-hidden="true" /> Follow CIPET Job Updates</a>
      <a className="footer-youtube" href="https://youtube.com/@cipetgyan" target="_blank" rel="noreferrer"><PlayCircle size={14} aria-hidden="true" /> CIPET GYAN on YouTube</a>
      <a className="footer-telegram" href="https://t.me/cipetgyan" target="_blank" rel="noreferrer"><Send size={14} aria-hidden="true" /> Join CIPET GYAN on Telegram</a>
    </div>
  </div>
  <div className="page-container footer-bottom"><span>© 2026 CIPET GYAN. All rights reserved.</span><span>Technical Knowledge | Career Support | Recruitment | Industrial Consultancy</span></div>
</footer>;
export default Footer;
