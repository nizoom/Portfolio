import getPlaceName from "./getplacename";
import getNews from "./getNews";
export const getNewsResultsFromPosition = (latlng, callback) => {
  getPlaceName(latlng).then((response) => {
    let articles = [];

    if (response.length < 2) {
      // If no usable results from google api
      callback(null);
    } else {
      //normal process flow
      //sometimes an address component may not have any useful information
      //this is because the types of that address component is called a plus code

      //array of only addresscomponents where each component is an array of properties
      let addressComponentsArray = response.map(
        (placeObj) => placeObj.address_components
      );

      //this section filters out the irrelevant data from the address objects
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
      const relaventPlaces = filterAddresses.filter((arr) => arr.length > 0);
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
      let country = countryObj.length > 0 ? countryObj[0].long_name : ""; //was once null?

      // Filter google maps results based on entries containing locality

      //get more regional names
      let localAreaResults = placeInfo.filter((component) =>
        component.types.includes("locality")
      );

      //further isolate those names
      let localArea =
        localAreaResults.length > 0 ? localAreaResults[0].long_name : "";

      // gets aministrative area names which are formatted differently from localitise
      // in googles response obj

      let adminAreaResults = placeNamefromTypes("administrative_area_level"); //this can be an array with more than 1 element

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
                callback([articles, countryOrNonNationalName, latlng]);
              } else {
                callback([
                  articles,
                  successfulPlaceName,
                  countryOrNonNationalName,
                  latlng,
                ]);
              }
            }
          });
        } //if no news is found
        if (articles.length === 0) {
          callback(undefined);
        }
      })();
    }
  });
};
