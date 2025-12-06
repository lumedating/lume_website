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
            <i className="fa-brands fa-apple apple-logo"></i>
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
            <i className="fa-brands fa-instagram instagram-logo"></i>
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
