import React, { Component } from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
// import workingGif from "../project_layout/whale.gif"
import "./css/homepage.css"
// import PresentGlobalNews from "../Components/applinks/presentglobalnews/presentgn"
import EchoIcon from "../project_layout/echochambericon.png";
import NYCIcon from "../project_layout/builtnyclogo.png";
import globalnewsIcon from "../project_layout/worldnews.png";
import IntroScreen from "./intro";
import gradientBubble from './../project_layout/Ellipse.png'
import Cards from "../Components/applinks/cardscomponent/cards"
import planetEyes from "../project_layout/lightbubble.png"

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
             
              <Cards alt = 'Global News'icon = {globalnewsIcon} appTitle = 'Try Global News'stackList = 'ReactJS, React Router, Material UI, Azure, Google Cloud, LeafletJS.'
                linkType = 'Link' priorityLevel = 'one'
                Description = {<p className='app-description'> <b>Web app </b> that finds localized news based on geolocation from map click.</p>}
              />
              <img src = {planetEyes} alt = 'planet-graphic' className="planetoid"/> 
              <Cards alt = 'Build NYC 'icon = {NYCIcon} appTitle = 'Try Build NYC' stackList = 'React JS, LeafletJS, ChartJS, SoQueryLanguage, NodeJS, ExpressJS.'
                linkType = 'href' priorityLevel = 'two' url = 'https://build-nyc.herokuapp.com/' 
                Description ={ <p className='app-description'> <b> Data visualization interface </b>  that illustrates building development in NYC. </p> }
              /> 

              <Cards alt = 'Build NYC 'icon = {EchoIcon} appTitle = 'Try Echochamber' stackList = 'ReactJS, Material UI, NodeJS, ExpressJS.'
                linkType = 'href' priorityLevel = 'two' url = 'https://entertheechochamber.herokuapp.com/'
                Description = {<p className='app-description'>  <b>Web scraping app </b> that uses Twitter's  API to recreate a personal feed.</p>}
              /> 

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