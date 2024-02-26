import "./logo.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NRLogo from "../../assets/nrlogo.svg";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
      setTimeout(() => {
        setIsHovered(false);
      }, 4000);
    }
  };

  return (
    <div className="wrapper">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={isHovered ? "rotate-logo" : ""}>
          <img
            onMouseEnter={handleMouseEnter}
            src={NRLogo}
            style={{
              maxWidth: "32%",
              maxHeight: "50%",
              margin: "20px auto auto 20px",
              transform: "translateY(calc(25px * var(--x))) translateZ(0px)",
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
