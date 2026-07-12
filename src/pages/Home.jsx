import { useEffect, useLayoutEffect, useRef, useState } from "react";
import heroScreenshot from "../assets/images/Hero Screenshot.png";
import heroPictures from "../assets/images/Hero Pictures.png";
import underline from "../assets/images/Underline.png";
import step1Image from "../assets/images/Step 1 Image.png";
import step2Image from "../assets/images/Step 2 Image.png";
import step3Image from "../assets/images/Step 3 Image.png";
import graduationHat from "../assets/images/Graduation Hat.png";
import limegreenImage from "../assets/images/Limegreen Image.png";
import coffeeCups from "../assets/images/Coffee Cups Image.png";
import lovePhoto1 from "../assets/images/Love Photo 1.jpg";
import lovePhoto2 from "../assets/images/Love Photo 2.jpg";
import lovePhoto3 from "../assets/images/Love Photo 3.jpg";
import { useFontAwesome } from "../hooks/useFontAwesome";
import { APP_STORE_URL } from "../config/site";
import "./Home.css";

const LOVE_PHOTOS = [lovePhoto1, lovePhoto2, lovePhoto3];

const COLLEGE_GALLERY_PHOTOS = [
  ...LOVE_PHOTOS,
  ...LOVE_PHOTOS,
  ...LOVE_PHOTOS,
  ...LOVE_PHOTOS,
];

const POLAROID_TILTS = ["-5deg", "4deg", "-3deg"];

const FAQ_ITEMS = [
  {
    question: "how do you pick my matches each day?",
    answer:
      "Lume uses AI to analyze your profile, including your interests, hobbies, ambitions, and more, and compares it with other users to find your most compatible match. You get one curated match dropped each day at a random time.",
  },
  {
    question: "how do you verify that all users go to UT?",
    answer:
      "Every new user must sign up with a verified @utexas.edu email before creating an account. That way, only real UT Austin students are on Lume.",
  },
  {
    question: "what happens if i lose the game?",
    answer:
      "If you lose the game, you won't get to go on a date with that day's match. You'll get a fresh chance to play again tomorrow with an equally great match.",
  },
  {
    question: "what happens when i win the game?",
    answer:
      "If you and your match both win and say yes to a date, Lume plans it for you based on both of your availability. We'll provide the date, time, and location, and all you have to do is show up.",
  },
  {
    question: "what if i can't make the date after i confirmed?",
    answer:
      "Life happens! If something comes up after you've confirmed, let your match know through the app as soon as you can. We ask that you only confirm when you're serious about showing up — ghosting isn't cool.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    number: "1",
    title: "Get your drop",
    description: "We drop you a curated match at a random time every few days.",
    image: step1Image,
    alt: "Student with dating profile tag",
  },
  {
    number: "2",
    title: "Play the game",
    description: "Play a quick, Kahoot-style game about your match.",
    image: step2Image,
    alt: "Person at game show podiums",
  },
  {
    number: "3",
    title: "Enjoy your date",
    description:
      "Win the game, win the date! We'll schedule & plan everything 😉",
    image: step3Image,
    alt: "Couple on a date",
  },
];

const FEATURES = [
  {
    title: "Only verified college students",
    image: graduationHat,
    alt: "Graduation cap",
  },
  {
    title: "Safe campus date locations",
    image: limegreenImage,
    alt: "Limegreen campus cafe",
  },
  {
    title: "No small talk, only real dates",
    image: coffeeCups,
    alt: "Coffee cups",
  },
];

