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
      <Sidebar clickHandler={null} />
    
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

