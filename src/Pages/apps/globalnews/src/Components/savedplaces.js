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

  const toggleDropdownClass = (e) => {
    e.stopPropagation();
    setActiveBtnRemovalId(666);
    if (dropdwnStatus.firstLoad) {
      fetchLocationsFromFB();
      setDropdwnStatus({
        firstLoad: false,
        status: false,
        className: "savedplaces-list",
      });
    } else {
      if (!dropdwnStatus.status) {
        fetchLocationsFromFB();
        setDropdwnStatus({
          firstLoad: false,
          status: true,
          className: "savedplaces-list-closed",
        });
      } else {
        setDropdwnStatus({
          firstLoad: false,
          status: false,
          className: "savedplaces-list",
        });
      }
    }
  };

  const handleRemoveLocation = async (e, locationId, btnId) => {
    e.stopPropagation();
    const uid = auth.currentUser?.uid;
    setActivLocationId(666);
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
      setActivLocationId(666);
      fetchLocationsFromFB();
      renderLocations();

      // on refresh
      window.onbeforeunload = function () {
        fetchLocationsFromFB();
        renderLocations();
      };
      return () => {
        window.onbeforeunload = null;
      };
    }
  }, [props.triggerListener]);

  const handleSelectedFromSaved = (place, index) => {
    setActivLocationId(index);
    props.passSavedSelection(place);
    const timer = setTimeout(() => {
      //wait for animation to happen then fetch
      setActivLocationId(666);
    }, 1000);
    clearTimeout(timer);
  };

  const [activeBtnRemovalId, setActiveBtnRemovalId] = useState(666);
  const [activeLocationId, setActivLocationId] = useState(666);
  const determineLineItemClass = (btnId, btnType) => {
    if (btnType === "delete-btn") {
      return activeBtnRemovalId === btnId
        ? "remove-place-btn removal-pulse"
        : "remove-place-btn";
    } else {
      return activeLocationId === btnId
        ? "place-item pulse-animation"
        : "place-item";
    }
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
          className={determineLineItemClass(index, "location-btn")}
          onClick={() => handleSelectedFromSaved(place, index)}
        >
          <button
            className={determineLineItemClass(index, "delete-btn")}
            onClick={(e) => handleRemoveLocation(e, locationId, index)}
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
        onClick={(e) => toggleDropdownClass(e)}
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
