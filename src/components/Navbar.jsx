import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "../assets/cipet-logo.jpeg";

const links = [
  { label: "Home", href: "#home" },
  { label: "Resources", href: "#resources" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark"><img src={logoAsset} alt="" /></span>
          CIPET GYAN
        </a>
        <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="#resources">Explore learning <ArrowUpRight size={16} aria-hidden="true" /></a>
        <button className="menu-toggle" type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;