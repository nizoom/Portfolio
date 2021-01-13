import React from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"


const About = ( props ) => {

  console.log(this.props.sidebarVisible);

  return (
    <div>
      <Logo/>
      <Sidebar onClick = {props.verb}
      sidebarStatus = {props.sidebarStatus}/>
      <h1> Here is my bio </h1>
    </div>
  )
}

export default About;
