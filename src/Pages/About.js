import React, { useState }from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import "./css/about.css"


const About = ( props ) => {


  const [clazz, setClazz] = useState(true)

  const classStatusForMobile = ( sidebarStatus ) => {
    if (sidebarStatus && window.innerWidth < 850){
      setClazz(!clazz)
    } if(window.innerWidth < 850) {
      setClazz(!clazz)
    }
    }


  return (
    <div>

      <Logo/>
      <Sidebar functionCallFromParent = {classStatusForMobile}/>
      <div className = { clazz ? "title" : "navOpen" }>
        <h1> Bįo</h1>
      </div>
      <div className = { clazz ? "body" : "navOpen"}>

        <div className = "background">
          <h2>
           Nissim Ram is a New York based self-taught web developer. He
           looks to build tools that tackle social issues and break down barriers
           to information in ways that improve the lives of those in need. Before
           entering the tech world Nissim received a bachelor’s degree in history
           and anthropology from Brandeis University. Through this background he
           brings to bear the tools to articulate complicated issues that face our
           modern world and sees the potential for technology to be a solution.
           Nissim uses front-end language fundamentals such as JavaScript, HTML,
           and CSS to create new ways to visualize old paradigms such as how online news
           is delivered - with more projects to come.

            <br/> <br/>
            <div className = "par_two">
          He is passionate about improving his coding skills and is currently
          seeking new opportunities to do so.
            </div>

          </h2>
        </div>
       </div>
   </div>

  )
}

export default About;
