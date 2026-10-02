import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import StudyMaterials from "../components/StudyMaterials";
import { ArrowLeft, ArrowRight, Compass, FileCheck2, Mail, PlayCircle, Search } from "lucide-react";
import learningMaterialsScreenshot from "../assets/promo-frames/video-learning-materials.jpg";
import newsScreenshot from "../assets/promo-frames/video-news.jpg";
import myCoursesScreenshot from "../assets/promo-frames/video-my-courses.jpg";
import mockTestsScreenshot from "../assets/promo-frames/video-mock-tests.jpg";
import myProfileScreenshot from "../assets/promo-frames/video-my-profile.jpg";
import contentLibraryScreenshot from "../assets/promo-frames/video-content-library.jpg";
import signInScreenshot from "../assets/promo-frames/video-sign-in.jpg";
import resetPasswordScreenshot from "../assets/promo-frames/video-reset-password.jpg";
import reviewSupport from "../assets/reviews/review-support.jpg";
import reviewComplete from "../assets/reviews/review-complete.jpg";
import reviewGuidance from "../assets/reviews/review-guidance.jpg";
import reviewPdfHelp from "../assets/reviews/review-pdf-help.jpg";
import reviewPdfMatch from "../assets/reviews/review-pdf-match.jpg";
import reviewPaper from "../assets/reviews/review-paper.jpg";
import reviewEasy from "../assets/reviews/review-easy.jpg";

const appSlides = [
  { image: learningMaterialsScreenshot, alt: "CIPET GYAN learning materials screen", title: "Learning materials", text: "Choose between PDFs and video learning." },
  { image: myCoursesScreenshot, alt: "CIPET GYAN enrolled courses screen", title: "My courses", text: "Open your purchased resources from one place." },
  { image: newsScreenshot, alt: "CIPET GYAN news and updates screen", title: "News & updates", text: "Stay informed about new learning content." },
  { image: mockTestsScreenshot, alt: "CIPET GYAN mock tests screen", title: "Mock tests", text: "Practise questions and review your progress." },
  { image: myProfileScreenshot, alt: "CIPET GYAN profile screen", title: "My profile", text: "Keep your account and support details close." },
  { image: contentLibraryScreenshot, alt: "CIPET GYAN content library screen", title: "Content library", text: "Browse academic and entrance resources." },
  { image: signInScreenshot, alt: "CIPET GYAN sign in screen", title: "Sign in", text: "Access your learning space securely." },
  { image: resetPasswordScreenshot, alt: "CIPET GYAN reset password screen", title: "Reset password", text: "Recover access whenever you need it." },
];

const reviewItems = [
  { image: reviewSupport, name: "CIPET Student", review: "Thanks bhai. Aapka bahut sahyog raha is paper ko dilwane me, thanks a lot." },
  { image: reviewComplete, name: "CIPET Student", review: "Sir mera ho gaya, thank you." },
  { image: reviewGuidance, name: "CIPET Student", review: "Your support and guidance made my work much easier. I am sincerely grateful to you from the bottom of my heart." },
  { image: reviewPdfHelp, name: "CIPET Student", review: "Thank you so much sir for your support. Bahut zyada help hua apke PDF se." },
  { image: reviewPdfMatch, name: "CIPET Student", review: "Thank you sir. Aapke PDF se pata hai kitne questions same aaye the." },
  { image: reviewPaper, name: "Tanu Tiwari", review: "Overall questions paper easy to moderate tha bhaiya." },
  { image: reviewEasy, name: "MNIT Nav", review: "Paper easy tha. Aapne jo bataya bhi aaya. PDF 100 percent kaam kiya." },
];

