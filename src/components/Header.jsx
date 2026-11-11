import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Lume Logo (NEW).png";
import moneyIllustration from "../assets/images/Money Illustration.png";
import { useFontAwesome } from "../hooks/useFontAwesome";
import { APP_STORE_URL, SHOW_PROMO_BANNER } from "../config/site";
import "../App.css";

const PROMO_BANNER_MESSAGE = "We're paying for the next 50 dates on Lume.";

function PromoBannerMessage() {
  return (
    <span className="promo-banner-item">
      we&apos;re paying for the next 50 dates on lume
      <span className="promo-banner-money-slot">
        <img
          src={moneyIllustration}
          alt=""
          className="promo-banner-money"
        />
      </span>
    </span>
  );
}

function Header() {
  const location = useLocation();
  const fontAwesomeLoaded = useFontAwesome();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openAppStore = () => {
    window.open(APP_STORE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-header">
      {SHOW_PROMO_BANNER && (
        <a
          className="promo-banner"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={PROMO_BANNER_MESSAGE}
        >
          <span className="promo-banner-track" aria-hidden="true">
            {[0, 1].map((group) => (
              <span className="promo-banner-group" key={group}>
                {Array.from({ length: 6 }, (_, index) => (
                  <PromoBannerMessage key={index} />
                ))}
              </span>
            ))}
          </span>
        </a>
      )}
      <header className="header">
        <div className="header-content">
          <Link
            to="/"
            className="logo"
            onClick={handleLogoClick}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="Lume" className="logo-icon" />
          </Link>
          <button type="button" className="btn-get-lume" onClick={openAppStore}>
            {fontAwesomeLoaded && (
              <i className="fa-brands fa-apple apple-logo" />
            )}
            Get Lume
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
