import React, { Component } from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import "./css/homepage.css"
import EchoIcon from "../project_layout/echochambericon.png";
import NYCIcon from "../project_layout/builtnyclogo.png";
import globalnewsIcon from "../project_layout/worldnews.png";
import IntroScreen from "./intro";
import tyIcon from "../project_layout/tyicon.png"
import emailBuilderIcon from "../project_layout/form.png"
import gradientBubble from './../project_layout/Ellipse.png'
import Cards from "../Components/applinks/cardscomponent/cards"
import Socials from "../Components/socials/socials";
import BackgroundGradient from "../project_layout/background.png"

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
       
      },
      determineClass: (x) => {
        if (x && window.innerWidth < 850) {
          this.setState({ gifClass: "navOpen" })
        } else {
          this.setState({ gifClass: "gif" })
        }

      },
      popupStatus: false,
      toggleOpacityForPopup: () => {
        this.setState(prevstate => ({
          popupStatus: !prevstate.popupStatus
        }))
      },
      gifClass: "gif"
    }
  }




  render() {
    return (
      

      <div className= "homepage_wrapper background-covering"> 
        <div className= {this.state.popupStatus ? "gray-out" : null }> </div>
        <div className="fade-in"> 
          <Logo />
          <Sidebar
            functionCallFromParent={this.state.determineClass} />

          <div className={this.state.gifClass === "navOpen" ? "navOpen" : "projects"}>

            
            <header>
                <Socials/>
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
             <img src = {BackgroundGradient} alt = 'background-gradient' className="background-gradient-1"/>
             <img src = {BackgroundGradient} alt = 'background-gradient' className="background-gradient-2"/>

             <Cards alt = 'TY Email Builder' icon = {emailBuilderIcon} appTitle = 'TY Email Builder' stackList = ' ReactJS, ExpressJS, NodeJS, NodeMailer, and Handlebars.'
                linkType = 'href' url = ''
                Description = {<p className='app-description'>  <b>Form web app </b> that builds and sends templated thank you emails.</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'one'
              /> 

              <Cards alt = 'Build NYC'icon = {NYCIcon} appTitle = 'Try Build NYC' stackList = 'React JS, LeafletJS, ChartJS, SoQueryLanguage, NodeJS, ExpressJS.'
                linkType = 'href' url = 'https://build-nyc.herokuapp.com/' 
                Description ={ <p className='app-description'> <b> Data visualization interface </b>  that illustrates building development in NYC. </p> }
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'two'
              /> 

              <Cards alt = 'TY Email Automation'icon = {tyIcon} appTitle = 'TY Email Automation' stackList = ' ExpressJS, NodeJS, NodeMailer, and Handlebars.'
                linkType = 'href' url = 'https://github.com/nizoom/TYAutomation'
                Description = {<p className='app-description'>  <b>Backend app </b> that uses that generates custom daily thank you emails based on donations from an API.</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'three'
              /> 

              <Cards alt = 'Global News'icon = {globalnewsIcon} appTitle = 'Try Global News'
                stackList = 'ReactJS, React Router, Material UI, Azure, Google Cloud, LeafletJS.'
                linkType = 'Link' 
                Description = {<p className='app-description'> <b>Web app </b> that finds localized news based on geolocation from map click.</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'four'
              />
         
             
              <Cards alt = 'Echo Chamber'icon = {EchoIcon} appTitle = 'Try Echochamber' stackList = 'ReactJS, Material UI, NodeJS, ExpressJS.'
                linkType = 'href' url = 'https://entertheechochamber.herokuapp.com/'
                Description = {<p className='app-description'>  <b>Web scraping app </b> that uses Twitter's  API to recreate a personal feed.</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'five'
              /> 
        


            </section>
            <footer> </footer>  
          </div>  
        </div> 
      </div>
      



    )
  }
}

export default HomePage;