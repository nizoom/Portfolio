import React, { useState } from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import Headshot from "../project_layout/headshot.png"
import "./css/about.css"

const About = (props) => {


  const [navStatus, setNavStatus] = useState(false)


  const getSidebarStatus = (sidebarStatus) => {
 
    return (sidebarStatus ? setNavStatus(true) : setNavStatus(false))
  }


  return (
    <div className="page-wrapper">

      <Logo />
      <Sidebar functionCallFromParent={getSidebarStatus} />
    
      <div>

        <section className={navStatus ? "nav-open-about" : "about-wrapper"}> 


              <h2 className="header"> Hey there, I'm a web developer based in New York City.</h2>
              
              <img src = {Headshot} alt='Nissim Ram' className="headshot"/>
           

                  <p className="about-content">

                  The UIs I create begin in Figma and end in saving users a lot of time in reaching their goals. My work in the nonprofit space have taken tasks off the plates of employees and converted them to conveniently automated programs. Where tasks require a human touch, 
                  I create fluid and intuitive React UIs that build on the needs of stakeholders. 
                  <br/>
                  <br/>
                  Before entering the tech world, I graduated from Brandeis University with a degree in history and anthropology. 
                  This background helps me communicate effectively with end users to better anticipate their needs and provide deliverables in a timely manner. 

                  I also love to continue learning new technologies and strive to keep up with the rapidly changing world of front-end development. 




                  </p>
            </section>
          </div>
      </div>


  )
}

export default About;


// I love to break down barriers to information and build tools that tackle important issues. I've found that web development can be a great way
// to empower users through intuitive UI design, data
// visualization, and employing APIs to bring up to date information.

// Before entering the tech world I graduated from Brandeis University with a degree in
// history and anthropology.

// This background enables me to think about the unique challenges of our time and how
// technology can be used in service of those issues.

// I use the front-end language fundamentals of JavaScript, HTML, and CSS
// to create new ways to visualize old paradigms such as how online news
// is delivered, how we can view Twitter through someone else's eyes, and much more. My projects and client work are created using modern web development tools such as React,
// Express JS, and Flexbox.