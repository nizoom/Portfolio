import React, {useEffect, useRef, useState} from "react";
import "./infopopup.css"
import TemplateGif from "../../../project_layout/tytemplate.gif"
import LandscapeGif from "../../../project_layout/landscape-template.gif"
import TabletGif from "../../../project_layout/tablet-template.gif"
import MobileGif from "../../../project_layout/mobile-template.gif"
import LargeMobileGif from "../../../project_layout/lrg-mobil-template.gif"



const InfoPopUp = (props) => {

       
    function selectGifType(){
        
       switch(true){
           case windowWidth > 1400 : 
             return TemplateGif;
             
          case windowWidth <= 1400 && windowWidth > 830 : 
            return LandscapeGif
            
          case windowWidth <= 830 && windowWidth > 700: 
              return TabletGif 

          case windowWidth <= 700 && windowWidth > 470:
              return LargeMobileGif

          case windowWidth <= 470: 
              return MobileGif 
       }

    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const gifPopUpStatus = useRef(false)

    function handleResize(){
        const windowWidth = window.innerWidth;
        setWindowWidth(windowWidth)
    }

    useEffect(() => {


        selectGifType()


            window.addEventListener('resize', handleResize)

        
            return () => {
                window.removeEventListener("resize", handleResize)
            }

    })
    




    const selectAppText = () => {
       
            // Switch statement to determine app details text

         if(props.projectInFocus === 'TY Email Builder'){
            gifPopUpStatus.current = true
                    
            return <div className = 'template-gif-wrapper'> 
                    <p> An employee-facing web app that provides a user interface to fill out templated thank you emails for physical checks that come in the mail.</p>
                    <img src = {selectGifType()} className = 'template-gif' alt = 'gif of template building app in use'/>

                    </div>
         }

         if(props.projectInFocus ==='Try Global News'){
            gifPopUpStatus.current = false
            return <p> Global news is a novel way to access information about the world. The user is presented with a world map and with a map click can learn about that place from a list of news articles generated from that location. The longitude and latitude from a map click is converted, using Google Cloud services, to a human readable address. The address is iterated through Azure's news API until relevant news appears. The user can also narrow their search by entering a keyword before clicking on the map. That key word will then be added to the parameters of the API query.</p>          
        
         }
         if(props.projectInFocus ==='Try Echochamber'){
            gifPopUpStatus.current = false
            return <p> The Echo Chamber is a web scraping app that provides a peak into the public social network of your favorite public figures, artists, and friends. Enter a Twitter handle and see all the most recent posts from their followers. The project utilizes Twitter’s API to receive the data and then uses a Node backend to process the Tweets in chronological order. The result is a list of sequenced clickable Tweets.  A custom world cloud also consolidates all verbal content to demonstrate frequency of words. Using the app provides a more wholistic picture of that individual's interests and shared communities.</p>      
        
         }
         if(props.projectInFocus ==='TY Email Automation'){
            gifPopUpStatus.current = false
            return <p> The TY Automation program was built for the non-profit Common Threads Project to automate the process of sending Thank You emails to donors. I set up a daily cron job to hit an endpoint on an ExpressJS app. The Express app queries their donation widget API which responds with the donations from the day. The program will then define the gifts by donor category (new, recurring, monthly, and in tribute). The assessed data for each gift are passed to a corresponding email template based on the donation category. These templates were built with HTML, CSS, and Handlebars. My node application then sends the filled out the email to the donor. I am currently working on updating their CRM for each donation as well. </p>
        
         }
         if(props.projectInFocus ==='Try Build NYC'){
            gifPopUpStatus.current = false
            return <p> Built NYC is a data visualization tool that explores building development in New York City. Using a data base provided by NYC Open Data the user can filter building demolitions / constructions by year and borough on a location specific map. Each location is a clickable pin that displays the address, owner, and contracting company of the site. I Built an API to receive requests from the app which converts those requests into Socrata Query Language. This QL is used to fetch building data. Data visualizations are supplemented by charts that illustrate a breakdown of construction permits by type and construction trends for the last 30 years. </p>
        
         }
         if(props.projectInFocus ==='Twitter API Clone'){
            gifPopUpStatus.current = false
            return <p> A group project with FastTrack Cook Systems where we implemented an API that exposes operations for social media data that resembles the conceptual model of Twitter. We implemented this API from scratch, 
                working from a series of endpoint specifications to develop a mental model of the data. We developed a suitable database schema and wrote Spring services,
                 controllers to handle requests, perform validation and business logic, and to transform data between the API and database models.</p>
         }

        
        }



    const closePopup = (event) => {
        props.handlePopupClick(props.appTitle)

    }



    return(

        <div className={props.status  && props.projectInFocus == props.appTitle? "popup-background" : "hide" }>

                {!gifPopUpStatus.current ? 

                <div className={`popup-wrapper ${props.position}`} >
                

                        <article className={props.status ? "popup-text" : "hide-popup-text" }>
                            {selectAppText()}
                        </article> 

            
                        <div className={props.status ? "button-div" : "hide-button-div" }>
                            <a href = {props.url} target="_blank" rel="noopener noreferrer"> 
                            
                                <button className="base-more-info-btn btn-border pop-up-btn">Visit </button>

                            </a> 
                            <button className="base-more-info-btn btn-border pop-up-btn" onClick = {closePopup}> Close </button>
                        </div>
                </div>
 
                : <div className={`popup-wrapper ${props.position}`} >

                        <article className={props.status ? "gif-popup-text" : "hide-popup-text" }>
                            {selectAppText()}
                        </article> 

                        <div className={props.status ? "gif-button-div" : "hide-button-div" }>
                            <a href = {props.url} target="_blank" rel="noopener noreferrer"> 

                            <button className="base-more-info-btn btn-border pop-up-btn">Visit </button>

                            </a> 
                            <button className="base-more-info-btn btn-border pop-up-btn" onClick = {closePopup}> Close </button>
                        </div>
                        
                 </div>
                    }
        </div>
          

    )
}

export default InfoPopUp;
