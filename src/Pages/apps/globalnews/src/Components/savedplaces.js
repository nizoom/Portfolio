// drop down to show the user the locations they saved which they click and quickly see news about

import React, { useState, useEffect } from "react";

const SavedPlacesDropdown = (props) => {
  const [dropdwnStatus, setDropdwnStatus] = useState({
    firstLoad: true,
    status: false,
    className: "preload",
  });
  const placeholderPlaces = [
    "Savannah, Georgia",
    "Lemon, Australia",
    "Svalbard, Russia",
    "Rio De Jainairo, Brazil",
    "Savannah, Georgia",
  ];

  const toggleDropdownClass = () => {
    if (dropdwnStatus.firstLoad) {
      setDropdwnStatus({
        firstLoad: false,
        status: false,
        className: "preload",
      });
    } else {
      if (!dropdwnStatus.status) {
        setDropdwnStatus({
          firstLoad: false,
          status: true,
          className: "savedplaces-list",
        });
      } else {
        setDropdwnStatus({
          firstLoad: false,
          status: false,
          className: "savedplaces-list-closed",
        });
      }
    }
  };

  useEffect(() => {
    toggleDropdownClass();
  }, []);

  const renderLocations = () => {
    return placeholderPlaces.map((place) => {
      return (
        <li value={place} key={Math.random().toString()} className="place-item">
          <button className="remove-place-btn">
            {" "}
            <span> - </span>{" "}
          </button>
          <p>{place}</p>
        </li>
      );
    });
  };

  return (
    <div className="savedplaces-component-wrapper">
      <label
        htmlFor="locations"
        className="locations-dropdwn-label"
        onClick={toggleDropdownClass}
      >
        Saved locations
      </label>
      <ul className={dropdwnStatus.className} name="locations">
        {/* iterate over places to create option elements */}
        {renderLocations()}
      </ul>
    </div>
  );
};

export default SavedPlacesDropdown;
