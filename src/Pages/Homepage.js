import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import Languages from "../Components/languages/languages"
import workingGif from "../Components/project_layout/whale.gif"
import classes from "./css/homepage.css"

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sidebarVisible : false,
      clickHandler : ( ) => {
      this.setState(prevstate => ({
        sidebarVisible : !prevstate.sidebarVisible }))
      console.log(this.state.sidebarVisible);
      }
    }
  }


  render() {
    return(
      <div>
          <Logo/>
          <Sidebar/>

          <div className = "projects">
            <div className = "comingSoonBanner">
              <h1> Welcome! Projects coming soon ...</h1>
              <img src = {workingGif}
                alt = "Gif file" className = "gif" height = "600px"/>
                  <br/>
                  <br/>
                  <br/>

            </div>
          </div>

          <Link to = "/About"> About </Link>
          <Languages/>
     </div>
    )
}}

export default HomePage;
