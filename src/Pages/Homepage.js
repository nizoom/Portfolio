import React, { useState, useEffect, useMemo } from "react";
import { useHistory, Link } from "react-router-dom";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import myGa from "../myGa";

import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar";
import "./css/homepage.css";
import gradientBubble from "./../project_layout/Ellipse.png";
import Cards from "../Components/applinks/cardscomponent/cards";
import Socials from "../Components/socials/socials";
import {
  firstVisit,
  getLocalVisitStatus,
} from "../Components/localstorage/localstorage";
import EchoIcon from "../project_layout/echochambericon.png";
// import NYCIcon from "../project_layout/builtnyclogo.png";
import globalnewsIcon from "../project_layout/worldnews.png";
import tyIcon from "../project_layout/tyicon.png";
import emailBuilderIcon from "../project_layout/form.png";
// import TwitterIcon from "../project_layout/twitter.png";
import internIcon from "../project_layout/intern.png";
import Fade from "../Components/applinks/cardscomponent/slider";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const [state, setState] = useState({
    visitationStatus: false,
    sidbarStatus: false,
  });

  const sidebarHandler = () => {
    setState((prevstate) => ({
      sidbarStatus: !prevstate.sidbarStatus,
    }));
  };

  const history = useHistory();
  useEffect(() => {
    // Runs after the first render() lifecycle
    const userVisitationStatus = getLocalVisitStatus();
    if (userVisitationStatus === null || userVisitationStatus === undefined) {
      firstVisit();
      history.push("/Intro");
    }
    myGa();
  }, []);
  const [showCarousel, setShowCarousel] = useState(false);

  const sliderControls = {
    triggerSlider: () => {
      setShowCarousel(true);
    },
    closeSlider: () => {
      setShowCarousel(false);
    },
  };

  const isMobile = useMediaQuery({ maxWidth: 700 });
  const screenType = useMemo(() => {
    const layoutClass = isMobile
      ? "socials-mobile-view"
      : "sidebar-and-socials-wrapper";
    return layoutClass;
  }, [isMobile]);

  return (
    <div className="homepage_wrapper background-covering">
      <div className=""> </div>
      <div className="fade-in">
        <Logo />

        <div className={screenType}>
          <Socials sidebarStatus={state.sidbarStatus} />
          <Sidebar clickHandler={sidebarHandler} />
        </div>
        <div className="projects">
          <header className="homepage-header">
            <div className="intro-copy-wrapper">
              <h1 className=""> Hey there, </h1>
              <h3>
                welcome to my page. Check out my latest projects below or learn
                more about
                <Link to="/About" style={{ textDecoration: "none" }}>
                  <span> what I do.</span>
                </Link>
              </h3>
            </div>
          </header>

          <div className="bubbles-wrapper">
            <img
              src={gradientBubble}
              alt="graphic of bubbles falling down"
              className="left large move"
            />
            <img
              src={gradientBubble}
              alt="graphic of bubbles falling down"
              className="small-bbl middle-left move-2"
            />
            <img
              src={gradientBubble}
              alt="graphic of bubbles falling down"
              className="small-bbl middle-right move"
            />
            <img
              src={gradientBubble}
              alt="graphic of bubbles falling down"
              className="right large move-2"
            />
            <img
              src={gradientBubble}
              alt="graphic of bubbles falling down"
              className="small-bbl right-most move"
            />
          </div>

          <div>
            {showCarousel ? (
              <Fade
                sliderControls={sliderControls}
                sliderStatus={showCarousel}
              />
            ) : null}
          </div>
          <section className="apps-section">
            <Cards
              alt="Web Developer Intern"
              appTitle="Web Dev Intern with 3:5Creative[s]"
              stackList="WordPress, HTML, Bootstrap, JS, Elementor"
              url=""
              githubUrl=""
              Description={
                <p className="app-description">
                  Built out full WordPress websites for multiple company clients
                  based on wireframes from design team.
                </p>
              }
              logo={internIcon}
              mainBtnTxt="View pages"
              sliderControls={sliderControls}
            />
            <Cards
              alt="FeedSee"
              appTitle="FeedSee"
              stackList="ReactJS, TypeScript, Chakra UI, NodeJS, ExpressJS."
              url="https://github.com/nizoom/FeedSee"
              githubUrl="https://github.com/nizoom/FeedSee"
              Description={
                <p className="app-description">
                  Web scraping app that uses Twitter's API to recreate a
                  personal feed.
                </p>
              }
              logo={EchoIcon}
              mainBtnTxt="View ReadMe"
              sliderControls={sliderControls}
            />

            <Cards
              alt="Global News"
              appTitle="Global News"
              url=" https://nissimram.com/#/globalnews/landingpage"
              // url=" http://localhost:3000/#/globalnews/landingpage"
              githubUrl="https://github.com/nizoom/Portfolio/tree/main/src/Pages/apps/globalnews/src"
              stackList="ReactJS, React Router, Azure, Google Cloud, Firebase."
              linkType="Link"
              Description={
                <p className="app-description">
                  Web app that finds localized news based on geolocation from
                  map click.
                </p>
              }
              logo={globalnewsIcon}
              mainBtnTxt="Try now"
              sliderControls={sliderControls}
            />

            <Cards
              alt="Thank You Email Generator"
              appTitle="Thank You Email Generator"
              stackList=" ReactJS, ExpressJS, NodeJS, NodeMailer, and Handlebars."
              githubUrl="https://github.com/nizoom/TYTemplateBuilder#readme"
              Description={
                <p className="app-description">
                  {" "}
                  Form web app that builds and sends templated thank you emails.
                </p>
              }
              logo={emailBuilderIcon}
              mainBtnTxt="View ReadMe"
              sliderControls={sliderControls}
            />

            <Cards
              alt="Thank you Email Automation"
              appTitle="Thank You Email Automation"
              stackList=" ExpressJS, NodeJS, NodeMailer, and Handlebars."
              githubUrl="https://github.com/nizoom/TYAutomation"
              Description={
                <p className="app-description">
                  {" "}
                  Backend app that uses that generates custom daily thank you
                  emails based on donations from an API.
                </p>
              }
              logo={tyIcon}
              mainBtnTxt="View ReadMe"
              sliderControls={sliderControls}
            />

            {/* <Cards
              alt="Twitter API Clone"
              appTitle="Twitter API Clone"
              stackList="Java, SpringBoot, JPA, PostgresQL, PGAdmin, Postman, Eclipse, Maven"
              Description={
                <p className="app-description">
                  {" "}
                  Java backend including endpoints to create users, like tweets,
                  and follow accounts
                </p>
              }
              position="two"
            
              githubUrl="https://github.com/nizoom/Twitter-API-Clone"
              logo={TwitterIcon}
              btnOneTxt="View ReadMe"
            /> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
