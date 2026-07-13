import { useRef, useState } from "react";
import anthonyStephenTannerImage from "../assets/images/gallery/Anthony Stephen Tanner Image.JPEG";
import { useFontAwesome } from "../hooks/useFontAwesome";
import { usePrefooterParallax } from "../hooks/usePrefooterParallax";
import tannerKopel from "../assets/images/team/Tanner Kopel Image.jpg";
import anthonyLuparello from "../assets/images/team/Anthony Luparello Image.jpg";
import stephenNguyen from "../assets/images/team/Stephen Nguyen Image.jpg";
import austinKeith from "../assets/images/team/Austin Keith Image.jpg";
import marioJaar from "../assets/images/team/Mario Jaar Image.jpg";
import claytonLaney from "../assets/images/team/Clayton Laney Image.jpeg";
import katherineNguyen from "../assets/images/team/Katherine Nguyen Image.jpg";
import luckyCantu from "../assets/images/team/Lucky Cantu Image.jpeg";
import michaelRice from "../assets/images/team/Michael Rice Image.png";
import diegoSalinas from "../assets/images/team/Diego Salinas Image.jpg";
import "./Home.css";
import "./Team.css";

const HIRING_FORM_URL = "https://forms.gle/F46kFj68XVCyRh2N8";

const POLAROID_TILTS = ["-3deg", "2deg", "-2deg", "3deg", "-4deg", "1deg"];

const teamMembers = [
  {
    name: "Tanner Kopel",
    position: "Founder & CEO",
    image: tannerKopel,
  },
  {
    name: "Anthony Luparello",
    position: "Growth Team Member",
    image: anthonyLuparello,
  },
  {
    name: "Stephen Nguyen",
    position: "Growth Team Member",
    image: stephenNguyen,
  },
  {
    name: "Austin Keith",
    position: "Growth Team Member",
    image: austinKeith,
  },
  {
    name: "Mario Jaar",
    position: "Growth Team Member",
    image: marioJaar,
  },
  {
    name: "Clayton Laney",
    position: "Growth Team Member",
    image: claytonLaney,
  },
  {
    name: "Katherine Nguyen",
    position: "Growth Team Member",
    image: katherineNguyen,
  },
  {
    name: "Lucky Cantu",
    position: "Growth Team Member",
    image: luckyCantu,
  },
  {
    name: "Michael Rice",
    position: "Growth Team Member",
    image: michaelRice,
  },
  {
    name: "Diego Salinas",
    position: "Growth Team Member",
    image: diegoSalinas,
  },
];

function Team() {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const fontAwesomeLoaded = useFontAwesome();
  const prefooterRef = useRef(null);

  usePrefooterParallax(prefooterRef);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const openHiringForm = () => {
    window.open(HIRING_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="team-hero-content">
          <h1 className="home-section-title team-section-title">Our Team</h1>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="team-member">
                <div
                  className="team-polaroid"
                  style={{
                    transform: `rotate(${POLAROID_TILTS[index % POLAROID_TILTS.length]})`,
                  }}
                >
                  <div className="team-polaroid-image-wrapper">
                    {!loadedImages.has(index) && (
                      <div className="team-polaroid-skeleton" />
                    )}
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`team-polaroid-image ${
                        loadedImages.has(index) ? "loaded" : ""
                      }`}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                </div>
                <h2 className="home-step-title team-member-name">
                  {member.name}
                </h2>
                <p className="home-step-description team-member-position">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-prefooter" ref={prefooterRef}>
        <img
          src={anthonyStephenTannerImage}
          alt=""
          className="home-prefooter-bg"
          aria-hidden="true"
        />
        <div className="home-prefooter-overlay" />
        <div className="home-prefooter-content">
          <h2 className="home-prefooter-title">Want to join the team?</h2>
          <button
            type="button"
            className="btn-get-lume"
            onClick={openHiringForm}
          >
            {fontAwesomeLoaded && (
              <i className="fa-solid fa-briefcase" aria-hidden="true" />
            )}
            Hiring interest form
          </button>
        </div>
      </section>
    </div>
  );
}

export default Team;
