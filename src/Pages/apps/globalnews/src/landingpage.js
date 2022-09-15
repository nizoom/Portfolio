import React from "react";
import "./styles/compiledCss/landingpage.css";
import MonitorPNG from "./Images/graphic.png";
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
            <button className="gn-login-btns"> Login </button>
            <button className="gn-login-btns">Sign up </button>
          </div>
          <p> Or sign in with: </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
