import React, { useState } from "react";
import "./css/resume.css";

import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar";
import DownloadIcon from "../assets/download.jpg";
import ResumePDF from "../assets/RamNissimResume.pdf";

const Resume = () => {
  // hide resume download btn when sidebar is active
  const [dlBtn, setDlBtn] = useState(true);

  const sidebarHandler = () => {
    setDlBtn(!dlBtn);
  };

  return (
    <div className="resume-page-wrapper">
      <Logo />
      <div>
        <div className="sidebar-and-socials-wrapper">
          <Sidebar clickHandler={sidebarHandler} />
        </div>

        <a href={ResumePDF} rel="noreferrer" target="_blank" download>
          {dlBtn ? (
            <button className="download">
              {" "}
              <img src={DownloadIcon} alt="download-resume" />
            </button>
          ) : null}
        </a>
      </div>

      <section className="resume-wrapper">
        <h3 className="section-header"> Skills </h3>
        <p className="body-paragraph">
          JavaScript, React, Node, WordPress, Elementor, TypeScript, Next,
          Express, HTML5, CSS3, SASS, Bootstrap, Figma, Google Cloud, Sanity
          CMS, Firebase, Git, GitHub
        </p>

        <h3 className="section-header"> Professional Experience</h3>
        <div className="experience-section">
          <div className="title-dates-split">
            <h3 className="experience-name">
              3:5Creative[s],
              <span className="position"> Lead WordPress Developer</span>
            </h3>
            <h3 className="date"> 07/23 – present </h3>
          </div>
          <ul className="list">
            <li>
              Built out full websites for company clients based on wireframes
              from design team.
            </li>
            <li>
              Responded to client and designer feedback to iterate and improve
              wireframe implementation.
            </li>
            <li>
              Multitasked between multiple ongoing client sites to ensure quick
              turnaround.
            </li>
          </ul>

          <div className="title-dates-split">
            <h3 className="experience-name">
              UC San Diego Design Department
              <span className="position">Web Developer</span>
            </h3>
            <h3 className="date"> 09/22 – as needed </h3>
          </div>

          <ul className="list">
            <li>
              Prototyped and implemented an interactive lesson React application
              for an online design textbook using React and Sanity CMS
            </li>
            <li>
              Implemented accessibility best practices according to W3C
              guidelines
            </li>
          </ul>
          <div className="title-dates-split">
            <h3 className="experience-name">
              Common Threads Project,
              <span className="position">Software Consultant</span>
            </h3>
            <h3 className="date"> 06/21 – 01/23 </h3>
          </div>

          <ul className="list">
            <li>
              Analyzed donation intake system and took feedback from admins for
              possible improvements.
            </li>
            <li>
              Designed system workflow to automate the intake process for org
              director.
            </li>
            <li>
              Built Node app to run daily queries for new donations, update org
              databases, and send dynamic thank you emails.
            </li>
            <li>
              Created employee-facing multi-form React app to assist with thank
              you email generation derived from mailed checks.
            </li>
          </ul>

          <div className="title-dates-split">
            <h3 className="experience-name">
              {" "}
              Nissimram.com,{" "}
              <span className="position"> Freelance Developer </span>{" "}
            </h3>
            <h3 className="date"> 08/21 – present</h3>
          </div>

          <ul className="list">
            <li>
              Designed, built, and deployed multiple full-stack responsive React
              apps. Projects showcase API integration, web scraping, data base
              implementation.
            </li>
          </ul>

          <div className="title-dates-split">
            <h3 className="experience-name">
              {" "}
              Fragomen LLP, <span className="position">
                Assitant Paralegal
              </span>{" "}
            </h3>
            <h3 className="date"> 11/18 – 03/20 </h3>
          </div>

          <ul className="list">
            <li>
              Liaised with foreign nationals and processed high volume of
              immigrant visa applications. Ensured positive client relations by
              promptly communicating with and providing support for client HR
              representatives and foreign national employees.
            </li>
          </ul>

          <h3 className="section-header"> Education</h3>

          <div className="title-dates-split">
            <h3 className="experience-name">
              {" "}
              Cook Systems FastTrack Java Program{" "}
            </h3>
            <h3 className="date"> 06/22 – 08/22 </h3>
          </div>
          <p className="education-paragraph">
            {" "}
            Concentrated Java Frameworks and developer tools training
          </p>

          <div className="title-dates-split">
            <h3 className="experience-name">
              {" "}
              Brandeis University – Waltham, MA.{" "}
            </h3>
            <h3 className="date"> 09/14 – 05/18 </h3>
          </div>
          <p className="education-paragraph">
            B.S. in History and Anthropology{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;

{
  /* <div className="title-dates-split">
            <h3 className="experience-name">
              {" "}
              Cook Systems,{" "}
              <span className="position">
                FastTrack Developer Graduate
              </span>{" "}
            </h3>
            <h3 className="date"> 06/22 – 08/22</h3>
          </div>

          <ul className="list">
            <li>
              Collaborated with other engineers to build applications during
              simulated Agile sprints (React frontend, Java SpringBoot backend).
            </li>
            <li>
              Team lead for building out and testing backend endpoints for a
              Twitter API clone in Java.
            </li>
            <li>
              Contributed to the functionality of a full stack company dashboard
              React app where administrators login to create teams, projects,
              and announcements.
            </li>
          </ul> */
}
