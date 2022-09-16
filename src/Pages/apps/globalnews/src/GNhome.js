import React from "react";
import "./styles/compiledCss/home.css";
import SavedPlacesDropdown from "./Components/savedplaces";
const GNHomePage = (props) => {
  return (
    <div className="homepage-wrapper">
      <div className="left-column">
        <h1 className="GN-title"> Global News </h1>
        {/* saved locations drop down component */}
        <SavedPlacesDropdown />

        {/* add/remove location btn and location name */}

        {/* map */}
      </div>
      <div className="right-column">{/* news display */}</div>
    </div>
  );
};

export default GNHomePage;
