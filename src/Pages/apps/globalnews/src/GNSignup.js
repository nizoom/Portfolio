import React from "react";
import "./styles/compiledCss/auth.css";
const GNSignup = () => {
  return (
    <div className="gn-authpage-wrapper">
      <section>
        <div className="gn-auth-form-wrapper">
          <form className="gn-auth-form">
            <h3 className="gn-auth-title">Sign up</h3>
            <div className="gn-form-section">
              <label htmlFor="email"> Email</label>
              <input id="email" type="email" name="email" />
            </div>
            <div className="gn-form-section">
              <label htmlFor="Password"> Password</label>
              <input id="password" type="password" name="password" />
            </div>
            <div className="gn-form-section">
              <label htmlFor="Password"> Confirm password </label>
              <input id="password" type="password" name="password" />
            </div>
            <button type="submit" className="gn-login-btns">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GNSignup;
