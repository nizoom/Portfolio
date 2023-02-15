import React, { useState } from "react";
import { auth } from "../config/firebase.js";
import { saveLocation } from "../functions/firebasefuncs";
const CurrentLocation = (props) => {
  const handleAddToSaved = async () => {
    setPulse(true);
    const uid = auth.currentUser?.uid;
    const locationData = {
      locationName: props.locationStr,
      latlng: JSON.stringify(props.latlng),
    };
    const result = await saveLocation(uid, locationData);
    setTimeout(() => {
      props.triggerSaveRerender();
      setPulse(false);
    }, 2000);
  };
  const [pulse, setPulse] = useState(false);
  return (
    <div
      className={
        pulse
          ? "currentlocation-component-wrapper pulse-animation"
          : "currentlocation-component-wrapper"
      }
    >
      {props.latlng ? (
        <button className="add-location-btn" onClick={handleAddToSaved}>
          <span>+ </span>
        </button>
      ) : null}
      <p className="current-location">
        {props.locationStr
          ? props.locationStr
          : "No news available here. Please try somewhere else."}
      </p>
    </div>
  );
};

export default CurrentLocation;
