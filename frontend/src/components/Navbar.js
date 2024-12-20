import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="left-section">
        <div className="icon">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Logo"
            className="logo"
          />
        </div>
      </div>

      {/* Center Section: Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="What do you want to play?" />
      </div>

      {/* Right Section: Buttons */}
      <div className="right-section">
        <button className="signup-btn">Sign up</button>
        <button className="login-btn">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
