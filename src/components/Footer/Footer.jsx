import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app--footer">
      <div className="app--footer--section1">
        <div className="app--footer--section1--copyright">
          ©2023 Yourcompany
        </div>
        <div className="app--footer--section1--landing">Landing</div>
        <div className="app--footer--section1--btn">
          <button>Purchase new</button>
        </div>
      </div>
      <div className="line"></div>
      <div className="app--footer--section2">
        <div className="app--footer--section2--links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div></div>
        <div className="app--footer--section2--media">
          <FaFacebookF className="media--links" />
          <FaLinkedinIn className="media--links" />
          <FaTwitter className="media--links" />
          <FaYoutube className="media--links" />
          <FaInstagram className="media--links" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
