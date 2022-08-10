import React, { Component } from "react";

import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import "./css/homepage.css"
import gradientBubble from './../project_layout/Ellipse.png'
import Cards from "../Components/applinks/cardscomponent/cards"
import Socials from "../Components/socials/socials";
import  { firstVisit, getLocalVisitStatus} from "../Components/localstorage/localstorage";
import Card1 from "../project_layout/Card1.png"
import Card2 from "../project_layout/Card2.png"
import Card3 from "../project_layout/Card3.png"
import Card4 from "../project_layout/Card4.png"


class HomePage extends Component {



  constructor(props) {
    super(props)
    
  
    this.state = {

      sidebarVisible: false,

      visitationStatus : false,
    
      clickHandler: () => {
        this.setState(prevstate => ({
          sidebarVisible: !prevstate.sidebarVisible
        }))
       
      },
      determineClass: (x) => {
        if (x && window.innerWidth < 850) {
          this.setState({ navStatusClass: "navOpen" })
        } else {
          this.setState({ navStatusClass: "standard" })
        }

      },


      popupStatus: false,
      projectInFocus : '',

      toggleOpacityForPopup: (projectInFocus) => {
        this.setState(prevstate => ({
          popupStatus: !prevstate.popupStatus,
          projectInFocus : projectInFocus
        }))
      },

      navStatusClass: "standard", 

      }
  }


  componentDidMount(){
    // Runs after the first render() lifecycle
 
    const userVisitationStatus = getLocalVisitStatus();

    if(userVisitationStatus === null || userVisitationStatus === undefined){

           firstVisit()

           this.props.history.push('/Intro')

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

          <div className={this.state.navStatusClass === "navOpen" ? "navOpen" : "projects"}>

            
            <header>
                <Socials/>
                <div className="welcome-border">
                  <div className="welcome-statement">
                    {/* <hr className="bar-short"/> */}
                    <h2 className={this.state.navStatusClass}> Welcome to my portfolio </h2>
                  </div>
                  <hr className="bar-long"/>
                    <div className="subheader-div">
                      <h2 className={this.state.navStatusClass}> Check out my projects below </h2>
                      {/* <hr className="bar-short"/> */}
                    </div>
              
                  
                </div>
            </header>
            
            <div className="bubbles-wrapper">
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down'className="left large"/>
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down' className="small-bbl middle-left"/>
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down' className="small-bbl middle-right"/>
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down' className="right large"/>
                <img src = {gradientBubble} alt = 'graphic of bubbles falling down' className="small-bbl right-most"/>

            </div>



            <section className="apps-section">

          
             <Cards alt = 'Thank You Email Generator'  appTitle = 'Thank You Email Generator' stackList = ' ReactJS, ExpressJS, NodeJS, NodeMailer, and Handlebars.'
                linkType = 'href' githubUrl = 'https://github.com/nizoom/TYTemplateBuilder'
                Description = {<p className='app-description'> Form web app that builds and sends templated thank you emails.</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'one' projectInFocus = {this.state.projectInFocus} status = {this.state.popupStatus}
                cardGraphic={Card1} btnOneTxt='View ReadMe'
              /> 

              <Cards alt = 'Twitter API Clone'  appTitle = 'Twitter API Clone' stackList = 'Java, SpringBoot, JPA, PostgresQL, PGAdmin, Postman, Eclipse, Maven'
                Description = {<p className='app-description'>  Java backend including endpoints to create users, like tweets, and follow accounts</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'two' projectInFocus = {this.state.projectInFocus} status = {this.state.popupStatus}
                githubUrl = 'https://github.com/nizoom/Twitter-API-Clone'
                cardGraphic={Card2} btnOneTxt='View ReadMe'
              /> 

              <Cards alt = 'Build NYC' appTitle = 'Build NYC' stackList = 'React JS, LeafletJS, ChartJS, SoQueryLanguage, NodeJS, ExpressJS.'
                linkType = 'href' url = 'https://build-nyc.herokuapp.com/' 
                githubUrl = 'https://github.com/nizoom/BuildNYC'
                Description ={ <p className='app-description'> Data visualization interface that illustrates building development in NYC. </p> }
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'three' projectInFocus = {this.state.projectInFocus} status = {this.state.popupStatus}
                cardGraphic={Card3} btnOneTxt='Use'
              /> 

              <Cards alt = 'Thank you Email Automation' appTitle = 'TY Email Automation' stackList = ' ExpressJS, NodeJS, NodeMailer, and Handlebars.'
                linkType = 'href' githubUrl = 'https://github.com/nizoom/TYAutomation'
                Description = {<p className='app-description'> Backend app that uses that generates custom daily thank you emails based on donations from an API.</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'four' projectInFocus = {this.state.projectInFocus} status = {this.state.popupStatus}
                cardGraphic={Card4} btnOneTxt='View ReadMe'
              /> 

              <Cards alt = 'Global News' appTitle = 'Global News'
                url = 'http://localhost:3000/#/globalnews'
                githubUrl='https://github.com/nizoom/global_news'
                stackList = 'ReactJS, React Router, Material UI, Azure, Google Cloud, LeafletJS.'
                linkType = 'Link' 
                Description = {<p className='app-description'> Web app that finds localized news based on geolocation from map click.</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'five' projectInFocus = {this.state.projectInFocus} status = {this.state.popupStatus}
                cardGraphic={Card1} btnOneTxt='Use'
              />
         
             
              <Cards alt = 'Echo Chamber' appTitle = 'Echochamber' stackList = 'ReactJS, Material UI, NodeJS, ExpressJS.'
                linkType = 'href' url = 'https://entertheechochamber.herokuapp.com/'
                githubUrl='https://github.com/nizoom/Echochamber'
                Description = {<p className='app-description'> Web scraping app that uses Twitter's  API to recreate a personal feed.</p>}
                toggleOpacityForPopup ={this.state.toggleOpacityForPopup} position = 'six' projectInFocus = {this.state.projectInFocus} status = {this.state.popupStatus}
                cardGraphic={Card2} btnOneTxt='Use'
              /> 
        


            </section>
         
          </div>  
        </div> 
      </div>
      



    )
  }
}

export default HomePage;


// import EchoIcon from "../project_layout/echochambericon.png";
// import NYCIcon from "../project_layout/builtnyclogo.png";
// import globalnewsIcon from "../project_layout/worldnews.png";
// import tyIcon from "../project_layout/tyicon.png"
// import emailBuilderIcon from "../project_layout/form.png"
// import TwitterIcon from '../project_layout/twitter.png'
