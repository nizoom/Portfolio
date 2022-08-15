import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./css/resume.css"

import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar";
import DownloadIcon from "../project_layout/download.jpg"
import ResumePDF from "../project_layout/RamNissimResume.pdf"
const Resume = () => {

    const [navStatus, setNavStatus] = useState(false);

    const getSidebarStatus = (sidebarStatus) => {
  
    return (sidebarStatus ? setNavStatus(true) : setNavStatus(false))
  }

    return (
        <div className="resume-page-wrapper">
            <Logo/>
            <div className="top-right-div">
                <Sidebar clickHandler={null}/>
                <a  href={ResumePDF} target="_blank" download>
                    <button className="download"> <img  src = {DownloadIcon}/> 
    
                    </button>
                </a>

            </div>
           
            <h1 className="resume-header"> Resume </h1>
           { !navStatus ? <section className="resume-wrapper">
            <h3 className="section-header"> Skills </h3>
            <p className="body-paragraph">
            JavaScript, React, Node, Next, Express, HTML5, CSS3, Material UI, Figma, Google Cloud, Azure, PostGreSQL, Java, Spring, SpringBoot, Maven, Eclipse, Git, GitHub      </p>
            {/* <h3 className="section-header"> Technical Skills</h3> */}

           {/* <span> <p className="tech-header">Programming </p> Java, JavaScript, HTML5, CSS3, SQL, Spring, Spring Boot, JDBC, Jackson, NodeJS, Webpack, ReactJS, NextJS, Redux, Babel, Maven, NPM, Material UI  </span> */}
        

           <h3 className="section-header"> Professional Experience</h3>
           <div className="experience-section">
                <div className="title-dates-split">
                    <h3 className="experience-name"> Common Threads Project, <span className="position">Software Developer</span></h3> 
                    <h3 className="date">  06/21 – present </h3>
                
                </div>
                

                <ul className="list">
                    <li>Analyzed donation intake system and took feedback from admins for possible improvements.</li>
                    <li>Designed system workflow to automate the intake process for org director.</li>
                    <li>Built Node app to run daily queries for new donations, update org databases,
                        and send dynamic thank you emails.</li>
                    <li>Created employee-facing multi-form React app to assist with thank you email generation derived from mailed checks.</li>
                </ul>


                <div className="title-dates-split">
                    <h3 className="experience-name"> Cook Systems,  <span className="position">FastTrack Developer Graduate</span>  </h3> 
                    <h3 className="date">  06/22 – 08/22</h3>
                
                </div>
            
                <ul className="list">
                    <li>Collaborated with other engineers to build applications during simulated Agile sprints (React frontend, Java SpringBoot backend).</li>
                    <li>Team lead for building out and testing backend endpoints for a Twitter API clone in Java.</li>
                    <li>Contributed to the functionality of a full stack company dashboard React app where administrators login to create teams, projects, and announcements.</li>
  
                </ul>


                <div className="title-dates-split">
                    <h3 className="experience-name"> Nissimram.com, <span className="position"> Freelance Developer </span>  </h3> 
                    <h3 className="date">    08/21 – 11/21</h3>
                
                </div>
            
                <ul className="list">
                    <li>Designed, built, and deployed multiple full-stack React apps using responsive CSS. Projects showcase data visualization, API integration, and web scraping. </li> 
                    <li>Documented production process through blog posts I wrote to log my coding journey. </li>
                   
                </ul>


                <div className="title-dates-split">
                    <h3 className="experience-name"> Fragomen LLP,  <span className="position">Assitant Paralegal</span>  </h3> 
                    <h3 className="date"> 11/18 – 03/20 </h3>
                
                </div>
            
                <ul className="list">
                    <li>Maintained flow of business by processing large volume of active immigration matters under strict deadlines for corporate / individual clients related to nonimmigrant visas, permanent residence and citizenship. </li>
                    <li>Ensured positive client relations by promptly communicating with and provide support for client HR representatives and foreign national employees.</li>
                    <li>Thoroughly summarized job duties and responsibilities for specialized visa applications for those seeking H1-B, L-1, and TN status. </li>
                </ul>



                <h3 className="section-header"> Education</h3>
            
                <div className="title-dates-split">
                    <h3 className="experience-name"> Cook Systems FastTrack Java Program – Memphis, TN </h3> 
                    <h3 className="date">  06/22 – 08/22  </h3>
                
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