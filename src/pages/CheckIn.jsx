import { Link, useParams } from "react-router-dom";
import { APP_STORE_URL } from "../config/site";
import { useFontAwesome } from "../hooks/useFontAwesome";
import "./CheckIn.css";

export default function CheckIn() {
  const { id } = useParams();
  const fontAwesomeLoaded = useFontAwesome();

  return (
    <main className="checkin-page">
      <div className="checkin-content">
        <h1 className="checkin-title">Check in to your date</h1>
        <p className="checkin-body">
          Open the Lume app to confirm you&apos;re at the right spot. If Lume
          didn&apos;t open automatically, get it from the App Store and scan the
          venue QR again.
        </p>
        {id ? (
          <p className="checkin-id" aria-hidden="true">
            Venue code: {id}
          </p>
        ) : null}
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
