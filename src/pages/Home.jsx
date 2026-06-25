import { useEffect, useRef } from "react";
import heroScreenshots from "../assets/images/Lume Website Hero Screenshots.png";
import homeScreenshot from "../assets/images/Home Screenshot.png";
import gameScreenshot from "../assets/images/Game Screenshot.png";
import dateDetailsScreenshot from "../assets/images/Date Details Screenshot.png";
import { useFontAwesome } from "../hooks/useFontAwesome";
import "../App.css";

function Home() {
  const fontAwesomeLoaded = useFontAwesome();
  const observerRef = useRef(null);

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

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-on-scroll">
              The Dating Game
              <br />
              for UT Austin
            </h1>
            <p className="hero-description animate-on-scroll">
              Every day, Lume drops a new match. Play a quick Kahoot-like trivia
              game about their profile. If you both win, we'll set up a real
              date!
            </p>
            <button
              className="btn-app-store"
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
              Curated matches from UT.
              <br />
              Dropped randomly once a day.
            </p>
            <img
              src={homeScreenshot}
              alt="Lume home screen"
              className="step-screenshot"
            />
          </div>
          <div className="step-panel">
            <p className="step-text animate-on-scroll">
              Play trivia about your match.
              <br />
              Win? You're going on a date!
            </p>
            <img
              src={gameScreenshot}
              alt="Game screenshot"
              className="step-screenshot"
            />
          </div>
          <div className="step-panel">
            <p className="step-text animate-on-scroll">
              Lume plans the date for you.
              <br />
              Just show up and enjoy.
            </p>
            <img
              src={dateDetailsScreenshot}
              alt="Date details screenshot"
              className="step-screenshot"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2 className="footer-text">Click these if you're cool</h2>
        <div className="footer-buttons">
          <button
            className="btn-app-store-footer"
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
          <button
            className="btn-instagram"
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
            <div className="btn-text-wrapper">
              <span className="btn-text-small">Follow us on</span>
              <span className="btn-text-large">Instagram</span>
            </div>
          </button>
        </div>
      </footer>
    </>
  );
}

export default Home;
