import React from "react";
import "./Section1.css";
import sectImage from "../images/section1.jpg";

const Section1 = () => {
  return (
    <div className="app--section1">
      <div className="app--section1--intro">
        <span>Light, Fast & Powerful </span>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="app--section1--intro--brands">
          <div className="app--section1--intro--brands--1">
            <h4>Title Goes Here</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>
          <div className="app--section1--intro--brands--2">
            <h4>Title Goes Here</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="app--section1--image">
        <img src={sectImage} alt="section1" />
      </div>
    </div>
  );
};

export default Section1;
