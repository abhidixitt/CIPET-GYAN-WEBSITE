import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="not-found page-container">
    <span className="eyebrow">404 / NOT FOUND</span>
    <h1>This page wandered off.</h1>
    <p>The learning library is still right here.</p>
    <Link className="hero-button" to="/"><ArrowLeft size={17} aria-hidden="true" /> Back home</Link>
  </main>
);

export default NotFound;
