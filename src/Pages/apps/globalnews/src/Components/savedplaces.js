// drop down to show the user the locations they saved which they click and quickly see news about

import React, { useState } from "react";

const SavedPlacesDropdown = (props) => {
  const [dropdwnStatus, setDropdwnStatus] = useState(false);
  const placeholderPlaces = [
    "Savannah, Georgia",
    "Lemon, Australia",
    "Svalbard, Russia",
    "Rio De Jainairo, Brazil",
  ];

  const toggleDropdown = () => {
    setDropdwnStatus(!dropdwnStatus);
  };

  const renderLocations = () => {
    return placeholderPlaces.map((place) => {
      return (
        <li
          value={place}
          key={placeholderPlaces.indexOf(place).toString()}
          className="place-item"
        >
          {place}
        </li>
      );
    });
  };
  // toggleDropdwn ? "locations-dropdwn-label" :}
  return (
    <div className="savedplaces-component-wrapper">
      <label
        htmlFor="locations"
        className="locations-dropdwn-label"
        onClick={toggleDropdown}
      >
        Saved locations
      </label>
      <ul
        className={
          dropdwnStatus ? "savedplaces-list" : "savedplaces-list-closed"
        }
        name="locations"
      >
        {/* iterate over places to create option elements */}
        {renderLocations()}
      </ul>
    </div>
  );
};

export default SavedPlacesDropdown;
