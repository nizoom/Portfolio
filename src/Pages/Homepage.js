import React, { useState, useEffect, useMemo, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import myGa from "../myGa";
import Logo from "../Components/logo/logo";
import "./css/homepage.css";
import Socials from "../Components/socials/socials";
import {
  firstVisit,
  getLocalVisitStatus,
} from "../Components/localstorage/localstorage";
import rectangleGradient from "../assets/Rectangle.png";
import { useMediaQuery } from "react-responsive";
import {
  ProjectsGridComponent,
  smoothScroll,
} from "../Components/homepagecomponents/projects";
import { setupIntersectionObserver } from "./utils/visibilityoberver";

const HomePage = () => {
  const [state, setState] = useState({
    visitationStatus: false,
    sidbarStatus: false,
  });

  const history = useHistory();

  const projectSectionRef = useRef();
  const [webProjectsVisible, setWebProjectsVisible] = useState(false);

  useEffect(() => {
    // Runs after the first render() lifecycle
    const userVisitationStatus = getLocalVisitStatus();
    if (userVisitationStatus === null || userVisitationStatus === undefined) {
      firstVisit();
      history.push("/Intro");
    }
    myGa();

    if (!webProjectsVisible) {
      setupIntersectionObserver(projectSectionRef, setWebProjectsVisible);
    }
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 700 });
  const screenType = useMemo(() => {
    const layoutClass = isMobile
      ? "socials-mobile-view"
      : "sidebar-and-socials-wrapper";
    return layoutClass;
  }, [isMobile]);

  const handleProjectBtnClick = () => {
    smoothScroll(projectSectionRef);
  };
  return (
    <div className="landingpage-wrapper">
      <div className="fade-in">
        <Logo />

        <div className={screenType}>
          <Socials sidebarStatus={state.sidbarStatus} />
          {/* <Sidebar clickHandler={sidebarHandler} /> */}
        </div>
        <div className="landing-section">
          <header className="homepage-header">
            <h1> Nissim Ram</h1>
            <h2> Freelance web developer and writer</h2>
          </header>
          <nav className="landing-page-menu">
            <ul className="landingpage-ul">
              <li className="main-lp-li">
                <Link to="/Blog">
                  <button className="main-lp-li-btn">Blog</button>
                </Link>
              </li>

              <li className="main-lp-li">
                <button
                  className="main-lp-li-btn"
                  onClick={handleProjectBtnClick}
                >
                  Projects
                </button>
              </li>

              <li className="main-lp-li">
                <Link to="/About">
                  <button className="main-lp-li-btn">About</button>
                </Link>
              </li>

              <li className="main-lp-li">
                <Link to="/Contact">
                  <button className="main-lp-li-btn">Contact</button>
                </Link>
              </li>

              <li className="main-lp-li">
                <Link to="/Resume">
                  <button className="main-lp-li-btn">CV</button>
                </Link>
              </li>
            </ul>
          </nav>

          <div></div>
        </div>
      </div>
      <div className="transition-gradient">
        <img src={rectangleGradient} />
      </div>
      <div className="typing-wrapper" ref={projectSectionRef}>
        <div
          className={
            webProjectsVisible ? "projects-section-header" : "blacked-out"
          }
        >
          <h1>&lt;Web Projects/&gt;</h1>
        </div>
      </div>
      <section>
        <ProjectsGridComponent />
        <button> Contact</button>
      </section>
    </div>
  );
};

export default HomePage;
