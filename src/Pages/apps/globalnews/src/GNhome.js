import React, { useState, useEffect } from "react";
import "./styles/compiledCss/home.css";
import SavedPlacesDropdown from "./Components/savedplaces";
import CurrentLocation from "./Components/current";
import Map from "./Components/Map/map";
import NewsBulletin from "./Components/Bulletin/bulletin";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { checkUserInDB } from "./functions/firebasefuncs";

const GNHomePage = () => {
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        history.push("/globalnews/landingpage");
      }
    });

    checkUserInDB(auth.currentUser?.uid);
  }, []);
  const history = useHistory();
  const logout = async () => {
    await signOut(auth);
    history.push("/globalnews/landingpage");
  };

  const [homeState, setHomeState] = useState({
    currentLocation: "Click a location",
    articles: [],
    latlng: false,
  });

  const [triggerStaus, setTriggerStatus] = useState(false);
  const saveTrigger = () => {
    // triggers rerender of saved locations list
    setTriggerStatus(true);
    setTimeout(() => {
      setTriggerStatus(false);
    }, 1000);
  };
  const updateState = (data) => {
    if (data == null) {
      // sometimes data is not iterable - no news or place
      // update UI to say no news at this location
      setHomeState({
        articles: [],
        currentLocation: "No news available here. Please try somewhere else.",
        fromSaved: false,
      });
    } else {
      const [articles, localLocation, countryLocation, latlng] = data;
      const locationStr = !localLocation
        ? `${countryLocation}`
        : `${localLocation}, ${countryLocation}`;
      localLocation.replaceAll(undefined, "");
      setHomeState({
        articles: articles == undefined ? [] : articles,
        currentLocation: locationStr,
        latlng: latlng,
        fromSaved: false,
      });
    }
  };

  const passSavedSelection = (place) => {
    setHomeState({
      currentLocation: place.locationName,
      articles: [],
      latlng: place.latlng,
      fromSaved: true,
    });
  };
  return (
    <div className="homepage-wrapper">
      <div className="left-column">
        <h1 className="GN-title"> Global News </h1>
        <CurrentLocation
          locationStr={homeState.currentLocation}
          latlng={homeState.latlng}
          triggerSaveRerender={saveTrigger}
        />
        <Map updateState={updateState} selectedFromSavedLocation={homeState} />
        <SavedPlacesDropdown
          triggerListener={triggerStaus}
          passSavedSelection={passSavedSelection}
        />
      </div>
      <div className="right-column">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
        <NewsBulletin newsArray={homeState.articles} />
      </div>
    </div>
  );
};

export default GNHomePage;
