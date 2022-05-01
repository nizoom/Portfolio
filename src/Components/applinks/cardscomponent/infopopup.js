import React, {useCallback, useEffect, useRef} from "react";
import "./infopopup.css"
import TemplateGif from "../../../project_layout/tytemplate.gif"

const InfoPopUp = (props) => {

       
    console.log(props.appTitle)

    const selectAppText = () => {
       
            // Switch statement to determine app details text
            switch(props.appTitle){
                case 'TY Email Builder':
                    return <div> 
                            <p> An employee-facing web app that provides a user interface to fill out templated thank you emails for physical checks that come in the mail.</p>
                            <img src = {TemplateGif} className = 'template-gif'/>

                            </div>
                    
                case 'Try Global News':
                    return <p> Global news is a novel way to access information about the world. The user is presented with a world map and with a map click can learn about that place from a list of news articles generated from that location. The longitude and latitude from a map click is converted, using Google Cloud services, to a human readable address. The address is iterated through Azure's news API until relevant news appears. The user can also narrow their search by entering a keyword before clicking on the map. That key word will then be added to the parameters of the API query.</p>          
                case 'Try Echochamber':
                    return <p> The Echo Chamber is a web scraping app that provides a peak into the public social network of your favorite public figures, artists, and friends. Enter a Twitter handle and see all the most recent posts from their followers. The project utilizes Twitter’s API to receive the data and then uses a Node backend to process the Tweets in chronological order. The result is a list of sequenced clickable Tweets.  A custom world cloud also consolidates all verbal content to demonstrate frequency of words. Using the app provides a more wholistic picture of that individual's interests and shared communities.</p>      
                case 'TY Email Automation':
                    return <p> The TY Automation program was built for the non-profit Common Threads Project to automate the process of sending Thank You emails to donors. I set up a daily cron job to hit an endpoint on an ExpressJS app. The Express app queries their donation widget API which responds with the donations from the day. The program will then define the gifts by donor category (new, recurring, monthly, and in tribute). The assessed data for each gift are passed to a corresponding email template based on the donation category. These templates were built with HTML, CSS, and Handlebars. My node application then sends the filled out the email to the donor. I am currently working on updating their CRM for each donation as well. </p>
                case 'Try Build NYC':
                    return <p> Built NYC is a data visualization tool that explores building development in New York City. Using a data base provided by NYC Open Data the user can filter building demolitions / constructions by year and borough on a location specific map. Each location is a clickable pin that displays the address, owner, and contracting company of the site. I Built an API to receive requests from the app which converts those requests into Socrata Query Language. This QL is used to fetch building data. Data visualizations are supplemented by charts that illustrate a breakdown of construction permits by type and construction trends for the last 30 years. </p>
        }
    }

    // close out logic for escape key 
    const escapeFunction = useCallback((event) => {
        if(event.key === "Escape"){
            closePopup();
        }
    },[]);

    useEffect(() => {
        document.addEventListener("keydown", escapeFunction, false)

        return () => {
            document.removeEventListener("keydown",escapeFunction, false);
        }
    },[])

    // close out logic for clikc outside popup 

    const popupRef = useRef();

    const closePopup = () => {
        props.handlePopupClick(false)
    }
    return(

        <div className={props.popupState.status ? "popup-background" : "hide"}>
            <div className={`popup-wrapper ${props.position}`} ref = {popupRef}>
            

                    <article className={props.popupState.status ? "popup-text" : "hide-popup-text" }>
                        {selectAppText()}
                    </article> 

                    {/* <div className= {props.popupState.status ? "button-div" : "hide-btn"} > */}
                    <div className={props.popupState.status ? "button-div" : "hide-button-div" }>
                        <button className="more-info-btn btn-border pop-up-btn"> Visit </button>
                        <button className="more-info-btn btn-border pop-up-btn" onClick = {closePopup}> Close </button>
                    </div>
            </div>
       
        </div>
          

    )
}

export default InfoPopUp;