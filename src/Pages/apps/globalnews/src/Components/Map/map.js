import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerPic from "../../Images/global_news_small.png";
import getPlaceName from "./getplacename";
import getNews from "./getNews";

const AddMarker = (props) => {
  // A component that creates a marker on leaflet map and conveys coordinates to
  //getPlaceName that will reverse geolocate that data and return a human readable address

  const [position, setPosition] = useState(null); // hook assists with setting marker position on map

  const mapAndNewsProcess = (latlng) => {
    setPosition(latlng);
  };

  useMapEvents({
    // a hook from leaflet library
    click: (e) => {
      mapAndNewsProcess(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={props.symbol}></Marker>
  );
};

const Map = (props) => {
  //Leaflet marker code
  const markerIcon = new L.icon({
    iconUrl: markerPic,
    iconSize: [40, 45],
  });

  //Brings data from marker level to map level and ultimately to app.js / root level
  const sendDataToHomeComponenet = (data) => {
    console.log(data);
    props.updateState(data);
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={1}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        // HIDE API KEY
        attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=${process.env.REACT_APP_TILELAYER_KEY}`}
      />
      <AddMarker
        symbol={markerIcon}
        // userFilter={props.topicFilter}
        localityStatus={true}
        dataToMap={sendDataToHomeComponenet}
      ></AddMarker>
    </MapContainer>
  );
};

export default Map;

// useEffect(() => {
//   const savedLocationData = props.selectedFromSavedLocation;
//   if (savedLocationData.latlng !== undefined) {
//     mapAndNewsProcess(savedLocationData.latlng);
//   }
// }, [props.selectedFromSavedLocation]);
