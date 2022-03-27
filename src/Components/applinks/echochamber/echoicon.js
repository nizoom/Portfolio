import React from "react";
import EchoIconImg from "../../../project_layout/icon_transparent.png"
import "./echoicon.css"
import "../presentappstyles.css"

const EchoIcon = (props) => {
    return (
        <div className="whole-project-box">
            <div className="title-wrapper">
                <h3 className="project-title"> Echo Chamber </h3>
            </div>
            <section className="project-wrapper">
                <div className="app-description">
                    <p>
                        The Echo Chamber is a web scraping app that provides a peak into the public social network of your favorite
                        public figures, artists, and even friends! Enter a twitter handle and see all the
                        most recent posts from their followers. The result is a more wholistic picture of that individual's
                        interests and shared communities. There's also a world cloud generator of all that Twitter content to indicate popular language.
                        The project utilizes the Twitter API to receive the data and then uses a Node backend to process the tweets in chronological order
                        and consolidates all verbal content for a custom word cloud.
                        <br /> <br /> <br />
                        Technologies used: ReactJS, Material UI, NodeJS, ExpressJS

                    </p>

                </div>


                <div className="app-link-wrapper" style={{
                    height: "300px", fontFamily: "Montserrat, sans-serif",
                    display: props.visibilityStatus === "navOpen" ? "none" : "block"
                }}>
                    <div className="app-link">
                        <a href="https://entertheechochamber.herokuapp.com" target="_blank" rel="noopener noreferrer"

                        >
                            <h3 className="app_title"> Try it out! </h3>
                            <img src={EchoIconImg} alt="Echochamber icon" className="echoIcon" />

                        </a>
                    </div>
                </div>





                {/* <div name="echo_link" style={{
                    height: "300px", fontFamily: "Montserrat, sans-serif",
                    display: props.visibilityStatus === "navOpen" ? "none" : "block"
                }}>
                    <a href="https://entertheechochamber.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <h3 className="app_title"> Enter the Echo Chamber </h3>
                        <img src={EchoIconImg} alt="echochamber icon" className="echoIcon" />

                    </a>

                </div> */}
            </section>
        </div>
    )
}

export default EchoIcon;