import "./logo.css"
import React from "react";
import { Link } from "react-router-dom"

const Logo = () => {

  return (
    <div className="wrapper">
        <div className="name-div">
          <h1 className="gov_name"> Nissim Ram </h1>
          <hr className='gold-bar'/> 
          <h2 className="main-sub-header"> web developer</h2> 
         </div>

      {/* <div className="link_div">
        <Link to="/">
          <button className="parallelogram">  </button>
        </Link>
      </div> */}

    
    </div>
  )
}

export default Logo;
