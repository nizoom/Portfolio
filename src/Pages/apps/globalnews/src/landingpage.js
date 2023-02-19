import React from "react";
import "./styles/compiledCss/landingpage.css";
// import MonitorPNG from "./Images/graphic.png";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "./config/firebase.js";
import { signInWithPopup } from "firebase/auth";
import point from "./media/point.png";

const LandingPage = () => {
  const history = useHistory();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    history.push("/globalnews/home");
  };

  return (
    <div className="gn-landingpage-wrapper">
      <h1 className="global-news-title"> Global News </h1>
      <section>
        <h2 className="gn-main-copy">
          A new map based approach to discovering news{" "}
        </h2>
        <h2 className="gn-sub-copy">
          Stay in touch with the places important to you. Down to the town.
        </h2>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            overflow: "hidden",
            borderRadius: "100%",
            maxHeight: "400px",
          }}
        >
          <div className="ellipse">
            {" "}
            {/* <img src={point} className="point" />
            <img src={point} className="point" />
            <img src={point} className="point" />
            <img src={point} className="point" /> */}
            <div style={{ position: "absolute", left: "50%" }}>
              <div className="point"> </div>
              <div className="stem"> </div>
            </div>
            <div style={{ position: "absolute", left: "30%", top: "20%" }}>
              <div className="point"> </div>
              <div className="stem"> </div>
            </div>
            <div style={{ position: "absolute", left: "62%", top: "41%" }}>
              <div className="point"> </div>
              <div className="stem"> </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="lndpg-btns-wrapper">
            <Link to="/globalnews/login">
              <button className="">
                <p>Login </p>
              </button>
            </Link>
            <Link to="/globalnews/signup">
              <button className="">
                <p>Sign up </p>{" "}
              </button>
            </Link>
          </div>
          <p
            style={{
              backgroundColor: "#4A4E69",
              padding: "20px",
              borderRadius: "30px",
            }}
            className="gn-google-link"
            onClick={signInWithGoogle}
          >
            Or sign in with <strong>Google </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
