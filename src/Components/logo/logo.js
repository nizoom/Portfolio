import "./logo.css";
import React from "react";
import { Link } from "react-router-dom";
import NRLogo from "../../project_layout/nrlogo.svg";

const Logo = () => {
  return (
    <div className="wrapper">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={NRLogo}
          style={{
            maxWidth: "50%",
            maxHeight: "50%",
            margin: "20px auto auto 20px",
          }}
        />

        {/* <div className="name-div">
          <h1 className="gov_name"> Nissim Ram </h1>
          <hr className="gold-bar" />
          <h2 className="main-sub-header"> web developer</h2>
        </div> */}
      </Link>
    </div>
  );
};

export default Logo;
