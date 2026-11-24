import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoAsset from "../assets/cipet-logo.jpeg";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers & Jobs", href: "/careers" },
  { label: "Education", href: "/education" },
];

const Navbar = () => {
  const location = useLocation();
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
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${location.pathname !== "/" ? "is-interior" : ""}`}>
      <div className="nav-shell">
        <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
          <span className="brand-mark"><img src={logoAsset} alt="" /></span>
          CIPET GYAN
        </Link>
        <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
          ))}
        </nav>
        <Link className="nav-cta" to="/contact">Contact us <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <button className="menu-toggle" type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
