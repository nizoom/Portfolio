import React from "react";
import "./tooltip.css";

const Tooltip = (props) => {

  // take this logic and put it in the sidebar component so that the onlick
  // is connected to the li rather than the tool

//onClick={showTip}

  return (
    <div className = {props.status? "contact_wrapper" : "invisible"}>
      <h4>
        <u>Email </u>: <br/><br/> nissimram1812@gmail.com </h4>
      <br/>
      <br/>
      <h4> <u> LinkedIn </u>:<br/><br/> https://www.linkedin.com/in/nissimram/ </h4>

    </div>
  );
};

export default Tooltip;
