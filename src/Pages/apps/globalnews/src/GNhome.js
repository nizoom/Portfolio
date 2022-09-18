import React from "react";
import "./styles/compiledCss/home.css";
import SavedPlacesDropdown from "./Components/savedplaces";
import CurrentLocation from "./Components/current";
import Map from "./Components/Map/map";
const GNHomePage = (props) => {
  return (
    <div className="homepage-wrapper">
      <div className="left-column">
        <h1 className="GN-title"> Global News </h1>

        <CurrentLocation />

        <Map />
        {/* saved locations drop down component */}
        <SavedPlacesDropdown />

        {/* add/remove location btn and location name */}
      </div>
      <div className="right-column">{/* news display */}</div>
    </div>
  );
};

export default GNHomePage;
