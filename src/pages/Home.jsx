import { useState, useEffect } from "react";
import heroScreenshots from "../assets/images/Lume Website Hero Screenshots.png";
import gameWheel from "../assets/images/Game Wheel.png";
import wordUnscrambleBackground from "../assets/images/Word Unscramble Background.png";
import rizzQuizBackground from "../assets/images/Rizz Quiz Background.png";
import greenFlagBackground from "../assets/images/Green Flag Background.png";
import "../App.css";

const games = [
  {
    name: "Word Unscramble",
    description:
      "Reveal the answer to your opponent's question by unscrambling the letters before time runs out.",
    background: wordUnscrambleBackground,
    backgroundColor: "#ffd900",
  },
  {
    name: "Rizz Quiz",
    description:
      "Test your knowledge of pickup line rizz and see if you can guess which one your match would respond to.",
    background: rizzQuizBackground,
    backgroundColor: "#de2c2c",
  },
  {
    name: "Green Flag?",
    description:
      "For each contrivertial statement, guess if your match thinks it's a red flag or a green flag.",
    background: greenFlagBackground,
    backgroundColor: "#00ed6b",
  },
];

function Home() {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const animationDuration = 12000; // 12 seconds for full rotation
    const gameDuration = animationDuration / games.length; // 4 seconds per game

    const updateGameIndex = () => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = (currentTime - startTime) % animationDuration;
        const newIndex = Math.floor((elapsed / gameDuration) % games.length);
        setCurrentGameIndex(newIndex);
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    updateGameIndex();
  }, []);

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
    <>
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
              <i className="fa-brands fa-apple apple-logo"></i>
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
        style={{
          backgroundImage: `url(${currentGame.background})`,
          backgroundColor: currentGame.backgroundColor,
        }}
      >
        <div className="games-content">
          <div className="games-left">
            <img
              src={gameWheel}
              alt="Game wheel"
              className="game-wheel-image"
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
        <h2 className="footer-text">Click these if you're cool</h2>
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
            <i className="fa-brands fa-apple apple-logo"></i>
            <div className="btn-text-wrapper">
              <span className="btn-text-small">Download on the</span>
              <span className="btn-text-large">App Store</span>
            </div>
          </button>
          <button
            className="btn-instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/lumeapp/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <i className="fa-brands fa-instagram instagram-logo"></i>
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
