import "../App.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <p className="site-footer-text">© 2024 Lume. All rights reserved.</p>
        <div className="site-footer-links">
          <a
            href="https://apps.apple.com/us/app/lume-the-mobile-dating-game/id6752439265"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            App Store
          </a>
          <a
            href="https://www.instagram.com/lumedating/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

