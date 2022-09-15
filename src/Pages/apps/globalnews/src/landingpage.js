import React from "react";
import "./styles/compiledCss/landingpage.css";
import MonitorPNG from "./Images/graphic.png";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="gn-landingpage-wrapper">
      <h1 className="global-news-title"> Global News </h1>
      <section>
        <div className="gn-copy-wrapper">
          <h2 className="gn-main-copy">
            {" "}
            A new map based approach to discovering news{" "}
          </h2>
          <h2 className="gn-sub-copy">
            {" "}
            Stay in touch with the places important to you. Down to the town.
          </h2>
        </div>
        {/* <img src={MonitorPNG} className="gn-graphic" /> */}
        <div className="gn-login-wrapper">
          <div className="gn-traditional-logins-wrapper">
            <Link to="/globalnews/login">
              <button className="gn-login-btns"> Login </button>
            </Link>
            <Link to="/globalnews/signup">
              <button className="gn-login-btns">Sign up </button>
            </Link>
          </div>
          <p> Or sign in with: </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
