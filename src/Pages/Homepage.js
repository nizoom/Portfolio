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
    determineClass : (x) =>{
      if(x && window.innerWidth < 850){
        this.setState({gifClass : "navOpen"})
      } else {
        this.setState({gifClass : "gif"})
      }

  },
      gifClass : "gif"
    }
    }



  render() {
    return(
      <div>
          <Logo/>
          <Sidebar
          functionCallFromParent = {this.state.determineClass}/>

          <div className = "projects">
            <div className = "comingSoonBanner">
              <h1 className = {this.state.gifClass}> Welcome! Projects coming soon ...</h1>
              <br/>
              <img src = {workingGif}
                alt = "Gif file" className =
                {this.state.gifClass}
                height = "600px"/>

                  <br/>

            </div>
          </div>
          <Languages classStatusForMobile = {this.state.gifClass}/>
     </div>
    )
}}

export default HomePage;
