import { useState, useRef, useEffect, useCallback } from "react";
import "../App.css";
import { useFontAwesome } from "../hooks/useFontAwesome";
import img0506 from "../assets/images/gallery/IMG_0506.png";
import img0507 from "../assets/images/gallery/IMG_0507.png";
import img0509 from "../assets/images/gallery/IMG_0509 2.png";
import img8214 from "../assets/images/gallery/IMG_8214.png";
import imgCandyCanes from "../assets/images/gallery/Giving Out Candy Canes.PNG";
import imgLumeVsTinder from "../assets/images/gallery/Lume VS Tinder Content.PNG";
import imgPolarPlunge from "../assets/images/gallery/Polar Plunge Lume Challenge.png";
import imgRakuSushi from "../assets/images/gallery/Raku Sushi Table Card.JPEG";

const galleryImages = [
  img0506,
  img0507,
  img0509,
  img8214,
  imgCandyCanes,
  imgLumeVsTinder,
  imgPolarPlunge,
  imgRakuSushi,
];

function Mission() {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const fontAwesomeLoaded = useFontAwesome();
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isUserScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const isImageLoaded = (index) => {
    return loadedImages.has(index);
  };

  // Auto-scroll: smoothly increment scrollLeft, loop when halfway
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!isUserScrolling.current && container) {
        container.scrollLeft += 1;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Pause auto-scroll while user is interacting, resume after 2s idle
  const pauseAutoScroll = useCallback(() => {
    isUserScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
  }, []);

  const resumeAutoScroll = useCallback(() => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isUserScrolling.current = false;
    }, 2000);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = () => {
      pauseAutoScroll();
      resumeAutoScroll();
    };
    const onTouchStart = () => pauseAutoScroll();
    const onTouchEnd = () => resumeAutoScroll();
    const onMouseDown = () => pauseAutoScroll();
    const onMouseUp = () => resumeAutoScroll();

    container.addEventListener("wheel", onWheel, { passive: true });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd);
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [pauseAutoScroll, resumeAutoScroll]);
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
            Lume exists because{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                choosing who you love is one of the most important decisions
                you'll ever make
              </em>
            </strong>
            , yet dating is often treated like an afterthought. Strong romantic
            relationships shape our happiness more than anything else (this is
            proven), but{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                college students are going on fewer dates than ever
              </em>
            </strong>
            . We think{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                dating deserves more intention and a lot more fun
              </em>
            </strong>
            .
          </p>
          <p className="mission-paragraph">
            With Lume, we remove the pressure of perfect profiles, endless
            texting, and awkward small talk, and replace it with{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                games that lead to one simple win: actually going on a date
              </em>
            </strong>
            . Our mission is to help students meet more people, learn what they
            want, and{" "}
            <strong>
              <em style={{ color: "#C739FF" }}>
                find the person to spend the rest of their life with
              </em>
            </strong>
            , all while genuinely enjoying the process.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container" ref={containerRef}>
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
                "noopener,noreferrer",
              )
            }
          >
            {fontAwesomeLoaded && (
              <i className="fa-brands fa-apple apple-logo"></i>
            )}
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
                "noopener,noreferrer",
              )
            }
          >
            {fontAwesomeLoaded && (
              <i className="fa-brands fa-instagram instagram-logo"></i>
            )}
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
