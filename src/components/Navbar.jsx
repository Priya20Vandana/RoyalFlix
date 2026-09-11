import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="navbar-brand">
        <span className="crown">♛</span>
        <h1>ROYALFLIX</h1>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <a href="#home" className="active">
          Home
        </a>

        <a href="#movies">Movies</a>

        <a href="#series">Series</a>

        <a href="#my-list">My List</a>
      </div>

      {/* Right Side */}
      <div className="navbar-actions">
        <button className="nav-icon" aria-label="Search">
          <span className="search-symbol"></span>
        </button>

        <button className="nav-icon bell-icon" aria-label="Notifications">
          ♧
        </button>

        <div className="profile-section">
          <div className="profile-avatar">
            👑
          </div>

          <span className="dropdown-arrow">⌄</span>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;