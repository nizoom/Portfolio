import React, { useState, useEffect } from "react";
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
import NYCIcon from "../project_layout/builtnyclogo.png";
import globalnewsIcon from "../project_layout/worldnews.png";
import tyIcon from "../project_layout/tyicon.png";
import emailBuilderIcon from "../project_layout/form.png";
import TwitterIcon from "../project_layout/twitter.png";

const HomePage = () => {
  const [state, setState] = useState({
    visitationStatus: false,
    sidbarStatus: false,
  });

  const clickHandler = () => {
    console.log("clicked");
    setState((prevstate) => ({
      sidbarStatus: !prevstate.sidbarStatus,
    }));
  };
  console.log(process.env.REACT_APP_TILELAYER_KEY);

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

  return (
    <div className="homepage_wrapper background-covering">
      <div className=""> </div>
      <div className="fade-in">
        <Logo />
        <Sidebar clickHandler={clickHandler} />

        <div className="projects">
          <header>
            <Socials sidebarStatus={state.sidbarStatus} />
            <div className="intro-copy-wrapper">
              <h1 className=""> Hey there, </h1>
              <h3>
                welcome to my page. Check out my latest projects below or learn
                more about{" "}
                <Link to="/About" className="">
                  <span>what I do.</span>
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

          <section className="apps-section">
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
              position="six"
              status={state.popupStatus}
              logo={EchoIcon}
              btnOneTxt="View ReadMe"
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
                  {" "}
                  Web app that finds localized news based on geolocation from
                  map click.
                </p>
              }
              position="five"
              status={state.popupStatus}
              logo={globalnewsIcon}
              btnOneTxt="Try now"
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
              position="one"
              status={state.popupStatus}
              logo={emailBuilderIcon}
              btnOneTxt="View ReadMe"
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
              position="four"
              status={state.popupStatus}
              logo={tyIcon}
              btnOneTxt="View ReadMe"
            />

            <Cards
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
              status={state.popupStatus}
              githubUrl="https://github.com/nizoom/Twitter-API-Clone"
              logo={TwitterIcon}
              btnOneTxt="View ReadMe"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

{
  /* <Cards
              alt="Build NYC"
              appTitle="Build NYC"
              stackList="React JS, LeafletJS, ChartJS, SoQueryLanguage, NodeJS, ExpressJS."
              url="https://build-nyc.herokuapp.com/"
              githubUrl="https://github.com/nizoom/BuildNYC"
              Description={
                <p className="app-description">
                  {" "}
                  Data visualization interface that illustrates building
                  development in NYC.{" "}
                </p>
              }
              position="three"
              status={state.popupStatus}
              logo={NYCIcon}
              btnOneTxt="Try now"
            /> */
}
