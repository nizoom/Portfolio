import React from "react";
import { useRef, useState } from "react";
import "./styles/compiledCss/auth.css";
import { validateSignup } from "./functions/firebasefuncs";
import { auth } from "./config/firebase";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const GNSignup = () => {
  const emailRef = useRef();
  const pwRef = useRef();
  const cfmPwRef = useRef();

  const history = useHistory();
  const [err, setErr] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const submitSignup = async (e) => {
    e.preventDefault();
    setErr("");
    const email = emailRef.current.value;
    const pw = pwRef.current.value;
    const cfmPw = cfmPwRef.current.value;
    if (validateSignup(email, pw, cfmPw)) {
      const result = await createUserWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
          // Created successfully
          // const user = userCredential.user;
          setSuccessMsg("Account created successfully. Redirecting...");
          setTimeout(() => {
            history.push("/globalnews/landingpage");
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorMessage);
        });
    } else {
      setErr("Please provid a valid email and matching passwords. ");
    }
  };
  return (
    <div className="gn-authpage-wrapper">
      <section>
        {err ? (
          <p
            className="err"
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            {err}
          </p>
        ) : null}
        {successMsg ? (
          <p
            className="gn-success-msg"
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            {successMsg}
          </p>
        ) : null}
        <div className="gn-auth-form-wrapper">
          <form className="gn-auth-form">
            <h3 className="gn-auth-title">Sign up</h3>
            <div className="gn-form-section">
              <label htmlFor="email"> Email</label>
              <input
                id="email"
                type="email"
                name="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="gn-form-section">
              <label htmlFor="Password"> Password</label>
              <input
                id="password1"
                type="password"
                name="password"
                ref={pwRef}
                required
              />
            </div>
            <div className="gn-form-section">
              <label htmlFor="Password"> Confirm password </label>
              <input
                id="password2"
                type="password"
                name="password"
                ref={cfmPwRef}
                required
              />
            </div>
            <button
              type="submit"
              className="gn-login-btns"
              onClick={submitSignup}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GNSignup;
