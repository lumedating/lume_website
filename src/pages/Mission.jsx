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
            At Lume, we believe dating should be fun, not frustrating. We're on
            a mission to reverse the declining rate of dating among college
            students by creating an experience that's engaging, authentic, and
            actually gets people on dates. While other dating apps have turned
            relationships into a swipe-based economy that profits from keeping
            users single and scrolling, we're flipping the script entirely.
          </p>
          <p className="mission-paragraph">
            Our business model is simple: we only make money when you go on
            dates. This fundamental shift aligns our success with yours—we win
            when you find meaningful connections, not when you're stuck in
            endless swiping. By removing the perverse incentives that plague
            traditional dating apps, we're building a platform that genuinely
            wants to see you succeed in finding love, friendship, or whatever
            connection you're seeking. We're here to make dating fun again and
            prove that ethical technology can change the game.
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
    </>
  );
}

export default Mission;
