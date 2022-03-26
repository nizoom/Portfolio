import globalnewsIcon from "../../../project_layout/worldnews.png"
import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import "./presentgn.css"
import "../projectbox.css"
import appIconCard from "../../../project_layout/appiconcard.png"
import appDescriptionCard from "../../../project_layout/appdescriptioncard.png"

const PresentGlobalNews = (props) => {


  return (
    <section className="whole-project-box">


    <div>
     <h3 className="global-news-title"> Try Global News</h3>
     <Link to="/globalnews" target="_blank" rel="noopener noreferrer">
              {/* <h3 className="app_title"> Try it out! </h3> */}
              <img src={globalnewsIcon} alt="world news icon" className="newsIcon" />
      <img src = {appIconCard} alt = 'icon card'className="global-new-icon-card"/>

            </Link>

      
    </div>

    <div>
      <div className="description-text-div">
          <p className="tech-used">  <span className="stack"> Tech stack: </span> <span className="tech-list">ReactJS, React Router, Material UI, Azure, Google Cloud, LeafletJS.  </span> </p>
          <button className="more-info-btn"> Click here for more info</button>
      </div>
      <img src = {appDescriptionCard} alt = 'app description card' className="app-description-card news-desc-card-location"/>
      


    </div>
    


      {/* <div className="title-wrapper">
        <h3 className="project-title"> Global News </h3>
      </div>
      <section className="project-wrapper">
        <div className="app-description">
          <p>
            Global news is a novel way to access information about the world. The user is presented with a world map and
            with a map click can learn about that place from a list of news articles generated from that location.
            The longitude and latitude from a map click is converted, using Google Cloud services,
            to a human readable address. The address is iterated through Azure's news API until relavent news appears.
            The user can also narrow their search by entering a keyword before clicking on the map. That key word
            will then be added to the parameters of the API query.
            <br /> <br /> <br />
            Technologies used: ReactJS, React Router, Material UI, Azure, Google Cloud, LeafletJS.

          </p>

        </div>



        <div className="app-link-wrapper" style={{
          height: "300px", fontFamily: "Montserrat, sans-serif",
          display: props.visibilityStatus === "navOpen" ? "none" : "block"
        }}>
          <div className="app-link">
            <Link to="/globalnews" target="_blank" rel="noopener noreferrer">
              <h3 className="app_title"> Try it out! </h3>
              <img src={globalnewsIcon} alt="world news icon" className="newsIcon" />

            </Link>
          </div>


        </div>
      </section> */}
    </section>
  )
}

export default PresentGlobalNews
// <span className="try"> 