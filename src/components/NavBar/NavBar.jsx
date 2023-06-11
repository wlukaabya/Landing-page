import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="app--nav">
      <ul className="app--nav--links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h4>Landing</h4>
      <button>Buy Now</button>
    </div>
  );
};

export default NavBar;
