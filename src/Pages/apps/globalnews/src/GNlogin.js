import "./styles/compiledCss/auth.css";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "./config/firebase";
import { validateLogin } from "./functions/firebasefuncs";
const GNLogin = () => {
  const emailRef = useRef();
  const pwRef = useRef();
  const [err, setErr] = useState(false);
  const history = useHistory();
  const submitLogin = async (e) => {
    setErr(false);
    e.preventDefault();
    const email = emailRef.current.value;
    const pw = pwRef.current.value;
    const valid = validateLogin(email, pw);
    if (valid) {
      const result = await signInWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          history.push("/globalnews/home");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setErr(errorMessage);
        });
    } else {
      setErr("Please enter a valid email and password");
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
        <div className="gn-auth-form-wrapper">
          <form className="gn-auth-form">
            <h3 className="gn-auth-title">Login</h3>
            <div className="gn-form-section">
              <label htmlFor="email"> Email</label>
              <input id="email" type="email" name="email" ref={emailRef} />
            </div>
            <div className="gn-form-section">
              <label htmlFor="Password"> Password</label>
              <input
                id="password"
                type="password"
                name="password"
                ref={pwRef}
              />
            </div>
            <button
              type="submit"
              className="gn-login-btns"
              onClick={submitLogin}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GNLogin;
