import React, { useState } from "react";
import "./sidebar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Sidebar = (props) => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const sideBarBtnHandler = () => {
    setSidebarStatus(!sidebarStatus);
    if (props.clickHandler != null) {
      props.clickHandler();
    }
    // rerender nav
    if (!sidebarStatus) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <div className="">
        <div className={`classes ${sidebarStatus ? "change" : null}`}>
          <button
            className="square-btn"
            onClick={() => {
              sideBarBtnHandler();
            }}
          >
            <div className="bars-wrapper">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>
        </div>
      </div>

      <nav className="nav">
        {/* <nav className={sidebarStatus ? "" : ""}> */}
        <ul
          // the open class means the menu has the styling of when it
          //is open in terms of look but slide changes the orientation
          className={
            sidebarStatus ? "open slide-in" : "open lrg-window-slideout"
          }
        >
          <li onClick={sideBarBtnHandler}>
            <Link to="/" className="link">
              Portfolio
            </Link>
          </li>

          <li onClick={sideBarBtnHandler}>
            <Link to="/About" className="link">
              About
            </Link>
          </li>

          <li onClick={sideBarBtnHandler}>
            <Link to="/Blog" className="link">
              Blog.
            </Link>
          </li>

          <li onClick={sideBarBtnHandler}>
            <a target="blank" href="https://github.com/nizoom" className="link">
              GitHub
            </a>
          </li>

          <li onClick={sideBarBtnHandler}>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </li>

          <li onClick={sideBarBtnHandler}>
            <Link to="/resume" className="link">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
