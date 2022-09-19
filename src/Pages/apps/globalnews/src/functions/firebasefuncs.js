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
