import React from "react";

const CurrentLocation = (props) => {
  return (
    <div className="currentlocation-component-wrapper">
      <button className="add-location-btn">
        <span>+ </span>
      </button>
      <p className="current-location">
        {props.locationStr
          ? props.locationStr
          : "No news available here. Please try somewhere else."}
      </p>
    </div>
  );
};

export default CurrentLocation;
