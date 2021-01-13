import React from "react";
import classes from "./sidebar.css"

const Sidebar = ( props ) => {

  return (
    <div >
        <button className = {`classes ${props.sidebarStatus ? "change" : null}`}
        onClick = {props.onClick}>
          <div className = "bar1"></div>
          <div className = "bar2"></div>
          <div className = "bar3"></div>
        </button>
      <div className = {`classes ${props.sidebarStatus ? "sidebar" : "off"}`}>
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