const youtubeThumbnail = "https://img.youtube.com/vi/brwZfulNDag/hqdefault.jpg";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = appSlides[activeSlide];
  const previousSlide = appSlides[(activeSlide - 1 + appSlides.length) % appSlides.length];
  const nextSlide = appSlides[(activeSlide + 1) % appSlides.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % appSlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const moveSlide = (direction) => {
    setActiveSlide((current) => (current + direction + appSlides.length) % appSlides.length);
  };

  return (
    <>
      <Hero />
      <section className="promo-section" id="promo">
        <div className="page-container promo-grid">
          <div><span className="eyebrow">WATCH THE PLATFORM</span><h2>See how CIPET GYAN fits into your study day.</h2><p>Take a quick tour of the learning experience before you start exploring the resources.</p></div>
          <video className="promo-video" controls preload="metadata">
            <source src="/videos/cipet-gyan-promo.mp4" type="video/mp4" />
            Your browser does not support the promo video.
          </video>
        </div>
      </section>
      <section className="youtube-section" id="youtube">
        <div className="page-container youtube-card">
          <div><span className="eyebrow">WATCH ON YOUTUBE</span><h2>More CIPET guidance, in video.</h2><p>Explore CIPET updates, plastic engineering guidance, and study material on the CIPET GYAN channel.</p><a className="hero-button" href="https://youtu.be/brwZfulNDag?si=I9Zzsaysf-hzdQy3" target="_blank" rel="noreferrer"><PlayCircle size={17} aria-hidden="true" /> Watch video</a></div>
          <a className="youtube-thumbnail" href="https://youtu.be/brwZfulNDag?si=I9Zzsaysf-hzdQy3" target="_blank" rel="noreferrer" aria-label="Watch CIPET GYAN video on YouTube"><img src={youtubeThumbnail} alt="CIPET GYAN YouTube video thumbnail" /><span><PlayCircle size={34} fill="currentColor" aria-hidden="true" /></span></a>
        </div>
      </section>
      <section className="value-strip" aria-label="CIPET GYAN highlights">
        <div className="page-container value-grid">
          <span><FileCheck2 size={19} aria-hidden="true" /> Structured materials</span>
          <span><Compass size={19} aria-hidden="true" /> Clear syllabus direction</span>
          <span><Search size={19} aria-hidden="true" /> Practice-led learning</span>
        </div>
      </section>
      <section className="resources-section" id="resources">
        <div className="page-container">
          <div className="section-heading"><div><span className="eyebrow">START HERE</span><h2>Resources that make studying feel lighter.</h2></div><p>Find the right starting point for your next study session, then keep building from there.</p></div>
          <StudyMaterials />
        </div>
      </section>
      <section className="how-section" id="how-it-works">
        <div className="page-container how-grid">
          <div><span className="eyebrow">A SIMPLE RHYTHM</span><h2>Move from “where do I start?” to “I’ve got this.”</h2><p>Use the library in a sequence that matches how real study works: orient yourself, learn the core ideas, and practise what you know.</p><a className="text-link" href="#resources">Browse the library <ArrowRight size={17} aria-hidden="true" /></a></div>
          <div className="rhythm-list"><div><b>01</b><span><strong>Get oriented</strong><small>Use the syllabus to see the shape of your study.</small></span></div><div><b>02</b><span><strong>Go deeper</strong><small>Return to notes when a concept needs more time.</small></span></div><div><b>03</b><span><strong>Test your recall</strong><small>Use previous-year papers to practise deliberately.</small></span></div></div>
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="page-container about-card"><span className="eyebrow">WHY CIPET GYAN</span><h2>Less searching. More learning.</h2><p>CIPET GYAN brings essential study support into one focused place, so learners can spend more energy understanding the subject and less time finding their way around.</p><a className="hero-button" href="#resources">Find a resource <ArrowRight size={17} aria-hidden="true" /></a></div>
      </section>
      <section className="contact-section" id="contact">
        <div className="page-container contact-grid">
          <div><span className="eyebrow">CONTACT CIPET GYAN</span><h2>Need help with your account or learning content?</h2><p>For account, payment, refund, or educational-content queries, contact our support team.</p><a className="hero-button" href="mailto:abhishekdixit9719@gmail.com">View contact details <ArrowRight size={17} aria-hidden="true" /></a></div>
          <div className="contact-details">
            <a className="contact-detail" href="mailto:abhishekdixit9719@gmail.com"><span className="contact-icon"><Mail size={19} aria-hidden="true" /></span><span><strong>Email Support</strong><small>abhishekdixit9719@gmail.com</small></span></a>
          </div>
        </div>
      </section>
      <section className="reviews-section" id="reviews">
        <div className="page-container">
          <div className="section-heading"><div><span className="eyebrow">STUDENT REVIEWS</span><h2>Real words from CIPET learners.</h2></div><p>Support, PDFs, and guidance that helped students move forward.</p></div>
          <div className="reviews-grid">{reviewItems.map((item, index) => <article className="review-card" key={`${item.name}-${index}`}>{item.image && <img className="review-proof" src={item.image} alt="Cropped WhatsApp review message" />}<strong>{item.name}</strong><p>“{item.review}”</p></article>)}</div>
        </div>
      </section>
      <section className="app-showcase" id="app">
        <div className="page-container">
          <div className="section-heading"><div><span className="eyebrow">SEE IT IN ACTION</span><h2>A learning app made for everyday study.</h2></div><p>Keep your materials, courses, and progress close at hand wherever you learn.</p></div>
          <div className="app-carousel">
            <button className="carousel-arrow previous" type="button" onClick={() => moveSlide(-1)} aria-label="Previous app screen"><ArrowLeft size={19} /></button>
            <div className="carousel-viewport">
              <div className="carousel-track">
                {[{ item: previousSlide, position: "side" }, { item: slide, position: "is-active" }, { item: nextSlide, position: "side" }].map(({ item, position }) => <figure className={`carousel-slide ${position}`} key={`${position}-${item.title}`}><img src={item.image} alt={item.alt} /><figcaption><strong>{item.title}</strong><span>{item.text}</span></figcaption></figure>)}
              </div>
            </div>
            <button className="carousel-arrow next" type="button" onClick={() => moveSlide(1)} aria-label="Next app screen"><ArrowRight size={19} /></button>
          </div>
          <div className="carousel-dots" aria-label="App screen slides">{appSlides.map((item, index) => <button key={item.title} className={index === activeSlide ? "is-active" : ""} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show ${item.title}`} />)}</div>
        </div>
      </section>
    </>
  );
};

export default Home;