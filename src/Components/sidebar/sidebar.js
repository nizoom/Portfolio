import React, {useState} from "react";
import classes from "./sidebar.css"

const Sidebar = ( props ) => {

//make useState part of sidebar rather than receive props from homepage
    // 1. the two features to replace is sidebarStatus and onClick
    // 2.
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const clickHandler = () => {
    setSidebarStatus(!sidebarStatus)
    console.log(sidebarStatus);
  }


  return (
    <div >
        <button className = {`classes ${sidebarStatus ? "change" : null}`}
        onClick = {clickHandler}>
          <div className = "bar1"></div>
          <div className = "bar2"></div>
          <div className = "bar3"></div>
        </button>
      <div className = {`classes ${sidebarStatus ? "sidebar" : "off"}`}>
        <nav>
          <ul>
            <li> Portfolio </li>
            <li> About </li>
            <li> Blog </li>
            <li> Contact </li>
            <li> GitHub </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
