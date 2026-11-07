import { useParams } from "react-router-dom";
import { APP_STORE_URL } from "../config/site";
import { useFontAwesome } from "../hooks/useFontAwesome";
import "./CheckIn.css";
import "./Invite.css";

/** Shown when the Lume app did not open the invite link. */
export default function Invite() {
  const { code } = useParams();
  const fontAwesomeLoaded = useFontAwesome();
  const inviteCode = typeof code === "string" ? code.toUpperCase() : "";

  return (
    <main className="checkin-page">
      <div className="checkin-content">
        <h1 className="checkin-title invite-title">
          Your code is
          {inviteCode ? (
            <span className="invite-code-card">{inviteCode}</span>
          ) : null}
        </h1>
        <p className="checkin-body">
          Make a lume profile and get a free photo reveal for you and your
          friend! your friend&apos;s code is autofilled if you reopen this link
          after lume is installed. you can also type it manually during signup.
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
      </div>
    </main>
  );
}
