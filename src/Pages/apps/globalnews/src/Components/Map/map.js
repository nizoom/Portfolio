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

  const [position, setPosition] = useState(null); // hook assists with setting marker position on
  // map

  useMapEvents({
    // a hook from leaflet library
    click: (e) => {
      setPosition(e.latlng);

      getPlaceName(e.latlng).then((response) => {
        // Get address components from google maps API results
        // gather placenames from google maps nested address categories/objects in the response^
        let articles = [];

        if (response.length < 2) {
          // If no usable results from google api
          props.dataToMap(null);
        } else {
          //normal process flow

          //sometimes an address component may not have any useful information
          //this is because the types of that address component is called a plus code

          //array of only addresscomponents where each component is an array of properties
          let addressComponentsArray = response.map(
            (placeObj) => placeObj.address_components
          );

          //this section until line 62 filters out the irrelevant data from the address objects
          const filterAddresses = addressComponentsArray.map((component) => {
            let addressObjects = component.filter(function (item) {
              return determineRelevance(item.types);
            });
            return addressObjects;
          });

          function determineRelevance(type) {
            if (type[0] !== "plus_code") {
              return true;
            }
            return false;
          }

          //remove empty arrays from relevantPlaces
          const relaventPlaces = filterAddresses.filter(
            (arr) => arr.length > 0
          );
          let length = 0;
          let spot = 0;

          relaventPlaces.forEach((list) => {
            //from the array of relevantPlaces arrays which nested array is longest
            //that's the array that with have the most relevant place info
            if (list.length > length) {
              length = list.length;
              spot = relaventPlaces.indexOf(list);
            }
          });
          const placeInfo = relaventPlaces[spot];

          // Filter google maps results based on entries containing Country
          let countryObj = placeInfo.filter((component) =>
            component.types.includes("country")
          );

          //further isolates the country information or makes it an obsolete factor if
          //the user clicked a body of water for example
          let country = countryObj.length > 0 ? countryObj[0].long_name : null;

          // Filter google maps results based on entries containing locality

          //get more regional names
          let localAreaResults = placeInfo.filter((component) =>
            component.types.includes("locality")
          );

          //further isolate those names
          let localArea =
            localAreaResults.length > 0 ? localAreaResults[0].long_name : null;

          // gets aministrative area names which are formatted differently from localitise
          // in googles response obj

          let adminAreaResults = placeNamefromTypes(
            "administrative_area_level"
          ); //this can be an array with more than 1 element

          let naturalFeature = placeNamefromTypes("natural_feature"); //if the user clicked an ocean for example

          function placeNamefromTypes(category) {
            let names = [];
            placeInfo.forEach(function (obj) {
              let types = Object.values(obj.types).toString();

              if (types.includes(category)) {
                names.push(obj.long_name);
              }
            });
            return names;
          }

          //add adminAreaResults, localArea  to the allLocaPlaceNames array
          adminAreaResults.push(localArea);
          let allLocalPlaceNames = adminAreaResults;

          (async function () {
            const countryOrNonNationalName = (await (country === null))
              ? naturalFeature
              : country;

            //Looping through placeNames to get articles from getNews function
            for (let x = 0; x < allLocalPlaceNames.length; x++) {
              let localityName = allLocalPlaceNames[x];

              //setTimeOUt to throttle API calls when iterating to next place name if no news

              await new Promise((resolve) => setTimeout(resolve, 200));

              //this for loop goes through each placename until articles are
              // returned from getNews function

              await getNews(
                localityName,
                countryOrNonNationalName
                // props.userFilter,
                // props.localityStatus
              ).then((response) => {
                if (response.length > 0) {
                  // if news found
                  let successfulPlaceName = localityName;
                  articles.push(response); // this is just articles
                  x += 500; // stops loop at next iteration

                  if (country === null) {
                    // passing data for body of water
                    // or nonnational click.
                    // console.log(' passing data for body of water or nonnational click. Here country represents')
                    props.dataToMap([
                      articles,
                      countryOrNonNationalName,
                      // props.userFilter,
                    ]);
                  } else {
                    //typical conutry click
                    if (props.localityStatus) {
                      //checking if locality box is checked off
                      // console.log('typical local conutry click')
                      props.dataToMap([
                        articles,
                        successfulPlaceName,
                        countryOrNonNationalName,
                        // props.userFilter,
                      ]);
                    } else {
                      // not checked exclude locality

                      // console.log('not checked - national level click ')
                      props.dataToMap([
                        articles,
                        countryOrNonNationalName,
                        // props.userFilter,
                      ]);
                    }
                  }
                }
              });
            } //if no news is found
            if (articles.length === 0) {
              props.dataToMap(null);
            }
          })();
        }
      });
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
