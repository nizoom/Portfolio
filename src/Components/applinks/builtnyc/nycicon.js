import React from "react";
import "./nycicon.css"
import "../projectbox.css"
import NYCIconImg from "../../../project_layout/builtnyclogo.png"

const NYCIcon = (props) => {
    return (
        <div className="whole-project-box">
            <div className="title-wrapper">
                <h3 className="project-title"> Built NYC </h3>
            </div>
            <section className="project-wrapper">
                <div className="app-description">
                    <p>
                        Built NYC is a data visualization tool that explores building development in New York City.
                        Using a data base provided by
                        <a style={{ color: "#DC6DD9", opacity: "1" }}
                            target="_blank" rel="noopener noreferrer"
                            href="https://data.cityofnewyork.us/Housing-Development/DOB-Permit-Issuance/ipu4-2q9a"> NYC Open Data </a>
                        the user can view building demolition and constructions by year and borough on a location specific map. Each location is
                        a clickable pin that displays the address, owner, and contracting company of the site. Data visualizations
                        are supplemented by charts that provide a breakdown of construction permits by type and a graph that show
                        construction trends for the last 30 years.
                        <br /> <br /> <br />
                        Technologies used: React JS, LeafletJS, ChartJS, SoQL, NodeJS, ExpressJS

                    </p>

                </div>


                <div className="app-link-wrapper" style={{
                    height: "300px", fontFamily: "Montserrat, sans-serif",
                    display: props.visibilityStatus === "navOpen" ? "none" : "block"
                }}>
                    <div className="app-link">
                        <a href="https://build-nyc.herokuapp.com/" target="_blank" rel="noopener noreferrer"

                        >
                            <h3 className="app_title"> Try it out! </h3>
                            <img src={NYCIconImg} alt="Build NYC icon" className="NYCIcon" />

                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NYCIcon;