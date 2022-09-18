import React from "react";

const CurrentLocation = (props) => {
  return (
    <div className="currentlocation-component-wrapper">
      <button className="add-location-btn">
        <span>+ </span>
      </button>
      <p className="current-location">Current Location</p>
    </div>
  );
};

export default CurrentLocation;
