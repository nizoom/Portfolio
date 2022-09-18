import React from "react";
import "./styles/compiledCss/home.css";
import SavedPlacesDropdown from "./Components/savedplaces";
import CurrentLocation from "./Components/current";
import Map from "./Components/Map/map";
import NewsBulletin from "./Components/Bulletin/bulletin";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const GNHomePage = (props) => {
  console.log(auth.currentUser?.displayName);
  const history = useHistory();
  const user = useAuthState(auth);
  const logout = async () => {
    await signOut(auth);
    history.push("/globalnews/landingpage");
  };
  return (
    <div className="homepage-wrapper">
      <div className="left-column">
        <h1 className="GN-title"> Global News </h1>
        <CurrentLocation />
        <Map />
        <SavedPlacesDropdown />
      </div>
      <div className="right-column">
        <button className="logout-btn" onClick={logout}>
          {" "}
          Logout{" "}
        </button>
        <NewsBulletin />
      </div>
    </div>
  );
};

export default GNHomePage;
