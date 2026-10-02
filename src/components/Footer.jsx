import { ArrowUpRight, MessageCircle, PlayCircle, Send } from "lucide-react";
import logoAsset from "../assets/cipet-logo.jpeg";

const Footer = () => (
  <footer className="site-footer">
    <div className="page-container footer-grid">
      <div><a className="brand footer-brand" href="#home"><span className="brand-mark"><img src={logoAsset} alt="" /></span>CIPET GYAN</a><p>A focused study companion for CIPET learners.</p></div>
      <div className="footer-links"><span>Explore</span><a href="#resources">Resources <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#how-it-works">How it works <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#about">About <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#contact">Contact details <ArrowUpRight size={13} aria-hidden="true" /></a><a className="footer-whatsapp" href="https://whatsapp.com/channel/0029Vamhez14inotQigdgn2C" target="_blank" rel="noreferrer"><MessageCircle size={14} aria-hidden="true" /> Follow CIPET Job Updates</a><a className="footer-youtube" href="https://youtube.com/@cipetgyan" target="_blank" rel="noreferrer"><PlayCircle size={14} aria-hidden="true" /> CIPET GYAN on YouTube</a><a className="footer-telegram" href="https://t.me/cipetgyan" target="_blank" rel="noreferrer"><Send size={14} aria-hidden="true" /> Join CIPET GYAN on Telegram</a></div>
    </div>
    <div className="page-container footer-bottom"><span>© 2026 CIPET Gyan. All rights reserved.</span><span>Built for focused learning.</span></div>
  </footer>
);

export default Footer;