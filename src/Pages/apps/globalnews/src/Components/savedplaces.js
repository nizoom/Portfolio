// drop down to show the user the locations they saved which they click and quickly see news about

import { uuidv4 } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  getSavedLocations,
  removeLocationFromSaved,
} from "../functions/firebasefuncs";

const SavedPlacesDropdown = (props) => {
  const [dropdwnStatus, setDropdwnStatus] = useState({
    firstLoad: true,
    status: false,
    className: "firstLoad",
  });

  const toggleDropdownClass = () => {
    if (dropdwnStatus.firstLoad) {
      fetchLocationsFromFB();
      setDropdwnStatus({
        firstLoad: false,
        status: false,
        className: "firstLoad",
      });
    } else {
      if (!dropdwnStatus.status) {
        fetchLocationsFromFB();
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
  const [removalAnimation, setRemovalAnimation] = useState({
    active: false,
    locationId: "",
  });

  const determineLocationClass = (locationId) => {
    // return removalAnimation.active && removalAnimation.locationId === locationId
    //   ? "fall"
    //   : "place-item";

    if (removalAnimation.active && removalAnimation.locationId === locationId) {
      return "fall";
    }
    return "place-item";
  };
  const handleRemoveLocation = async (locationId) => {
    const uid = auth.currentUser?.uid;
    const result = await removeLocationFromSaved(uid, locationId);
    if (result.status) {
      // rerender without that item
      setRemovalAnimation({ active: true, locationId: locationId });
      fetchLocationsFromFB();
    }
  };
  const [locationsList, setLocationsList] = useState([]);
  const fetchLocationsFromFB = async () => {
    const uid = auth.currentUser?.uid;
    const savedLocations = await getSavedLocations(uid);
    if (savedLocations) {
      console.log(savedLocations);
      setLocationsList(savedLocations);
    } else {
      setLocationsList([{ locationName: "Try saving a location first" }]);
    }
  };

  useEffect(() => {
    if (props.triggerListener) {
      renderLocations();
      // if drop down is already open then leave open
      if (!dropdwnStatus.status) {
        toggleDropdownClass();
      }
    }
  }, [props.triggerListener]);

  const renderLocations = () => {
    return locationsList.map((place) => {
      const locationId = place.locationId;
      return (
        <li
          value={place}
          key={uuidv4()}
          // className={() => determineLocationClass(locationId)}
          className="place-item"
        >
          <button
            className="remove-place-btn"
            onClick={() => handleRemoveLocation(locationId)}
          >
            {" "}
            <span> - </span>{" "}
          </button>
          <p>{place.locationName}</p>
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