function FaqItem({ item, isOpen, onToggle, fontAwesomeLoaded }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    setHeight(isOpen ? content.scrollHeight : 0);
  }, [isOpen, item.answer]);

  useEffect(() => {
    if (!isOpen) return;

    const updateHeight = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isOpen, item.answer]);

  return (
    <div className={`home-faq-item${isOpen ? " home-faq-item-open" : ""}`}>
      <button
        type="button"
        className="home-faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        {fontAwesomeLoaded && (
          <i className="fa-solid fa-chevron-down home-faq-chevron" />
        )}
      </button>
      <div
        className="home-faq-answer-wrapper"
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="home-faq-answer-inner">
          <p className="home-faq-answer">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const fontAwesomeLoaded = useFontAwesome();
  const observerRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;
    let timeoutId = null;

    const setupObserver = () => {
      requestAnimationFrame(() => {
        const elements = document.querySelectorAll(".home-animate-on-scroll");

        if (elements.length === 0 && retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(setupObserver, 100);
          return;
        }

        if (elements.length > 0) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("home-animated");
                }
              });
            },
            {
              threshold: 0.1,
              rootMargin: "0px 0px -80px 0px",
            },
          );

          elements.forEach((el) => observer.observe(el));
          observerRef.current = observer;
        }
      });
    };

    setupObserver();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  const openAppStore = () => {
    window.open(APP_STORE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-text">
            <h1 className="home-hero-title home-animate-on-scroll">
              Fall in love
              <br />
              the{" "}
              <span className="home-hero-highlight">
                fun
                <img
                  src={underline}
                  alt=""
                  className="home-hero-underline"
                  aria-hidden="true"
                />
              </span>{" "}
              way!
            </h1>
            <p className="home-hero-description home-animate-on-scroll">
              Join Lume, the daily game where you play to win real dates! Play
              daily trivia about your match to win a casual date with them.
            </p>
            <button
              type="button"
              className="btn-get-lume home-animate-on-scroll"
              onClick={openAppStore}
            >
              {fontAwesomeLoaded && (
                <i className="fa-brands fa-apple apple-logo" />
              )}
              Get Lume
            </button>
          </div>
          <div className="home-hero-visual home-animate-on-scroll">
            <img
              src={heroPictures}
              alt=""
              className="home-hero-pictures"
              aria-hidden="true"
            />
            <img
              src={heroScreenshot}
              alt="Lume app on a phone"
              className="home-hero-screenshot"
            />
          </div>
        </div>
      </section>

      <section className="home-how-it-works" id="how-it-works">
        <h2 className="home-section-title home-animate-on-scroll">
          How it works
        </h2>
        <div className="home-steps">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.number} className="home-step home-animate-on-scroll">
              <span className="home-step-number" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="home-step-title">{step.title}</h3>
              <p className="home-step-description">{step.description}</p>
              <img
                src={step.image}
                alt={step.alt}
                className="home-step-image"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="home-college">
        <div className="home-college-content">
          <h2 className="home-section-title home-animate-on-scroll">
            College is better with someone to share it with
          </h2>
          <p className="home-college-subtitle home-animate-on-scroll">
            Find that someone you&apos;ve been looking for.
          </p>
        </div>
        <div className="home-college-gallery" aria-hidden="true">
          <div className="home-college-gallery-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="home-college-gallery-group"
                aria-hidden={groupIndex === 1}
              >
                {COLLEGE_GALLERY_PHOTOS.map((photo, index) => (
                  <div
                    key={`${groupIndex}-${index}`}
                    className="home-college-polaroid"
                    style={{
                      transform: `rotate(${POLAROID_TILTS[index % POLAROID_TILTS.length]})`,
                    }}
                  >
                    <img src={photo} alt="" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="home-features-grid">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="home-feature home-animate-on-scroll"
            >
              <p className="home-feature-title">{feature.title}</p>
              <img
                src={feature.image}
                alt={feature.alt}
                className="home-feature-image"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="home-faq">
        <h2 className="home-section-title home-animate-on-scroll">FAQs</h2>
        <div className="home-faq-card home-animate-on-scroll">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openFaqIndex === index}
              onToggle={() =>
                setOpenFaqIndex(openFaqIndex === index ? null : index)
              }
              fontAwesomeLoaded={fontAwesomeLoaded}
            />
          ))}
        </div>
      </section>

      <section className="home-prefooter">
        <img
          src={lovePhoto1}
          alt=""
          className="home-prefooter-bg"
          aria-hidden="true"
        />
        <div className="home-prefooter-overlay" />
        <div className="home-prefooter-content">
          <h2 className="home-prefooter-title home-animate-on-scroll">
            Don&apos;t miss the next drop...
          </h2>
          <button
            type="button"
            className="btn-get-lume home-animate-on-scroll"
            onClick={openAppStore}
          >
            {fontAwesomeLoaded && (
              <i className="fa-brands fa-apple apple-logo" />
            )}
            Get Lume
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
