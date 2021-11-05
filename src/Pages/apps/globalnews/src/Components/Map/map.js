import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

import markerPic from "../../Images/global_news_small.png"
import  getPlaceName from "./getplacename"
import getNews from "./getNews"

const AddMarker = ( props ) => {
  // A component that creates a marker on leaflet map and conveys coordinates to
  //getPlaceName that will reverse geolocate that data and return a human readable address

  const [position, setPosition] = useState(null) // hook assists with setting marker position on
  // map


  useMapEvents({ // a hook from leaflet library
    click : (e) => {
      //console.log("Map clicked");
      setPosition(e.latlng)



      getPlaceName(e.latlng, props.userFilter, props.localityStatus)
      .then(response => {
        //declaring variables at top level of function to be updated further down
        let articles = [];
        let country = ""
        let nonNationalName = ""
        //console.log(response);
        //console.log(response[0])

        if(response.length === 0){ // If no results from google api
          //console.log("NO RESULTS FROM GOOGLE API")
         
          props.dataToMap(null)

        } else {
          //normal process flow


        // the getNews function will iterate through this list
        //once it is filled and perform a news search based on each element

        // Get address components from google maps API results
        // the name is based on google maps nested address categories/objects

        //sometimes an address component may not have any useful information
        //this is because the types of that address component is called a plus code

        //array of onlu addresscomponents where each component is an array of properties
        let addressComponentsArray =  response.map(placeObj => (placeObj.address_components))
        
        

        const filterAddresses = addressComponentsArray.map(component => {

          let addressObjects = component.filter(function(item){
            return determineRelevance(item.types)
          })
          //console.log(addressObjects)
          
          return addressObjects

        })
      
        function determineRelevance(type){
            if(type[0] !== 'plus_code'){
              return true
            } 
            return false;
        }

        //remove empty arrays from relevantPlaces 
        const relaventPlaces = filterAddresses.filter(arr => arr.length > 0)
        let length = 0;
        let spot = 0;
        relaventPlaces.forEach((list, index)=> {

          if(list.length > length){
            length = list.length
            spot = relaventPlaces.indexOf(list);
          } 
        })
        const placeInfo = relaventPlaces[spot];

        // console.log(placeInfo)
        // Filter google maps results based on entries containing Country
        let countryObj = placeInfo.filter(component => component.types.includes("country"))
        //  console.log(countryObj);
        let countryResults = countryObj.length > 0?  countryObj[0].long_name : null
        //console.log(countryResults)

        // if (countryResults.length === 0) {
          
        // }
        // Filter google maps results based on entries containing locality

        let localAreaResults = placeInfo.filter(component => component.types.includes("locality"))

        //console.log(localAreaResults)
        let localArea = localAreaResults.length > 0 ? localAreaResults[0].long_name : null;
        //allLocalPlaceNames.push(localArea)
        
        //this for each does the same as above but had to be adaptive because there could be
        //more than one administrative_area_ and the above function returned only one name
        //this for each pushes all names to the allLocalPlaceNames array
  
      //  let adminAreaResults = placeInfo.filter(component => component.types.includes('administrative_area_level'))

      
        let adminAreaResults = placeNamefromTypes('administrative_area_level') //this can be an array with more than 1 element

        let naturalFeature = placeNamefromTypes('natural_feature')

        // console.log(naturalFeature); // may need to destructure array
        // console.log(adminAreaResults)

      //nature feature is a type instead of country 
      // the types administrative area and natural feature are formatted differetly in the 
      //response object than country or local area
      function placeNamefromTypes(category){
        let names = []
        placeInfo.forEach(function(obj){
          //console.log(obj);
          let types = Object.values(obj.types).toString()
  
          if(types.includes(category)){
            // console.log('caught');
            // console.log(obj.long_name);
            names.push(obj.long_name)
          }
          
        })
        return names
      }

        //this function makes sure that placeName is valid, isolated from object, and pushed to
        // //allLocalPlaceNames array
        // function checkForValidPlaceName(areaType){
        //   if(areaType.length > 0){
        //     let placeName = areaType[0].long_name
        //     allLocalPlaceNames.push(placeName)
        //   }
        // }

        // checkForValidPlaceName(localAreaResults)
        //checkForValidPlaceName(countryResults)




        //Next Steps: Merge longnames from locality and admin areas so that getNews is called with country
        // and more specific name



        // console.log(localArea + "/ " +  allLocalPlaceNames + " /" + countryResults);


        //in case the click is not recognized to be within country
        // such as a body of water
        
        //console.log(countryResults)

          // if(countryResults.length < 1){
          //   nonNationalName = addressComponentsArray[0].long_name
          // } 
        
          
          
        // console.log(adminAreaResults, localArea);
 
          //add adminAreaResults, localArea  to the allLocaPlaceNames array
          adminAreaResults.push(localArea)
          let allLocalPlaceNames = adminAreaResults;
          console.log(allLocalPlaceNames);

          (async function() {

            //console.log(country);
            //console.log(nonNationalName);

            const countryOrNonNationalName = await (countryResults === null) ? naturalFeature : countryResults
            if (nonNationalName.length > 0){
              allLocalPlaceNames.push("") // adds empty str to the for loop
              //to make sure there is no search criteria besides
              //countryOrNonNationalName
              //this blank str replaces locality name further down if there is no locality name
            }
            //console.log(countryOrNonNationalName);
            //console.log(allLocalPlaceNames);

            //Looping through placeNames to get articles from getNews function
            for(let x = 0; x < allLocalPlaceNames.length; x++ ){
              //console.log("This is x at top of loop " + x);
              let localityName = allLocalPlaceNames[x];
              //console.log(`${localityName} ` + x);

              // if country is blank then a body of water may have been clicked
              // in which case search for the nonNationalName

              //setTimeOUt to throttle API calls when iterating to next place name if no news


              await new Promise(resolve => setTimeout(resolve, 200));

              console.log(countryOrNonNationalName);           
              await getNews(localityName, countryOrNonNationalName, props.userFilter, props.localityStatus)
              .then(response => {
                //console.log(localityName, countryOrNonNationalName, props.userFilter, props.localityStatus);

                // console.log(response);
                if(response.length > 0){ // if news found
                  let successfulPlaceName = localityName;
                  articles.push(response) // this is just articles
                  x+=500 // stops loop at next iteration
                  //console.log("Completed");
                  
                  if(countryResults === null){ // passing data for body of water
                    // or nonnational click. Here country represents
                    console.log(' passing data for body of water or nonnational click. Here country represents')
                    props.dataToMap([articles, countryOrNonNationalName, props.userFilter])
                
                  } else {
                    //typical conutry click
                    if(props.localityStatus){ //checking if locality box is checked off
                    console.log(articles)
                    console.log('typical local conutry click')
                      props.dataToMap([articles, successfulPlaceName, countryOrNonNationalName, props.userFilter])

                    } else { // not checked exclude locality
                    console.log(articles)
                    console.log('not checked - national level click ')
                      props.dataToMap([articles, countryOrNonNationalName, props.userFilter])

                    }
                  }
                }

              })



            } //if no news is found
            if(articles.length === 0){
              //console.log("No news");
              props.dataToMap(null)
            }
          }());
        }
      });
    }
  })


  return position === null ? null : ( <Marker position = {position}
    icon = {props.symbol}>


     </Marker>)
}

const Map = ( props ) => {


//Leaflet marker code
  const markerIcon = new L.icon({
      iconUrl : markerPic,
      iconSize : [40,45],
    })

//Brings data from marker level to map level and ultimately to app.js / root level
  const bringDataToTop = ( data ) => {
    //console.log("The data is in the Map");
    //console.log(data);\
    console.log('fired')
    props.dataBackToTop( data )
  }


  return(
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>

      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <AddMarker symbol = {markerIcon} userFilter = {props.topicFilter}
        localityStatus = {props.localityStatus} dataToMap = {bringDataToTop} >

        </AddMarker>

    </MapContainer>
    )
  }

export default Map;
