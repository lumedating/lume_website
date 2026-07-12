import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Lume Logo (Updated).png";
import { useFontAwesome } from "../hooks/useFontAwesome";
import { APP_STORE_URL } from "../config/site";
import "../App.css";

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
