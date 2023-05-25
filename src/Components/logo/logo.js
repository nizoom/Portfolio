import "./logo.css";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="wrapper">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="name-div">
          <h1 className="gov_name"> Nissim Ram </h1>
          <hr className="gold-bar" />
          <h2 className="main-sub-header"> web developer</h2>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
