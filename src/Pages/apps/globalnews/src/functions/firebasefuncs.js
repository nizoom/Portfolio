import {
  getDatabase,
  ref,
  set,
  update,
  onValue,
  child,
  push,
  remove,
} from "firebase/database";
import { findAllInRenderedTree } from "react-dom/test-utils";
export const validateSignup = (email, pw, cfmPw) => {
  // console.log(email);
  // console.log(pw);
  // console.log(cfmPw);
  if (email && pw && cfmPw) {
    const cfmedPw = pw === cfmPw ? true : false;
    if (cfmedPw) {
      return true;
    }
  } else {
    console.log("false");
    return false;
  }
};

export const validateLogin = (email, pw) => {
  if (email && pw) {
    return true;
  } else {
    return false;
  }
};
// CHECK IF USER EXISTS DB
export const checkUserInDB = (uid) => {
  const db = getDatabase();
  const userRef = ref(db, "users/" + uid);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      //create user in DB
      initUser(uid);
    }
  });
};

// INIT USER
function initUser(userId) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {});
  // );
}

export const saveLocation = (uid, locationData) => {
  const db = getDatabase();
  // const [locationName, latlng] = locationData;
  const newLocationKey = push(child(ref(db), "savedLocations")).key;
  const updates = {};
  updates[`users/${uid}/savedLocations/${newLocationKey}`] = locationData;

  return update(ref(db), updates)
    .then(() => {
      // Data saved successfully!
      console.log("success");
    })
    .catch((error) => {
      console(error);
    });
};

// GET SAVED LOCATIONS

export const getSavedLocations = async (uid) => {
  const db = getDatabase();
  const locationsRef = ref(db, "users/" + uid + "/savedLocations");
  let savedLocations;
  await onValue(locationsRef, (snapshot) => {
    savedLocations = snapshot.val();
    // if (!snapshot.exists() || savedLocations === null) {
    //   return false;
    // }
  });
  const sortedLocations = sortLocationObject(savedLocations);
  return sortedLocations;
};

// SORT LOCATIONS OBJECT

function sortLocationObject(locations) {
  if (locations === undefined || locations === null) {
    // no locations saved yet
    return false;
  }
  const arrOfObjects = Object.entries(locations);
  const organizedObjects = arrOfObjects.map((el) => {
    const locationId = el["0"];
    const { latlng, locationName } = el["1"];
    return {
      locationId: locationId,
      locationName: locationName,
      latlng: latlng,
    };
  });
  return organizedObjects;
}

// REMOVE LOCATION FROM SAVED

export const removeLocationFromSaved = (uid, locationId) => {
  const db = getDatabase();
  const locationsRef = ref(
    db,
    "users/" + uid + "/savedLocations/" + locationId
  );
  return remove(locationsRef)
    .then(function () {
      console.log("Remove succeeded.");
      return { status: true };
    })
    .catch(function (error) {
      console.log("Remove failed: " + error.message);
      return { status: false, msg: error.message };
    });
  // console.log(locationsRef);
};
