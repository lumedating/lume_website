import { useEffect, useLayoutEffect, useRef, useState } from "react";
import heroScreenshots from "../assets/images/Lume Website Hero Screenshots.png";
import homeScreenshot from "../assets/images/Home Screenshot.png";
import gameScreenshot from "../assets/images/Game Screenshot.png";
import dateDetailsScreenshot from "../assets/images/Date Details Screenshot.png";
import { useFontAwesome } from "../hooks/useFontAwesome";
import FooterConfetti from "../components/FooterConfetti";
import "../App.css";

const FAQ_ITEMS = [
  {
    question: "how do you pick my matches each day?",
    answer:
      "Lume uses AI to analyze your profile, including your interests, hobbies, ambitions, and more, and compares it with other users to find your most compatible match. You get one curated match dropped each day at a random time.",
  },
  {
    question: "how do you verify users to make sure they go to UT?",
    answer:
      "Every new user must sign up with a verified @utexas.edu email before creating an account. That way, only real UT Austin students are on Lume.",
  },
  {
    question: "what happens if i lose the game?",
    answer:
      "If you lose the game, you won't get to go on a date with that day's match. You'll get a fresh chance to play again tomorrow with an equally great match.",
  },
  {
    question: "what happens after I win the game?",
    answer:
      "If you and your match both win and say yes to a date, Lume plans it for you based on both of your availability. We'll provide the date, time, and location, and all you have to do is show up.",
  },
];

function FaqItem({ item, isOpen, onToggle, fontAwesomeLoaded }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    setHeight(isOpen ? content.scrollHeight : 0);
  }, [isOpen, item.answer]);

  useEffect(() => {
    if (!isOpen) return;

    const updateHeight = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isOpen, item.answer]);

  return (
    <div className={`faq-item${isOpen ? " faq-item-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        {fontAwesomeLoaded && (
          <i className="fa-solid fa-chevron-down faq-chevron"></i>
        )}
      </button>
      <div
        className="faq-answer-wrapper"
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="faq-answer-inner">
          <p className="faq-answer">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const fontAwesomeLoaded = useFontAwesome();
  const observerRef = useRef(null);
  const footerRef = useRef(null);
  const hasConfettiFiredRef = useRef(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showFooterConfetti, setShowFooterConfetti] = useState(false);

  useEffect(() => {
    // Wait for DOM to be ready and elements to exist before querying
    let retryCount = 0;
    const maxRetries = 10; // Maximum 1 second of retries (10 * 100ms)
    let timeoutId = null;

    const setupObserver = () => {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        const elements = document.querySelectorAll(".animate-on-scroll");

        // If no elements found, try again after a short delay (with retry limit)
        if (elements.length === 0 && retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(setupObserver, 100);
          return;
        }

        // Only set up observer if elements exist
        if (elements.length > 0) {
          const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animated");
              }
            });
          }, observerOptions);

          elements.forEach((el) => observer.observe(el));
          observerRef.current = observer;
        }
      });
    };

    setupObserver();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasConfettiFiredRef.current) {
          hasConfettiFiredRef.current = true;
          setShowFooterConfetti(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-on-scroll">
              The Dating
              <br />
              Game for
              <br />
              UT Austin
            </h1>
            <p className="hero-description animate-on-scroll">
              Every day, Lume drops a new match. Play a quick Kahoot-like trivia
              game about their profile. If you both win, we'll set up a real
              date!
            </p>
            <button
              className="btn-app-store hero-app-store-btn"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              {fontAwesomeLoaded && (
                <i className="fa-brands fa-apple apple-logo"></i>
              )}
              <div className="btn-text-wrapper">
                <span className="btn-text-small">Download on the</span>
                <span className="btn-text-large">App Store</span>
              </div>
            </button>
          </div>
          <div className="hero-phones">
            <img
              src={heroScreenshots}
              alt="Lume app screenshots"
              className="hero-screenshots"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="how-it-works-content">
          <div className="step-panel">
            <p className="step-text animate-on-scroll">
              We drop you a curated match at a random time every day.
            </p>
            <img
              src={homeScreenshot}
              alt="Lume home screen"
              className="step-screenshot"
            />
          </div>
          <div className="step-panel">
            <p className="step-text animate-on-scroll">
              Play a quick, Kahoot-style game about your match.
            </p>
            <img
              src={gameScreenshot}
              alt="Game screenshot"
              className="step-screenshot"
            />
          </div>
          <div className="step-panel">
            <p className="step-text animate-on-scroll">
              Win the game, win the date! We’ll plan everything 😉
            </p>
            <img
              src={dateDetailsScreenshot}
              alt="Date details screenshot"
              className="step-screenshot"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openFaqIndex === index}
              onToggle={() =>
                setOpenFaqIndex(openFaqIndex === index ? null : index)
              }
              fontAwesomeLoaded={fontAwesomeLoaded}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" ref={footerRef}>
        {showFooterConfetti && (
          <FooterConfetti onComplete={() => setShowFooterConfetti(false)} />
        )}
        <h2 className="footer-text">Click these if you're cool</h2>
        <div className="footer-buttons">
          <button
            className="btn-app-store-footer btn-cta"
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            {fontAwesomeLoaded && (
              <i className="fa-brands fa-apple apple-logo"></i>
            )}
            <div className="btn-text-wrapper btn-cta-label-desktop">
              <span className="btn-text-small">Download on the</span>
              <span className="btn-text-large">App Store</span>
            </div>
            <span className="btn-cta-label-mobile">Get Lume</span>
          </button>
          <button
            className="btn-instagram btn-cta"
            onClick={() =>
              window.open(
                "https://www.instagram.com/lumedating/",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            {fontAwesomeLoaded && (
              <i className="fa-brands fa-instagram instagram-logo"></i>
            )}
            <div className="btn-text-wrapper btn-cta-label-desktop">
              <span className="btn-text-small">Follow us on</span>
              <span className="btn-text-large">Instagram</span>
            </div>
            <span className="btn-cta-label-mobile">Follow Our Instagram</span>
          </button>
        </div>
      </footer>
    </>
  );
}

export default Home;
