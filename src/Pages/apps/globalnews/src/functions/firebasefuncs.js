import {
  getDatabase,
  ref,
  set,
  update,
  onValue,
  child,
  push,
} from "firebase/database";
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

// REMOVE LOCATION FROM SAVED

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
