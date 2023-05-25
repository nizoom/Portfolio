import React, { useState } from "react";
import "./cards.css";
import Card from "../../../project_layout/appiconcard.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Cards = (props) => {
  const [isHover, setIsHover] = useState({
    btnNumberOne: false,
    btnNumberTwo: false,
  });
  const btnOneStyle = {
    background: isHover.btnNumberOne ? "black" : "#C7A25D",
    color: isHover.btnNumberOne ? "white" : "black",
    textDecoration: "none",
    boxShadow: isHover.btnNumberOne
      ? "0px 0px 10px rgba(0.467, 0.341, 0.506, 1)"
      : "",
    marginTop: "5px",
  };
  const btnTwpStyle = {
    background: isHover.btnNumberTwo ? "black" : "#C7A25D",
    color: isHover.btnNumberTwo ? "white" : "black",
    textDecoration: "none",
    boxShadow: isHover.btnNumberTwo
      ? "0px 0px 10px rgba(0.467, 0.341, 0.506, 1)"
      : "",
  };
  const handleMouseLeave = () => {
    setIsHover({
      btnNumberOne: false,
      btnNumberTwo: false,
    });
  };
  const handleMouseEnter = (btnNumber) => {
    setIsHover((prevState) => ({
      ...prevState,
      [btnNumber]: true,
    }));
  };
  return (
    // ICON CARD
    <div className="card-component-wrapper bob-on-hover">
      <img src={Card} alt="app" className="card-img" />
      <div className="text-wrapper">
        <h3 className="app-title"> {props.appTitle} </h3>
        <img src={props.logo} className="logo" alt="app-logo" />
        <p className="description-txt"> {props.Description}</p>
        <p className="description-txt tech"> Technologies: {props.stackList}</p>

        {props.btnOneTxt === "View ReadMe" ||
        props.btnOneTxt === "View pages" ? (
          <button className="more-info-btn" style={btnOneStyle}>
            <a
              onMouseEnter={() => handleMouseEnter("btnNumberOne")}
              onMouseLeave={handleMouseLeave}
              href={props.githubUrl}
              style={btnOneStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.btnOneTxt}
            </a>
          </button>
        ) : (
          <div className="btns-div">
            <button className="more-info-btn learn-more" style={btnOneStyle}>
              <a
                onMouseEnter={() => handleMouseEnter("btnNumberOne")}
                onMouseLeave={handleMouseLeave}
                href={props.url}
                style={btnOneStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.btnOneTxt}
              </a>
            </button>

            <button className="more-info-btn view-code" style={btnTwpStyle}>
              <a
                onMouseEnter={() => handleMouseEnter("btnNumberTwo")}
                onMouseLeave={handleMouseLeave}
                href={props.githubUrl}
                style={btnTwpStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
