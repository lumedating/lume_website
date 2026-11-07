import { Link } from "react-router-dom";
import { APP_STORE_URL } from "../config/site";
import { useFontAwesome } from "../hooks/useFontAwesome";
import "./CheckIn.css";

/** Shown only when the app did not open the universal link. */
export default function OpenHome() {
  const fontAwesomeLoaded = useFontAwesome();

  return (
    <main className="checkin-page">
      <div className="checkin-content">
        <h1 className="checkin-title">Open Lume</h1>
        <p className="checkin-body">
          Open the Lume app to get to your home. If Lume didn&apos;t open
          automatically, get it from the App Store.
        </p>
        <a
          className="btn-get-lume checkin-store-btn"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {fontAwesomeLoaded && (
            <i className="fa-brands fa-apple apple-logo" aria-hidden="true" />
          )}
          Get Lume
        </a>
        <Link className="checkin-home-link" to="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
