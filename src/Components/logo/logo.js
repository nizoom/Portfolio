import React from "react";
import "./logo.css"
import { Link } from "react-router-dom"

const Logo = ( ) => {

  return (
    <div className = "wrapper">

      <div className = "link_div">
          <Link to="/">
          <button className = "parallelogram">  </button>
          </Link>
      </div>

       <div className = "name_div">
       <h1 className = "gov_name"> Nissim Ram </h1>
      </div>
    </div>
  )
}

export default Logo;
