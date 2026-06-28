import profilePicture from "../assets/images/Instagram Profile Picture.png";
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
        <div className="loading-screen-waves" aria-hidden="true">
          <span className="loading-screen-wave" />
          <span className="loading-screen-wave" />
          <span className="loading-screen-wave" />
        </div>
        <img
          src={profilePicture}
          alt=""
          className="loading-screen-image"
          width={112}
          height={112}
        />
      </div>
    </div>
  );
}

export default LoadingScreen;
