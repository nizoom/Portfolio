import React, { useState } from "react";
import "./sidebar.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
//()=>setClipBoardStatus("Email : nissimram1812@gmail.com")


const Sidebar = (props) => {


  const [sidebarStatus, setSidebarStatus] = useState(false);

  const sideBarBtnHandler = () => {
    setSidebarStatus(!sidebarStatus)
    childFunction(!sidebarStatus)
    if(!sidebarStatus){
     
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      
    }
    //if sidebar closed so should tooltip
  }


  

  const childFunction = (e) => {
    props.functionCallFromParent(e)
  }


  //{navigator.clipboard.writeText(  "nissimram1812@gmail.com")}



  return (
    <div className="container">
      <div className="sidebar_btn">
        <div className={`classes ${sidebarStatus ? "change" : null}`}>
          <button className="square-btn"
            onClick={() => { sideBarBtnHandler(); childFunction(!sidebarStatus) }}>
            <div className="bars-wrapper"> 
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>

            </div>
           
          </button>
        </div>

      </div>
      <div className={`classes ${sidebarStatus ? "sidebar" : "off"}`}>
        <nav>
          <ul>
            <li onClick={sideBarBtnHandler}>
              <Link to="/" className="link" > Portfolio </Link>
            </li>

            <li onClick={sideBarBtnHandler}> 
              <Link to="/About" className="link"> About </Link>
            </li>

            <li onClick={sideBarBtnHandler}>
              <Link to="/Blog" className="link"> Blog. </Link>
            </li>

            <li onClick={sideBarBtnHandler}>
              <a target="blank" href="https://github.com/nizoom"
                className="link">
                GitHub </a>
            </li>

            <li onClick={sideBarBtnHandler}>
              <Link to="/Contact" className="link"> Contact </Link>
            </li>


          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
