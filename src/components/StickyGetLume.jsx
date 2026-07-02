import { useFontAwesome } from "../hooks/useFontAwesome";
import "../App.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265";

function StickyGetLume() {
  const fontAwesomeLoaded = useFontAwesome();

  return (
    <div className="sticky-get-lume">
      <div className="sticky-get-lume-blur" aria-hidden="true" />
      <button
        type="button"
        className="btn-app-store-footer btn-cta sticky-get-lume-btn"
        onClick={() =>
          window.open(APP_STORE_URL, "_blank", "noopener,noreferrer")
        }
      >
        {fontAwesomeLoaded && (
          <i className="fa-brands fa-apple apple-logo" aria-hidden="true" />
        )}
        <span className="btn-cta-label-mobile">Get Lume</span>
      </button>
    </div>
  );
}

export default StickyGetLume;
