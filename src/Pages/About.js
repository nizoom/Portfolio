import React, { useState } from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import "./css/about.css"
import ContactLinks from "../Components/contactlinks/contactlinks";


const About = (props) => {


  const [clazz, setClazz] = useState(true)

  const classStatusForMobile = (sidebarStatus) => {
    if (sidebarStatus && window.innerWidth < 850) {
      setClazz(!clazz)
    }
    // if(window.innerWidth < 850) {
    //   setClazz(!clazz)
    // }
  }


  return (
    <div>

      <Logo />
      <Sidebar functionCallFromParent={classStatusForMobile} />
      {/* <div className={clazz ? "title" : "navOpen"}>
        <h1 style={{ color: "#D5B060", paddingBottom: "1em", fontSize: "2.2em" }}> Bįo</h1>
      </div> */}
      <div className={clazz ? "" : "navOpen"}>
        <div className="bubble">
          <h2 className="header">Hey there, I'm a New York based web developer and am actively looking for work...</h2>

        </div>
        <div className="bubble">

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
            is delivered, how we can view Twitter through someone else's eyes, and much more. My projects are created using modern web development tools such as React,
            Express JS, and Flexbox.

            <br /> <br />

          </p>

        </div>
        <ContactLinks />

      </div>
    </div >

  )
}

export default About;
