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
      console.log("here0");
      fetchLocationsFromFB();
      setDropdwnStatus({
        firstLoad: false,
        status: false,
        className: "savedplaces-list",
      });
    } else {
      if (!dropdwnStatus.status) {
        console.log("here1");
        fetchLocationsFromFB();
        setDropdwnStatus({
          firstLoad: false,
          status: true,
          className: "savedplaces-list-closed",
        });
      } else {
        console.log("here2");
        setDropdwnStatus({
          firstLoad: false,
          status: false,
          className: "savedplaces-list",
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
  const handleRemoveLocation = async (locationId, btnId) => {
    const uid = auth.currentUser?.uid;
    const result = await removeLocationFromSaved(uid, locationId);
    if (result.status) {
      // rerender without that item
      // setRemovalAnimation({ active: true, locationId: locationId });
      setActiveBtnRemovalId(btnId);
      setTimeout(() => {
        //wait for animation to happen then fetch
        fetchLocationsFromFB();
      }, 1000);
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
    // if a new save has occured stay open
    if (props.triggerListener) {
      console.log("new saved");
      setActiveBtnRemovalId(666);
      fetchLocationsFromFB();
      renderLocations();
    }
  }, [props.triggerListener]);

  const handleSelectedFromSaved = (place) => {
    props.passSavedSelection(place);
  };

  const [activeBtnRemovalId, setActiveBtnRemovalId] = useState(666);
  const determineRemovalBtnClass = (btnId) => {
    return activeBtnRemovalId === btnId
      ? "remove-place-btn removal-pulse"
      : "remove-place-btn";
  };
  const renderLocations = () => {
    return locationsList.map((place, index) => {
      const locationId = place.locationId;
      const key = uuidv4();
      return (
        <li
          value={place}
          key={key}
          // className={() => determineLocationClass(locationId)}
          className="place-item"
          onClick={() => handleSelectedFromSaved(place)}
        >
          <button
            className={determineRemovalBtnClass(index)}
            onClick={() => handleRemoveLocation(locationId, index)}
          >
            <span> - </span>
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
