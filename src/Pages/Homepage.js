import React, { Component } from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import Languages from "../Components/languages/languages"
import workingGif from "../Components/project_layout/whale.gif"
import "./css/homepage.css"

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sidebarVisible : false,
      clickHandler : ( ) => {
      this.setState(prevstate => ({
        sidebarVisible : !prevstate.sidebarVisible }))
      console.log(this.state.sidebarVisible);
    },
    giveWidth : window.innerWidth
    }
  }


  determineClass(x){
    console.log(window.innerWidth);
    if(x && window.innerWidth < 850){
      console.log(window.innerWidth);
      return "navOpen"
    } else {
      return "gif"
    }
  }




  render() {
    return(
      <div>
          <Logo/>
          <Sidebar click = {this.determineClass(this.state.sidebarVisible)}/>

          <div className = "projects">
            <div className = "comingSoonBanner">
              <h1> Welcome! Projects coming soon ...</h1>
              <br/>
              <img src = {workingGif}
                alt = "Gif file" className =
                {this.state.sidebarVisible && window.innerWidth < 850 ? "navOpen"
              : "gif"}
                height = "600px"/>

                  <br/>

            </div>
          </div>
          <Languages/>
     </div>
    )
}}

export default HomePage;
