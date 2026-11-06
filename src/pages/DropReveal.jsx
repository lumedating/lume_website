import { Link, useSearchParams } from "react-router-dom";
import { APP_STORE_URL } from "../config/site";
import { useFontAwesome } from "../hooks/useFontAwesome";
import "./CheckIn.css";

function appOpenUrl(targetUserId, dailyDropDateKey) {
  const url = new URL("lume://drop-reveal");
  if (targetUserId) url.searchParams.set("targetUserId", targetUserId);
  if (dailyDropDateKey) url.searchParams.set("dailyDropDateKey", dailyDropDateKey);
  return url.toString();
}

/** Shown only when the app did not open the universal link. */
export default function DropReveal() {
  const [params] = useSearchParams();
  const targetUserId = params.get("targetUserId")?.trim() ?? "";
  const dailyDropDateKey = params.get("dailyDropDateKey")?.trim() ?? "";
  const fontAwesomeLoaded = useFontAwesome();

  return (
    <main className="checkin-page">
      <div className="checkin-content">
        <h1 className="checkin-title">Reveal your match</h1>
        <p className="checkin-body">
          Open the Lume app to see today&apos;s match. If Lume didn&apos;t open
          automatically, open it below, or get it from the App Store.
        </p>
        <a className="btn-get-lume checkin-store-btn" href={appOpenUrl(targetUserId, dailyDropDateKey)}>
          Open Lume
        </a>
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
