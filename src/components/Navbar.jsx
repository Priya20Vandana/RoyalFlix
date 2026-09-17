import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error.message);
      return;
    }

    setShowProfileMenu(false);
    navigate("/login");
  };

  const getUserName = () => {
    return (
      user?.user_metadata?.full_name ||
      user?.email?.split("@")[0] ||
      "Royal User"
    );
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <NavLink to="/" className="navbar-brand">
        <span className="crown">♛</span>
        <h1>ROYALFLIX</h1>
      </NavLink>


      {/* Navigation Links */}
      <div className="navbar-links">

        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>

        <NavLink to="/movies" className={navLinkStyle}>
          Movies
        </NavLink>

        <NavLink to="/series" className={navLinkStyle}>
          Series
        </NavLink>

        <NavLink to="/my-list" className={navLinkStyle}>
          My List
        </NavLink>

      </div>


      {/* Right Side */}
      <div className="navbar-actions">

        {/* Search */}
        <NavLink
          to="/search"
          className="nav-icon search-button"
          aria-label="Search"
        >
          <span className="search-symbol"></span>
        </NavLink>


        {/* Notifications */}
        <button
          className="nav-icon bell-icon"
          aria-label="Notifications"
        >
          ♧
        </button>


        {/* Authentication Section */}
        {!loading && (
          <>
            {user ? (
              <div className="profile-section">

                {/* Profile Button */}
                <button
                  className="profile-button"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  aria-label="Open profile menu"
                >
                  <div className="profile-avatar">
                    👑
                  </div>

                  <span className="profile-name">
                    {getUserName()}
                  </span>

                </button>


                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <div className="profile-dropdown">

                    <div className="profile-dropdown-header">
                      <strong>{getUserName()}</strong>
                      <small>{user.email}</small>
                    </div>

                    <button
                      onClick={() => navigate("/profile")}
                      className="dropdown-item"
                    >
                      My Profile
                    </button>

                    <button
                      onClick={handleLogout}
                      className="dropdown-item logout-item"
                    >
                      Logout
                    </button>

                  </div>
                )}

              </div>
            ) : (
              <div className="auth-buttons">

                <NavLink to="/login" className="login-button">
                  Login
                </NavLink>

                <NavLink to="/register" className="register-button">
                  Register
                </NavLink>

              </div>
            )}
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;