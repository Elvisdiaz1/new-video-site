import React from "react";
import user from "./images/dummy-user-pic.jpg";

const Navbar = () => {
  return (
    <div id="nav-container">
      <nav id="navbar">
        <h3>Logo</h3>
        <h3>Manic</h3>
        <input type="text" placeholder="Search" />
        <button> Submit</button>
        {/* Person Little Profile on Navbar */}
        <h5>Jan Dae</h5>
        <img src={user} alt="account user" />
      </nav>
    </div>
  );
};

export default Navbar;
