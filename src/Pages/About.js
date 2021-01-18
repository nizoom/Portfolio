import React from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import classes from "./css/about.css"
import Languages from "../Components/languages/languages"


const About = ( props ) => {



  return (
    <div>
      <Logo/>
      <Sidebar />
      <h1 className = "title"> Bįo</h1>
      <div className = "main">


          <h2 className = "par_one">
           Nissim Ram is a New York based self-taught web developer. He
           looks to build tools that tackle social issues and break down barriers
           to information in ways that improve the lives of those in need. Before
           entering the tech world Nissim received a bachelor’s degree in history
           and anthropology from Brandeis University. Through this background he
           brings to bear the tools to articulate complicated issues that face our
           modern world and sees the potential for technology to be a solution.
           Nissim uses front-end language fundamentals such as JavaScript, HTML,
           and CSS to create new ways to visualize old paradigms such as the news and
           ____ . </h2>


           <br/>
           <h2 className = "par_two">
           Nissim has also assisted with producing websites for local New York
           creatives such as the writer _____ and curator _____ .
           He is passionate about improving his coding skills and is currently
           seeking new opportunities to do so.
           </h2>

       </div>

       <Languages/>
   </div>

  )
}

export default About;
