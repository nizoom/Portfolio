import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Sidebar = (props) => {
  const isDesktop = useMediaQuery({ minWidth: 1300 });
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [sidebarClass, setSidebarClass] = useState("closed-sidebar");
  const currentPage = useLocation();

  useEffect(() => {
    const openClass =
      currentPage.pathname === "/"
        ? "open-homepage-version"
        : "open-regular-version";
    if (sidebarStatus) {
      setSidebarClass(`${openClass} slide-in`);
      return;
    }
    if (isDesktop) {
      setSidebarClass(`${openClass} lrg-window-slideout`);
    } else {
      setSidebarClass(`${openClass} regular-window-slideout`);
    }
    // Remove the class after 1 second
    const timer = setTimeout(() => {
      setSidebarClass("closed-sidebar");
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [sidebarStatus]);

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
    <div>
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

      <nav className="nav">
        <ul
          // the open class means the menu has the styling of when it
          //is open in terms of look but slide changes the orientation
          className={sidebarClass}
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
