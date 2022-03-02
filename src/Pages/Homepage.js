import React, { Component } from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
// import workingGif from "../project_layout/whale.gif"
import "./css/homepage.css"
import PresentGlobalNews from "../Components/applinks/presentglobalnews/presentgn"
import EchoIcon from "../Components/applinks/echochamber/echoicon";
import NYCIcon from "../Components/applinks/builtnyc/nycicon";

class HomePage extends Component {
  constructor(props) {
    super(props)


    this.state = {
      sidebarVisible: false,
      clickHandler: () => {
        this.setState(prevstate => ({
          sidebarVisible: !prevstate.sidebarVisible
        }))
        console.log(this.state.sidebarVisible);
      },
      determineClass: (x) => {
        if (x && window.innerWidth < 850) {
          this.setState({ gifClass: "navOpen" })
        } else {
          this.setState({ gifClass: "gif" })
        }

      },
      gifClass: "gif"
    }
  }




  render() {
    return (
      <div className="homepage_wrapper">
        <Logo />
        <Sidebar
          functionCallFromParent={this.state.determineClass} />

        <div className={this.state.gifClass === "navOpen" ? "navOpen" : "projects"}>

          <div className="comingSoonBanner">
            <div className="welcome-border">
              <div className="checkmeout">

                {/* <em>  */}
                <h1 className={this.state.gifClass}
                  style={{ fontWeight: "10000" }}
                > Welcome to my web development site! <br />Check out my projects below.</h1>
                {/* </em> */}
              </div>
            </div>
          </div>



          <section className="app_links">
            <PresentGlobalNews visibilityStatus={this.state.gifClass} />
            <EchoIcon visibilityStatus={this.state.gifClass} />
            <NYCIcon visibilityStatus={this.state.gifClass} />


          </section>

        </div>
      </div>
    )
  }
}

export default HomePage;