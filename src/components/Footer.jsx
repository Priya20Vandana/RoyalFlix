import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-crown">♛</span>
          <h2>ROYALFLIX</h2>

          <p>
            Where timeless stories, royal legacies, and unforgettable history
            live forever.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#series">Series</a>
          <a href="#my-list">My List</a>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Categories</h3>

          <a href="#queens">Queens & Empresses</a>
          <a href="#romance">Period Romance</a>
          <a href="#history">Historical Epics</a>
          <a href="#power">War & Politics</a>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Royal Court</h3>

          <a href="#about">About RoyalFlix</a>
          <a href="#contact">Contact Us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2026 RoyalFlix. All rights reserved.</p>

        <p className="footer-tagline">
          Royal Stories. Timeless Legacies.
        </p>
      </div>
    </footer>
  );
}

export default Footer;