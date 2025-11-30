import { useState, useEffect } from "react";
import "./App.css";
import heroScreenshots from "./assets/images/Lume Website Hero Screenshots.png";
import gameWheel from "./assets/images/Game Wheel.png";
import logoIcon from "./assets/images/Lume App Icon.png";
import wordUnscrambleBackground from "./assets/images/Word Unscramble Background.png";
import rizzQuizBackground from "./assets/images/Rizz Quiz Background.png";
import greenFlagBackground from "./assets/images/Green Flag Background.png";

const games = [
  {
    name: "Word Unscramble",
    description:
      "Reveal the answer to your opponent's question by unscrambling the letters before time runs out.",
    background: wordUnscrambleBackground,
  },
  {
    name: "Rizz Quiz",
    description:
      "Test your knowledge of pickup line rizz and see if you can guess which one your match would respond to.",
    background: rizzQuizBackground,
  },
  {
    name: "Green Flag?",
    description:
      "For each contrivertial statement, guess if your match thinks it's a red flag or a green flag.",
    background: greenFlagBackground,
  },
];

function App() {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
      ? 202.5 - 180
      : 292.5
  );
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Update rotation if switching between mobile and desktop
      if (mobile && wheelRotation === 292.5) {
        setWheelRotation(202.5);
      } else if (!mobile && wheelRotation === 202.5) {
        setWheelRotation(292.5);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [wheelRotation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % games.length;
        // Normal rotation: 85 degrees (slightly less than 90)
        // When going from Rizz Quiz (index 1) to Green Flag? (index 2),
        // we skip the Random section, so rotate 170 degrees (twice the normal amount)
        const rotationAmount = prevIndex === 2 && nextIndex === 0 ? 45 : 22.5;
        setWheelRotation((prevRotation) => prevRotation + rotationAmount);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show header at the very top
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
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

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const currentGame = games[currentGameIndex];
  return (
    <div className="app">
      {/* Header */}
      <header
        className={`header ${
          isHeaderVisible ? "header-visible" : "header-hidden"
        }`}
      >
        <div className="header-content">
          <div
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ cursor: "pointer" }}
          >
            <img src={logoIcon} alt="Lume" className="logo-icon" />
            <span className="logo-text">lume</span>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const element = document.getElementById("how-it-works");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              How It Works
            </a>
            <a href="#mission" onClick={() => setIsMenuOpen(false)}>
              Mission
            </a>
            <a href="#team" onClick={() => setIsMenuOpen(false)}>
              Team
            </a>
            <button
              className="btn-get-lume"
              onClick={() => {
                setIsMenuOpen(false);
                window.open(
                  "https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Get Lume
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-on-scroll">
              The mobile dating game
            </h1>
            <p className="hero-description animate-on-scroll">
              We built a dating game show in your pocket! Play quick games to
              learn more about potential matches, unlock their profiles, and go
              on dates.
            </p>
            <button
              className="btn-app-store"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <svg
                className="apple-logo"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
              >
                <path
                  d="M15.5 0C15.8 1.3 15.2 2.6 14.4 3.4C13.6 4.3 12.2 5 11 4.8C10.7 3.5 11.3 2.3 12.1 1.4C12.9 0.5 14.3 0 15.5 0ZM16.5 6.2C14.8 6 13.2 6.8 12.2 6.8C11.2 6.8 9.9 6.1 8.4 6.2C6.4 6.3 4.6 7.2 3.5 8.8C1.3 11.9 2.7 16.5 4.7 19.3C5.7 20.7 6.9 22.2 8.4 22.1C9.9 22 10.4 21.2 12.1 21.2C13.8 21.2 14.2 22.1 15.8 22C17.3 21.9 18.3 20.6 19.3 19.2C20.4 17.7 20.8 16.2 20.9 16.1C20.8 16.1 17.1 14.9 17 11.1C16.9 7.7 20.1 6.4 16.5 6.2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="btn-text-wrapper">
                <span className="btn-text-small">Download on the</span>
                <span className="btn-text-large">App Store</span>
              </span>
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
            <div className="step-number">1</div>
            <p className="step-text animate-on-scroll">
              Play a quick game to get to know another student with a locked
              profile
            </p>
          </div>
          <div className="step-panel">
            <div className="step-number">2</div>
            <p className="step-text animate-on-scroll">
              If you win, you unlock their profile and reveal their photos and
              info!
            </p>
          </div>
          <div className="step-panel">
            <div className="step-number">3</div>
            <p className="step-text animate-on-scroll">
              If you both unlock each other's profiles, open up a chat or meet
              IRL
            </p>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section
        className="games"
        style={{ backgroundImage: `url(${currentGame.background})` }}
      >
        <div className="games-content">
          <div className="games-left">
            <img
              src={gameWheel}
              alt="Game wheel"
              className="game-wheel-image"
              style={{
                transform: isMobile
                  ? `translateX(0) translateY(275px) rotate(${wheelRotation}deg)`
                  : `translateX(-275px) rotate(${wheelRotation}deg)`,
              }}
            />
          </div>
          <div className="games-center">
            <button className="btn-what-are-games">WHAT ARE THE GAMES?</button>
            <h2
              key={currentGameIndex}
              className="game-title game-text-animate"
              style={{
                color: currentGame.name === "Rizz Quiz" ? "#ffffff" : "#000000",
              }}
            >
              {currentGame.name}
            </h2>
            <p
              key={`desc-${currentGameIndex}`}
              className="game-description game-text-animate"
              style={{
                color: currentGame.name === "Rizz Quiz" ? "#ffffff" : "#000000",
              }}
            >
              {currentGame.description}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text animate-on-scroll">
          Click these if you're cool.
        </p>
        <div className="footer-buttons">
          <button
            className="btn-app-store-footer"
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <svg
              className="apple-logo"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M15.5 0C15.8 1.3 15.2 2.6 14.4 3.4C13.6 4.3 12.2 5 11 4.8C10.7 3.5 11.3 2.3 12.1 1.4C12.9 0.5 14.3 0 15.5 0ZM16.5 6.2C14.8 6 13.2 6.8 12.2 6.8C11.2 6.8 9.9 6.1 8.4 6.2C6.4 6.3 4.6 7.2 3.5 8.8C1.3 11.9 2.7 16.5 4.7 19.3C5.7 20.7 6.9 22.2 8.4 22.1C9.9 22 10.4 21.2 12.1 21.2C13.8 21.2 14.2 22.1 15.8 22C17.3 21.9 18.3 20.6 19.3 19.2C20.4 17.7 20.8 16.2 20.9 16.1C20.8 16.1 17.1 14.9 17 11.1C16.9 7.7 20.1 6.4 16.5 6.2Z"
                fill="currentColor"
              />
            </svg>
            <span className="btn-text-wrapper">
              <span className="btn-text-small">Download on the</span>
              <span className="btn-text-large">App Store</span>
            </span>
          </button>
          <button
            className="btn-instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/lumedating/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <svg
              className="instagram-logo"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="currentColor"
              />
            </svg>
            <span className="btn-text-wrapper">
              <span className="btn-text-small">Follow us on</span>
              <span className="btn-text-large">Instagram</span>
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
