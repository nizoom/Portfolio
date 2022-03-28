import React from 'react';
import './cards.css';
import appIconCard from "../../../project_layout/appiconcard.png"
import appDescriptionCard from "../../../project_layout/appdescriptioncard.png"
import DownArrow from "../../../project_layout/downarrow.png"



import { BrowserRouter as Router, Link } from "react-router-dom";

const Cards = (props) => {
    return (

        // ICON CARD
        <div className={`all-cards-wrapper ${props.priorityLevel}`}>
            <div className='icon-and-title-wrapper'>
                <h3 className="app-title"> {props.appTitle} </h3>

                <img src={DownArrow} className= 'arrow'/>

            { props.linkType === "Link" ?  <Link to="/globalnews" target="_blank" rel="noopener noreferrer">

                        <img src={props.icon} alt={`${props.alt} icon`} className="app-icon" />

                </Link>  : 
                
                <a href={props.url} target="_blank" rel="noopener noreferrer"> 

                    <img src={props.icon} alt={`${props.alt} icon`} className="app-icon" />

                </a>
                
                
                }
            </div>
            <img src = {appIconCard} alt = 'icon card'className="app-icon-card"/>


        {/* DESCRIPTION CARD */}

            <div className="description-text-div">
                {props.Description}
                {/* <div className='app-description'> {props.Description}</div> */}
                <p className="tech-used">  <span className="stack"> Tech stack: </span> <span className="tech-list"> {props.stackList} </span> </p>
                <button className="more-info-btn"> Click here for more info</button>
            </div>


            <img src = {appDescriptionCard} alt = 'app description card' className="app-description-card"/>

        </div>
    )
}

export default Cards;