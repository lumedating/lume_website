import { useState } from "react";
import "../App.css";
import { useFontAwesome } from "../hooks/useFontAwesome";
import tannerKopel from "../assets/images/team/Tanner Kopel Image.jpg";
import anthonyLuparello from "../assets/images/team/Anthony Luparello Image.jpg";
import stephenNguyen from "../assets/images/team/Stephen Nguyen Image.jpg";
import austinKeith from "../assets/images/team/Austin Keith Image.jpg";
import natalieLiguez from "../assets/images/team/Natalie Liguez Image.jpg";
import marioJaar from "../assets/images/team/Mario Jaar Image.jpg";
import liamPerry from "../assets/images/team/Liam Perry Image.PNG";
import claytonLaney from "../assets/images/team/Clayton Laney Image.jpeg";
import katherineNguyen from "../assets/images/team/Katherine Nguyen Image.jpg";
import shimalTajale from "../assets/images/team/Shimal Tajale Image.JPG";
import sohaAlam from "../assets/images/team/Soha Alam Image.jpg";
import luckyCantu from "../assets/images/team/Lucky Cantu Image.jpeg";
import bellaOtte from "../assets/images/team/Bella Otte Image.jpg";
import lucyPhenix from "../assets/images/team/Lucy Phenix Image.jpg";
import raghavK from "../assets/images/team/Raghav K Image.JPG";
import michaelRice from "../assets/images/team/Michael Rice Image.png";
import diegoSalinas from "../assets/images/team/Diego Salinas Image.jpg";

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
    name: "Natalie Liguez",
    position: "Growth Team Member",
    image: natalieLiguez,
  },
  {
    name: "Mario Jaar",
    position: "Growth Team Member",
    image: marioJaar,
  },
  {
    name: "Liam Parry",
    position: "Growth Team Member",
    image: liamPerry,
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
    name: "Bella Otte",
    position: "Growth Team Member",
    image: bellaOtte,
  },
  {
    name: "Lucy Phenix",
    position: "Growth Team Member",
    image: lucyPhenix,
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
  {
    name: "Shimal Tajale",
    position: "Software Developer",
    image: shimalTajale,
  },
  {
    name: "Raghav Kalyanaraman",
    position: "Software Developer",
    image: raghavK,
  },
  {
    name: "Soha Alam",
    position: "Business Assistant",
    image: sohaAlam,
  },
];

function Team() {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const fontAwesomeLoaded = useFontAwesome();

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
          <h1 className="mission-title">Team</h1>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="team-section">
        <div className="team-content">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-image-wrapper">
                {!isImageLoaded(index) && (
                  <div className="team-card-skeleton"></div>
                )}
                <img
                  src={member.image}
                  alt={member.name}
                  className={`team-card-image ${
                    isImageLoaded(index) ? "loaded" : "loading"
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="team-card-info">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-position">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2 className="footer-text">Want to join the team?</h2>
        <div className="footer-buttons">
          <button
            className="btn-app-store-footer"
            onClick={() =>
              window.open(
                "https://forms.gle/F46kFj68XVCyRh2N8",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            {fontAwesomeLoaded && (
              <i className="fa-solid fa-sack-dollar money-bag-icon"></i>
            )}
            <div className="btn-text-wrapper">
              <span className="btn-text-small">Apply for the</span>
              <span className="btn-text-large">Growth Team</span>
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
              <span className="btn-text-small">DM us on</span>
              <span className="btn-text-large">Instagram</span>
            </div>
          </button>
        </div>
      </footer>
    </>
  );
}

export default Team;
