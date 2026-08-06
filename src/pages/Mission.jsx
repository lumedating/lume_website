import { useRef } from "react";
import lovePhoto1 from "../assets/images/Love Photo 1.jpg";
import { useFontAwesome } from "../hooks/useFontAwesome";
import { usePrefooterParallax } from "../hooks/usePrefooterParallax";
import { APP_STORE_URL } from "../config/site";
import "./Home.css";
import "./Mission.css";

function Mission() {
  const fontAwesomeLoaded = useFontAwesome();
  const prefooterRef = useRef(null);

  usePrefooterParallax(prefooterRef);

  const openAppStore = () => {
    window.open(APP_STORE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mission-page">
      <section className="mission-hero">
        <div className="mission-hero-content">
          <h1 className="home-section-title mission-section-title">
            Our Mission
          </h1>
          <div className="mission-paper">
            <p className="mission-paragraph">
              Lume exists because{" "}
              <em className="mission-emphasis">
                choosing who you love is one of the most important decisions
                you&apos;ll ever make
              </em>
              , yet dating is often treated like an afterthought. Strong romantic
              relationships shape our happiness more than anything else (this is
              proven), but{" "}
              <em className="mission-emphasis">
                college students are going on fewer dates than ever
              </em>
              . We think{" "}
              <em className="mission-emphasis">
                dating deserves more intention and a lot more fun
              </em>
              .
            </p>
            <p className="mission-paragraph">
              With Lume, we remove the pressure of perfect profiles, endless
              texting, and awkward small talk, and replace it with{" "}
              <em className="mission-emphasis">
                games that lead to one simple win: actually going on a date
              </em>
              . Our mission is to help students meet more people, learn what they
              want, and{" "}
              <em className="mission-emphasis">
                find the person to spend the rest of their life with
              </em>
              , all while genuinely enjoying the process.
            </p>
            <div className="mission-signature">
              <p className="mission-signature-name">— Tanner K</p>
              <p className="mission-signature-title">Founder of Lume</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-prefooter" ref={prefooterRef}>
        <img
          src={lovePhoto1}
          alt=""
          className="home-prefooter-bg mission-prefooter-bg"
          aria-hidden="true"
        />
        <div className="home-prefooter-overlay" />
        <div className="home-prefooter-content">
          <h2 className="home-prefooter-title">
            Want to help us on our mission?
          </h2>
          <button
            type="button"
            className="btn-get-lume"
            onClick={openAppStore}
          >
            {fontAwesomeLoaded && (
              <i className="fa-brands fa-apple apple-logo" aria-hidden="true" />
            )}
            Get Lume
          </button>
        </div>
      </section>
    </div>
  );
}

export default Mission;
