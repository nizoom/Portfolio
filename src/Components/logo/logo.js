import React from "react";
import "./logo.css"
import { Link } from "react-router-dom"

const Logo = ( ) => {

  return (
    <div className = "wrapper">
      <Link to="/">
        <div className = "parallelogram"> </div>
       </Link>
       <div className = "name_div">
       <h1 className = "gov_name"> Nissim Ram </h1>
      </div>
    </div>
  )
}

export default Logo;
