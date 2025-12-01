import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "../assets/images/Lume App Icon.png";
import "../App.css";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <header
      className={`header ${
        isHeaderVisible ? "header-visible" : "header-hidden"
      }`}
    >
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
          <button
            className="btn-get-lume"
            onClick={() => {
              handleNavClick();
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
  );
}

export default Header;

