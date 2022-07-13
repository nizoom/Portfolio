import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./css/resume.css"

import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar";
import DownloadIcon from "../project_layout/download.jpg"
import ResumePDF from "../project_layout/RamNissimFTRes1.pdf"
const Resume = () => {

    const [navStatus, setNavStatus] = useState(false);

    const getSidebarStatus = (sidebarStatus) => {
  
    return (sidebarStatus ? setNavStatus(true) : setNavStatus(false))
  }

    return (
        <div className="resume-page-wrapper">
            <Logo/>
            <div className="top-right-div">
                <Sidebar functionCallFromParent={getSidebarStatus} />
                <a  href={ResumePDF} target="_blank" download>
                    <button className="download"> <img  src = {DownloadIcon}/> 
    
                    </button>
                </a>

            </div>
           
            <h1 className="resume-header"> Resume </h1>
           { !navStatus ? <section className="resume-wrapper">
            <h3 className="section-header"> Professional Summary</h3>
            <p className="body-paragraph">
            Nissim Ram is a versatile developer who is comfortable in both the front end and back end of software development. He has built numerous web applications for clients and personal use where he brought an eye for design, an ability to iterate and implement new features, and a positive outlook to projects. To round off his skills Nissim has a certification from the FastTrack Java developer program where he built projects in modern Java frameworks such as Spring. He also graduated from Brandeis university with degrees in history and anthropology.  Before entering the technical space, he worked in publishing and immigration law which further honed Nissim’s strong verbal and written communication skills.
            </p>
            <h3 className="section-header"> Technical Skills</h3>

           <span> <p className="tech-header">Programming </p> Java, JavaScript, HTML5, CSS3, SQL, Spring, Spring Boot, JDBC, Jackson, NodeJS, Webpack, ReactJS, NextJS, Redux, Babel, Maven, NPM, Material UI  </span>
           <span> <p className="tech-header">Software </p> Eclipse, VS Code, Git, GitHub, Terminal, PGAdmin, Figma, Heroku</span>
           <span> <p className="tech-header">RDBMS </p>  PostgreSQL </span>

           <h3 className="section-header"> Professional Experience</h3>
           <div className="experience-section">
                <div className="title-dates-split">
                    <h3 className="experience-name"> Cook System - Remote, <span className="position">FastTrack Developer</span></h3> 
                    <h3 className="date">  06/22 – Present </h3>
                
                </div>
                <h4 className="project"> Twitter API Clone </h4>

                <ul className="list">
                    <li>Implemented a RESTful Web Service with over thirty endpoints for creating, replying, modifying, deleting, and liking Tweets to and from a server via basic CRUD operations and other HTTP requests</li>
                    <li>Developed a database schema/ERD supported by PostgreSQL in PGAdmin in collaboration with other developers</li>
                    <li>Utilized SpringBoot and JPA to program controllers and services that handle HTTP requests and backend validation and logic to convert data between the API and its database models</li>
                    <li>Tested, troubleshot, and debugged API functionality in Postman until project requirements were achieved</li>
                    <li> Environment: Java, SpringBoot, JPA, PostgresQL, PGAdmin, Postman, Git, Github, Eclipse, Maven</li>
                </ul>


                <div className="title-dates-split">
                    <h3 className="experience-name"> Common Threads Project - New York,  <span className="position">Software Developer</span>  </h3> 
                    <h3 className="date">  09/21 – 6/22 </h3>
                
                </div>
            
                <ul className="list">
                    <li>Analyzed donation intake system and spoke with admins for possible improvements.</li>
                    <li>Designed system workflow to automate the intake process for org director.</li>
                    <li>Built a NodeJS app to streamline donation intake using a REST API to schedule daily donor queries, update the donor database, and send dynamic thank you emails.</li>
                    <li>Created an employee-facing multi-form React app to assist with thank you email generation derived from mailed checks. </li>
                    <li> Environment: ReactJS, NodeJS, ExpressJS, Handlebars, NodeMailer,  HTML, CSS, Figma</li>
                </ul>


                <div className="title-dates-split">
                    <h3 className="experience-name"> Built NYC – New York, <span className="position">Creator</span>  </h3> 
                    <h3 className="date">    08/21 – 11/21</h3>
                
                </div>
            
                <ul className="list">
                    <li>Created web app to visualize data on 30 years of building development in NYC. </li>
                    <li>Used query language to fetch data by year, borough, and construction project from a maintained database.</li>
                    <li>Deployed via Heroku so that New Yorkers get a clear view of building ownership over time..</li>
                    <li>Created an employee-facing multi-form React app to assist with thank you email generation derived from mailed checks. </li>
                    <li>Environment: ReactJS, NodeJS, ExpressJS, CharJS,  HTML, CSS, Socrata QL</li>
                </ul>


                <div className="title-dates-split">
                    <h3 className="experience-name"> Echochamber – Cambdidge MA,  <span className="position">Creator</span>  </h3> 
                    <h3 className="date">   06/21 – 07/22</h3>
                
                </div>
            
                <ul className="list">
                    <li>Developed web app to recreate a person’s Twitter feed through chronological cards featuring tweets. </li>
                    <li>Implemented user interface to produce a novel way to experience social media without unnecessary authentication using Twitter’s API.</li>
                    <li>Designed word cloud to display analysis of common language from a given Twitter feed </li>
                    <li>Utilized conditional rendering to toggle between features. </li>
                    <li>Environment: ReactJS, Material UI, NodeJS, ExpressJS, HTML, CSS</li>
                </ul>


                <div className="title-dates-split">
                    <h3 className="experience-name"> Fragomen LLP – New York,  <span className="position">Assitant Paralegal</span>  </h3> 
                    <h3 className="date"> 11/18 – 03/20 </h3>
                
                </div>
            
                <ul className="list">
                    <li>Maintained flow of business by processing large volume of active immigration matters under strict deadlines for corporate / individual clients related to nonimmigrant visas, permanent residence and citizenship. </li>
                    <li>Ensured positive client relations by promptly communicating with and provide support for client HR representatives and foreign national employees.</li>
                    <li>Thoroughly summarized job duties and responsibilities for specialized visa applications for those seeking H1-B, L-1, and TN status. </li>
                </ul>


                <div className="title-dates-split">
                    <h3 className="experience-name"> Hachette Book Group – New York,  <span className="position">Editorial and Marketing Intern</span>  </h3> 
                    <h3 className="date"> 06/18 – 09/18 </h3>
                
                </div>
            
                <ul className="list">
                    <li>Assessed manuscripts for strengths and weaknesses through crafting reports to support the editorial team. </li>
                    <li>Enhanced SEO by by curating metadata for backlisted and upcoming books on Amazon and other Databases based on popular search and cultural trends.</li>
                    <li>Provided marketing suggestions and created lists of comparable titles for potential publications. </li>
                    <li> Created spreadsheets listing noteworthy independent publications from the past year.</li>
                </ul>

                <h3 className="section-header"> Relavent Coursework</h3>

                <ul className="list">
                <em> <li> Headfirst HTML and CSS by Elisabeth Robson and Eric Freeman  </li>
                    <li>The Complete JavaScript Course 2021 by Jonas Schmedtmann .</li>
                    <li>React - The Complete Guide by Maximillian Schwarzmuller</li> </em>
                 
                </ul>

                <h3 className="section-header"> Education</h3>
            
                <div className="title-dates-split">
                    <h3 className="experience-name"> Cook Systems FastTrack Java Program – Memphis, TN </h3> 
                    <h3 className="date">  06/22 – Present  </h3>
                
                </div>
                <p className="education-paragraph"> Concentrated Java Frameworks and developer tools training</p>

                <div className="title-dates-split">
                    <h3 className="experience-name"> Brandeis University – Waltham, MA. </h3> 
                    <h3 className="date">   09/14 – 05/18 </h3>
                
                </div>
                <p className="education-paragraph">B.S. in History and Anthropology 	          		</p>


           </div>

            </section> : null}
        </div>
    )
}

export default Resume;