import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Lume Logo (Updated).png";
import { APP_STORE_URL, INSTAGRAM_URL } from "../config/site";
import { useFontAwesome } from "../hooks/useFontAwesome";
import "../App.css";

function FooterLinkContent({ children, fontAwesomeLoaded }) {
  return (
    <>
      {children}
      {fontAwesomeLoaded && (
        <i
          className="fa-solid fa-arrow-right site-footer-link-icon"
          aria-hidden="true"
        />
      )}
    </>
  );
}

function Footer() {
  const location = useLocation();
  const fontAwesomeLoaded = useFontAwesome();

  const handleJoinTeamClick = () => {
    if (location.pathname === "/team") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <div className="site-footer-brand">
          <div className="site-footer-logo">
            <img src={logo} alt="Lume" className="logo-icon" />
          </div>
          <p className="site-footer-text">© 2024 Lume. All rights reserved.</p>
        </div>
        <div className="site-footer-columns">
          <div className="site-footer-column">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-link"
            >
              <FooterLinkContent fontAwesomeLoaded={fontAwesomeLoaded}>
                Download on iOS
              </FooterLinkContent>
            </a>
            <Link
              to="/team"
              className="site-footer-link"
              onClick={handleJoinTeamClick}
            >
              <FooterLinkContent fontAwesomeLoaded={fontAwesomeLoaded}>
                Join the team
              </FooterLinkContent>
            </Link>
            <Link to="/mission" className="site-footer-link">
              <FooterLinkContent fontAwesomeLoaded={fontAwesomeLoaded}>
                Our mission
              </FooterLinkContent>
            </Link>
          </div>
          <div className="site-footer-column">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-link"
            >
              <FooterLinkContent fontAwesomeLoaded={fontAwesomeLoaded}>
                Follow us on Instagram
              </FooterLinkContent>
            </a>
            <Link to="/PrivacyPolicy" className="site-footer-link">
              <FooterLinkContent fontAwesomeLoaded={fontAwesomeLoaded}>
                Privacy policy
              </FooterLinkContent>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
