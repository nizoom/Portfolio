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
  // const user = useAuthState(auth);
  // console.log(auth.currentUser?.displayName);
  // console.log(auth.currentUser);

  useEffect(() => {
    if (!auth.currentUser) {
      history.push("/globalnews/landingpage");
      return;
    }
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
    latlng: [],
  });

  const updateState = (data) => {
    if (data == null) {
      // sometimes data is not iterable - no news or place
      // update UI to say no news at this location
      setHomeState({
        articles: [],
        currentLocation: "No news available here. Please try somewhere else.",
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
      });
    }
  };
  return (
    <div className="homepage-wrapper">
      <div className="left-column">
        <h1 className="GN-title"> Global News </h1>
        <CurrentLocation
          locationStr={homeState.currentLocation}
          latlng={homeState.latlng}
        />
        <Map updateState={updateState} />
        <SavedPlacesDropdown />
      </div>
      <div className="right-column">
        <button className="logout-btn" onClick={logout}>
          {" "}
          Logout{" "}
        </button>
        <NewsBulletin newsArray={homeState.articles} />
      </div>
    </div>
  );
};

export default GNHomePage;
