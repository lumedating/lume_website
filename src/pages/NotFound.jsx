import { Link } from "react-router-dom";
import { useFontAwesome } from "../hooks/useFontAwesome";
import errorImage from "../assets/images/404 Error Image.png";
import "./NotFound.css";

function NotFound() {
  const fontAwesomeLoaded = useFontAwesome();

  return (
    <div className="not-found">
      <div className="not-found-content">
        <img
          src={errorImage}
          alt=""
          className="not-found-image"
          aria-hidden="true"
        />
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-message">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" className="btn-get-lume not-found-home-btn">
          {fontAwesomeLoaded && (
            <i
              className="fa-solid fa-house not-found-home-icon"
              aria-hidden="true"
            />
          )}
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
