import React, { Component } from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
// import workingGif from "../project_layout/whale.gif"
import "./css/homepage.css"
import PresentGlobalNews from "../Components/applinks/presentglobalnews/presentgn"
import EchoIcon from "../Components/applinks/echochamber/echoicon";
import NYCIcon from "../Components/applinks/builtnyc/nycicon";
import globalnewsIcon from "../project_layout/worldnews.png";
import IntroScreen from "./intro";
import gradientBubble from './../project_layout/Ellipse.png'
import Cards from "../Components/applinks/cardscomponent/cards"

class HomePage extends Component {
  constructor(props) {
    super(props)


    this.state = {
      sidebarVisible: false,
      loadScreen : true,
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
      

      <div className="homepage_wrapper background-covering"> 
        <div className="fade-in "> 
        <Logo />
          <Sidebar
            functionCallFromParent={this.state.determineClass} />

          <div className={this.state.gifClass === "navOpen" ? "navOpen" : "projects"}>

            
            <header>
              
                <div className="welcome-border">
                  <div className="welcome-statement">
                    {/* <hr className="bar-short"/> */}
                    <h2 className={this.state.gifClass}> Welcome to my portfolio </h2>
                  </div>
                  <hr className="bar-long"/>
                    <div className="subheader-div">
                      <h2 className={this.state.gifClass}> Check out my projects below </h2>
                      {/* <hr className="bar-short"/> */}
                    </div>
              
                  
                </div>
            </header>
            <div className="bubbles-wrapper">
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down'className="left"/>
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down' className="small-bbl middle-left"/>
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down' className="small-bbl middle-right"/>
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down' className="right"/>
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down' className="small-bbl right-most"/>

            </div>



            <section className="apps-section">
              <Cards alt = 'global news'icon = {globalnewsIcon} appTitle = 'Try Global News'stackList = 'ReactJS, React Router, Material UI, Azure, Google Cloud, LeafletJS.'
                linkType = 'Link' priority-level = '1'
              />

              {/* <Cards alt = 'Build NYC 'icon = {NYCIcon} appTitle = 'Try Build NYC' stackList = 'React JS, LeafletJS, ChartJS, SoQueryLanguage, NodeJS, ExpressJS.'
                linkType = 'href'
              /> */}

              {/* <PresentGlobalNews visibilityStatus={this.state.gifClass} />
              <EchoIcon visibilityStatus={this.state.gifClass} />
              <NYCIcon visibilityStatus={this.state.gifClass} /> */}


            </section>

          </div>  
        </div> 
      </div>
      



    )
  }
}

export default HomePage;