import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "../assets/images/Lume App Icon.png";
import { useFontAwesome } from "../hooks/useFontAwesome";
import { SHOW_PROMO_BANNER } from "../config/site";
import "../App.css";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const fontAwesomeLoaded = useFontAwesome();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isMenuOpen]);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`site-header ${
        isHeaderVisible ? "site-header-visible" : "site-header-hidden"
      }`}
    >
      {SHOW_PROMO_BANNER && (
        <a
          className="promo-banner"
          href="https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Lume now and we&apos;ll pay for your first date!
        </a>
      )}
      <header className="header">
      <div className="header-content">
        <Link
          to="/"
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <img src={logoIcon} alt="Lume" className="logo-icon" />
          <span className="logo-text">lume</span>
        </Link>
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
          {location.pathname === "/" ? (
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick();
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
          ) : (
            <Link to="/#how-it-works" onClick={handleNavClick}>
              How It Works
            </Link>
          )}
          <Link to="/mission" onClick={handleNavClick}>
            Mission
          </Link>
          <Link to="/team" onClick={handleNavClick}>
            Team
          </Link>
          <button
            className="btn-get-lume nav-get-lume-desktop"
            onClick={() => {
              handleNavClick();
              window.open(
                "https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            {fontAwesomeLoaded && (
              <i className="fa-brands fa-apple apple-logo"></i>
            )}
            Get Lume
          </button>
        </nav>
      </div>
      </header>
    </div>
  );
}

export default Header;

