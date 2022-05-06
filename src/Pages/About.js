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


              <h2 className="header"> Hey there, I'm a web developer based in Boston and New York City.</h2>
              
              <img src = {Headshot} alt='Nissim Ram' className="headshot"/>
           

                  <p className="about-content">

                    I love to break down barriers to information and build tools that tackle important issues. I've found that web development can be a great way
                    to empower users through intuitive UI design, data
                    visualization, and employing APIs to bring up to date information.

                    Before entering the tech world I graduated from Brandeis University with a degree in
                    history and anthropology.

                    This background enables me to think about the unique challenges of our time and how
                    technology can be used in service of those issues.

                    I use the front-end language fundamentals of JavaScript, HTML, and CSS
                    to create new ways to visualize old paradigms such as how online news
                    is delivered, how we can view Twitter through someone else's eyes, and much more. My projects and client work are created using modern web development tools such as React,
                    Express JS, and Flexbox.



                  </p>
            </section>
          </div>
      </div>


  )
}

export default About;
