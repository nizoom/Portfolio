import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = (props) => {

  // take this logic and put it in the sidebar component so that the onlick
  // is connected to the li rather than the tool
  const [active, setActive] = useState(false);

  const showTip = event => {

      setActive(!active);
      console.log("test");

    }


  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onClick={showTip}

    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "bottom"}`}
        >
          {/* Content */}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
