import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <main className="not-found page-container">
    <span className="eyebrow">404 / NOT FOUND</span>
    <h1>This page wandered off.</h1>
    <p>The learning library is still right here.</p>
    <a className="hero-button" href="#home"><ArrowLeft size={17} aria-hidden="true" /> Back home</a>
  </main>
);

export default NotFound;
