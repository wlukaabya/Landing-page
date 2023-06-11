import React from "react";
import "./Header.css";
import headImage from "../images/section2.jpg";

const Header = () => {
  return (
    <div className="app--header">
      <div className="app--header--intro">
        <span>Introduce Your Product Quickly & Effectively</span>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="app--header--intro--btns">
          <button>Purchase UI Kit</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="app--header--image">
        <img src={headImage} alt="section2" />
      </div>
    </div>
  );
};

export default Header;
