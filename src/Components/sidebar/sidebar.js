import React, {useState, forwardRef} from "react";
import "./sidebar.css"
import {BrowserRouter as Router, Link} from "react-router-dom";
//()=>setClipBoardStatus("Email : nissimram1812@gmail.com")
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css"

import Tooltip from "../tooltip/tooltip"



const Sidebar = ( props ) => {

  const [sidebarStatus, setSidebarStatus] = useState(false);

  const clickHandlerBar = () => {
    setSidebarStatus(!sidebarStatus)
    //if sidebar closed so should tooltip
  }

  const [active, setActive] = useState(false);

  const showTip = () => {

      setActive(!active);
      console.log("test");

    }



  //{navigator.clipboard.writeText(  "nissimram1812@gmail.com")}



  return (
    <div >
        <button className = {`classes ${sidebarStatus ? "change" : null}`}
        onClick = {clickHandlerBar}>
          <div className = "bar1"></div>
          <div className = "bar2"></div>
          <div className = "bar3"></div>
        </button>
      <div className = {`classes ${sidebarStatus ? "sidebar" : "off"}`}>
        <nav>
          <ul>
            <li>
              <Link to = "/" className = "link"> Portfolio </Link>
            </li>

            <li>
              <Link to = "/About" className = "link"> About </Link>
            </li>

            <li>
              <Link to = "/Blog" className = "link"> Blog. </Link>
            </li>

            <li>
              <a target = "blank" href = "https://github.com/nizoom"
              className = "link">
              GitHub </a>
            </li>

              <li onClick = {showTip}>
                Contact
              </li>
              <Tooltip status = {active} />





          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
