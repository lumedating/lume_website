import { useState } from "react";
import "../App.css";
import img0428 from "../assets/images/gallery/IMG_0428.png";
import img0506 from "../assets/images/gallery/IMG_0506.png";
import img0507 from "../assets/images/gallery/IMG_0507.png";
import img0509 from "../assets/images/gallery/IMG_0509 2.png";
import img8214 from "../assets/images/gallery/IMG_8214.png";

const galleryImages = [img0428, img0506, img0507, img0509, img8214];

function Mission() {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const isImageLoaded = (index) => {
    return loadedImages.has(index);
  };
  return (
    <>
      {/* Title Section */}
      <section className="mission-hero">
        <div className="mission-hero-content">
          <h1 className="mission-title">Mission</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <p className="mission-paragraph">
            We believe{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                dating should be fun, not frustrating
              </em>
            </strong>
            . We believe college students deserve better than endless swiping
            and empty conversations that go nowhere. We believe the best way to
            build real relationships is through actual dates, not algorithms.
            That's why we built Lume. Our mission is to{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                reverse the declining rate of dating among college students
              </em>
            </strong>{" "}
            by creating an experience that's engaging, authentic, and actually
            gets people on dates. We're here to make dating fun again by turning
            it into a game, and we're committed to aligning our success with
            yours: we only win when you go out and meet people.
          </p>
          <p className="mission-paragraph">
            While other dating apps profit from keeping you single and
            scrolling, we've flipped the model entirely. Restaurants pay us to
            suggest them as date spots, which means{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                we make money when you go on dates, not when you're stuck on our
                app
              </em>
            </strong>
            . This fundamental shift means we're genuinely invested in your
            success. We're not here to build a better matching algorithm or a
            longer personality test. We're here to{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                make dating less of a chore and more of a game
              </em>
            </strong>
            , and to prove that when incentives align, technology can actually
            help you find the connections you're seeking.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-track">
            {galleryImages.map((img, index) => (
              <div
                key={`img-wrapper-${index}`}
                className="gallery-image-wrapper"
              >
                {!isImageLoaded(index) && (
                  <div className="gallery-skeleton"></div>
                )}
                <img
                  key={`img-${index}`}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className={`gallery-image ${
                    isImageLoaded(index) ? "loaded" : "loading"
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
            {galleryImages.map((img, index) => (
              <div
                key={`img-duplicate-wrapper-${index}`}
                className="gallery-image-wrapper"
              >
                {!isImageLoaded(index) && (
                  <div className="gallery-skeleton"></div>
                )}
                <img
                  key={`img-duplicate-${index}`}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className={`gallery-image ${
                    isImageLoaded(index) ? "loaded" : "loading"
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2 className="footer-text">Want to help us on our mission?</h2>
        <div className="footer-buttons">
          <button
            className="btn-app-store-footer"
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <svg
              className="apple-logo"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M15.5 0C15.8 1.3 15.2 2.6 14.4 3.4C13.6 4.3 12.2 5 11 4.8C10.7 3.5 11.3 2.3 12.1 1.4C12.9 0.5 14.3 0 15.5 0ZM16.5 6.2C14.8 6 13.2 6.8 12.2 6.8C11.2 6.8 9.9 6.1 8.4 6.2C6.4 6.3 4.6 7.2 3.5 8.8C1.3 11.9 2.7 16.5 4.7 19.3C5.7 20.7 6.9 22.2 8.4 22.1C9.9 22 10.4 21.2 12.1 21.2C13.8 21.2 14.2 22.1 15.8 22C17.3 21.9 18.3 20.6 19.3 19.2C20.4 17.7 20.8 16.2 20.9 16.1C20.8 16.1 17.1 14.9 17 11.1C16.9 7.7 20.1 6.4 16.5 6.2Z"
                fill="currentColor"
              />
            </svg>
            <div className="btn-text-wrapper">
              <span className="btn-text-small">Download on the</span>
              <span className="btn-text-large">App Store</span>
            </div>
          </button>
          <button
            className="btn-instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/lumedating/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <svg
              className="instagram-logo"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 0C7.3 0 6.9 0.01 5.8 0.06C4.7 0.11 3.9 0.29 3.2 0.55C2.4 0.84 1.8 1.18 1.2 1.8C0.6 2.4 0.26 3 0 3.7C-0.26 4.4 -0.44 5.2 -0.49 6.3C-0.54 7.4 -0.55 7.8 -0.55 10.5C-0.55 13.2 -0.54 13.6 -0.49 14.7C-0.44 15.8 -0.26 16.6 0 17.3C0.26 18 0.6 18.6 1.2 19.2C1.8 19.8 2.4 20.16 3.1 20.45C3.8 20.71 4.6 20.89 5.7 20.94C6.8 20.99 7.2 21 9.9 21C12.6 21 13 20.99 14.1 20.94C15.2 20.89 16 20.71 16.7 20.45C17.4 20.16 18 19.8 18.6 19.2C19.2 18.6 19.56 18 19.85 17.3C20.11 16.6 20.29 15.8 20.34 14.7C20.39 13.6 20.4 13.2 20.4 10.5C20.4 7.8 20.39 7.4 20.34 6.3C20.29 5.2 20.11 4.4 19.85 3.7C19.56 3 19.2 2.4 18.6 1.8C18 1.18 17.4 0.84 16.7 0.55C16 0.29 15.2 0.11 14.1 0.06C13 0.01 12.6 0 9.9 0H10ZM9.1 1.8C9.4 1.8 9.7 1.8 10 1.8C12.6 1.8 13 1.81 14.1 1.86C15.1 1.91 15.7 2.08 16.1 2.19C16.6 2.35 17 2.55 17.3 2.85C17.6 3.15 17.8 3.55 17.96 4.05C18.07 4.45 18.24 5.05 18.29 6.05C18.34 7.15 18.35 7.55 18.35 10.15C18.35 12.75 18.34 13.15 18.29 14.25C18.24 15.25 18.07 15.85 17.96 16.25C17.8 16.75 17.6 17.15 17.3 17.45C17 17.75 16.6 17.95 16.1 18.11C15.7 18.22 15.1 18.39 14.1 18.44C13 18.49 12.6 18.5 10 18.5C7.4 18.5 7 18.49 5.9 18.44C4.9 18.39 4.3 18.22 3.9 18.11C3.4 17.95 3 17.75 2.7 17.45C2.4 17.15 2.2 16.75 2.04 16.25C1.93 15.85 1.76 15.25 1.71 14.25C1.66 13.15 1.65 12.75 1.65 10.15C1.65 7.55 1.66 7.15 1.71 6.05C1.76 5.05 1.93 4.45 2.04 4.05C2.2 3.55 2.4 3.15 2.7 2.85C3 2.55 3.4 2.35 3.9 2.19C4.3 2.08 4.9 1.91 5.9 1.86C7 1.81 7.4 1.8 10 1.8H9.1Z"
                fill="currentColor"
              />
              <path
                d="M10 4.9C7.2 4.9 5 7.1 5 9.9C5 12.7 7.2 14.9 10 14.9C12.8 14.9 15 12.7 15 9.9C15 7.1 12.8 4.9 10 4.9ZM10 13.1C8.3 13.1 6.9 11.7 6.9 9.9C6.9 8.2 8.3 6.8 10 6.8C11.7 6.8 13.1 8.2 13.1 9.9C13.1 11.7 11.7 13.1 10 13.1Z"
                fill="currentColor"
              />
              <path
                d="M15.3 3.5C15.3 4.2 14.7 4.8 14 4.8C13.3 4.8 12.7 4.2 12.7 3.5C12.7 2.8 13.3 2.2 14 2.2C14.7 2.2 15.3 2.8 15.3 3.5Z"
                fill="currentColor"
              />
            </svg>
            <div className="btn-text-wrapper">
              <span className="btn-text-small">Follow us on</span>
              <span className="btn-text-large">Instagram</span>
            </div>
          </button>
        </div>
      </footer>
    </>
  );
}

export default Mission;
