import logo from "../assets/images/Lume Logo (NEW).png";
import spinner from "../assets/images/Loading Spinner.png";
import "./LoadingScreen.css";

function LoadingScreen({ exiting = false }) {
  return (
    <div
      className={`loading-screen${exiting ? " loading-screen--exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Lume"
      aria-hidden={exiting}
    >
      <div className="loading-screen-content">
        <img
          src={logo}
          alt="Lume"
          className="loading-screen-logo"
          width={160}
          height={45}
        />
        <img
          src={spinner}
          alt=""
          className="loading-screen-spinner"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
}

export default LoadingScreen;
