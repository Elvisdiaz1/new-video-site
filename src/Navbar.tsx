import React from "react";
import user from "./images/dummy-user-pic.jpg";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <h3>Logo</h3>
        <h3>Manic</h3>

        {/* Insert search bar */}
        {/* Person Little Profile on Navbar */}
        <h5>Jan Dae</h5>
        <img src={user} alt="account user" />
      </nav>
    </div>
  );
};

export default Navbar;
