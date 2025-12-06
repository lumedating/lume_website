import "../App.css";
import tannerKopel from "../assets/images/team/Tanner Kopel Image.jpg";
import anthonyLuparello from "../assets/images/team/Anthony Luparello Image.jpg";
import stephenNguyen from "../assets/images/team/Stephen Nguyen Image.jpg";
import austinKeith from "../assets/images/team/Austin Keith Image.jpg";
import natalieLiguez from "../assets/images/team/Natalie Liguez Image.jpg";
import marioJaar from "../assets/images/team/Mario Jaar Image.jpg";
import gabriellaBolanos from "../assets/images/team/Gabriella Bolanos Image.jpg";
import liamPerry from "../assets/images/team/Liam Perry Image.PNG";
import claytonLaney from "../assets/images/team/Clayton Laney Image.jpeg";

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
    name: "Gabriella Bolanos",
    position: "Growth Team Member",
    image: gabriellaBolanos,
  },
  {
    name: "Liam Perry",
    position: "Growth Team Member",
    image: liamPerry,
  },
  {
    name: "Clayton Laney",
    position: "Growth Team Member",
    image: claytonLaney,
  },
];

function Team() {
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
              <img
                src={member.image}
                alt={member.name}
                className="team-card-image"
              />
              <div className="team-card-info">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-position">{member.position}</p>
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
                "noopener,noreferrer"
              )
            }
          >
            <i className="fa-solid fa-sack-dollar money-bag-icon"></i>
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
                "noopener,noreferrer"
              )
            }
          >
            <i className="fa-brands fa-instagram instagram-logo"></i>
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
