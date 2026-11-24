import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import learningMaterials from "../assets/promo-frames/video-learning-materials.jpg";
import news from "../assets/promo-frames/video-news.jpg";
import myCourses from "../assets/promo-frames/video-my-courses.jpg";
import mockTests from "../assets/promo-frames/video-mock-tests.jpg";
import myProfile from "../assets/promo-frames/video-my-profile.jpg";
import contentLibrary from "../assets/promo-frames/video-content-library.jpg";
import signIn from "../assets/promo-frames/video-sign-in.jpg";
import resetPassword from "../assets/promo-frames/video-reset-password.jpg";
import reviewSupport from "../assets/reviews/review-support-redacted.jpg";
import reviewComplete from "../assets/reviews/review-complete-redacted.jpg";
import reviewGuidance from "../assets/reviews/review-guidance-redacted.jpg";
import reviewPdfHelp from "../assets/reviews/review-pdf-help-redacted.jpg";
import reviewPdfMatch from "../assets/reviews/review-pdf-match-redacted.jpg";
import reviewPaper from "../assets/reviews/review-paper-redacted.jpg";
import reviewEasy from "../assets/reviews/review-easy-redacted.jpg";

const slides = [
  [learningMaterials, "Learning materials", "Choose between PDFs and video learning."],
  [myCourses, "My courses", "Open learning resources from one place."],
  [news, "News & updates", "Stay informed about new learning content."],
  [mockTests, "Mock tests", "Practise questions and review your progress."],
  [myProfile, "My profile", "Keep account and support details close."],
  [contentLibrary, "Content library", "Browse academic and entrance resources."],
  [signIn, "Sign in", "Access your learning space."],
  [resetPassword, "Reset password", "Recover access to your learning account."],
];
const reviews = [
  [reviewSupport, "CIPET learner", "Thanks for your support in getting this paper."],
  [reviewComplete, "CIPET learner", "Sir, I got through. Thank you."],
  [reviewGuidance, "CIPET learner", "Your support and guidance made my work much easier."],
  [reviewPdfHelp, "CIPET learner", "Thank you for your support and help with the PDF."],
  [reviewPdfMatch, "CIPET learner", "The PDF helped me prepare for the questions."],
  [reviewPaper, "CIPET learner", "Overall, the question paper was easy to moderate."],
  [reviewEasy, "CIPET learner", "The PDF was useful for my preparation."],
];
const videoUrl = "https://youtu.be/brwZfulNDag";

const PlatformShowcase = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  const shift = (direction) => setActive((index) => (index + direction + slides.length) % slides.length);
  return <>
    <section className="platform-promo"><div className="page-container platform-promo-grid"><div><span className="eyebrow">THE CIPET GYAN LEARNING PLATFORM</span><h2>Study materials and learning tools, together.</h2><p>The existing student learning experience remains part of CIPET GYAN. Take a look at its video tour and app screens.</p><a className="button button-primary" href={videoUrl} target="_blank" rel="noreferrer"><PlayCircle size={17} /> Watch on YouTube</a></div><video controls preload="metadata" aria-label="CIPET GYAN learning platform promo video"><source src="/videos/cipet-gyan-promo.mp4" type="video/mp4" />Your browser does not support the promo video.</video></div></section>
    <section className="platform-screens"><div className="page-container"><div className="section-title-row"><div><span className="eyebrow">APP SCREENS</span><h2>Keep learning resources close at hand.</h2></div><p className="showcase-intro">A preview of screens from the existing CIPET GYAN learning app.</p></div>
      <div className="platform-carousel"><button type="button" className="platform-arrow" onClick={() => shift(-1)} aria-label="Previous app screen"><ArrowLeft /></button><figure><img src={slides[active][0]} alt={`CIPET GYAN app: ${slides[active][1]}`} /><figcaption><strong>{slides[active][1]}</strong><span>{slides[active][2]}</span></figcaption></figure><button type="button" className="platform-arrow" onClick={() => shift(1)} aria-label="Next app screen"><ArrowRight /></button></div>
      <div className="platform-dots" aria-label="Select app screen">{slides.map((slide, index) => <button key={slide[1]} type="button" className={active === index ? "is-active" : ""} aria-label={`Show ${slide[1]}`} aria-current={active === index ? "true" : undefined} onClick={() => setActive(index)} />)}</div>
    </div></section>
    <section className="platform-reviews"><div className="page-container"><div className="section-title-row"><div><span className="eyebrow">STUDENT REVIEWS</span><h2>Feedback from CIPET learners.</h2></div><p className="showcase-intro">Messages shared by learners. Names, contact details and documents are redacted.</p></div><div className="testimonial-grid">{reviews.map(([image, name, quote], index) => <article className="testimonial-card" key={`${name}-${index}`}><img src={image} alt="Redacted student review screenshot" loading="lazy" /><strong>{name}</strong><p>“{quote}”</p></article>)}</div></div></section>
  </>;
};
export default PlatformShowcase;
