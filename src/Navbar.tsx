import React from "react";
import user from "./images/dummy-user-pic.jpg";

const Navbar = () => {
  return (
    <div id="nav-container">
      <nav id="navbar">
        <div id="website-naming">
          <h3 id="website-logo">Logo</h3>
          <h3 id="website-title">Manic</h3>
        </div>

        <div id="search-bar">
          <input type="text" placeholder="Search" />
          <button> Submit</button>
        </div>
        <button id="nav-upload-button">Upload</button>
        <div id="account">
          {/* Person Little Profile on Navbar */}
          <img src={user} alt="account user" />
          <h5>Jan Dae</h5>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
