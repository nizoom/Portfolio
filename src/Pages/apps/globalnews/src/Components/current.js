import React from "react";
import { auth } from "../config/firebase";
import { saveLocation } from "../functions/firebasefuncs";
const CurrentLocation = (props) => {
  const handleAddToSaved = async () => {
    const uid = auth.currentUser?.uid;
    const locationData = {
      locationName: props.locationStr,
      latlng: JSON.stringify([]), //ADD COORDINATES
    };
    const result = await saveLocation(uid, locationData);
  };

  return (
    <div className="currentlocation-component-wrapper">
      <button className="add-location-btn" onClick={handleAddToSaved}>
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
