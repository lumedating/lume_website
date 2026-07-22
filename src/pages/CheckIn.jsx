import { Link, useParams } from "react-router-dom";
import { APP_STORE_URL } from "../config/site";
import "./CheckIn.css";

export default function CheckIn() {
  const { id } = useParams();

  return (
    <main className="checkin-page">
      <div className="checkin-card">
        <h1 className="checkin-title">Check in to your date</h1>
        <p className="checkin-body">
          Open the Lume app to confirm you&apos;re at the right spot. If Lume
          didn&apos;t open automatically, get it from the App Store and scan
          the venue QR again.
        </p>
        {id ? (
          <p className="checkin-id" aria-hidden="true">
            Venue code: {id}
          </p>
        ) : null}
        <a
          className="checkin-store-button"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Lume on the App Store
        </a>
        <Link className="checkin-home-link" to="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
