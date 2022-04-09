import React, {useState} from 'react';
import './cards.css';
import appIconCard from "../../../project_layout/appiconcard.png"
import appDescriptionCard from "../../../project_layout/appdescriptioncard.png"
import DownArrow from "../../../project_layout/downarrow.png"
import InfoPopUp from './infopopup';


import { BrowserRouter as Router, Link } from "react-router-dom";

const Cards = (props) => {

    const [popupState, setPopupState] = useState({
        status : false,
        whichApp : ''
    })

    const handleShowInfoClick = () => {
       const updatedvalues = {
            status : true,
            app : props.appTitle
       }  

        setPopupState(updatedvalues)
    }

    return (

        // ICON CARD
        <div className='all-cards-wrapper'>
          
            
           <div className='icon-card-wrapper'>
                <div className='icon-and-title-wrapper'>
                    <h3 className="app-title"> {props.appTitle} </h3>

                    <img src={DownArrow} className= 'arrow'/>

                    { props.linkType === "Link" ?  <Link to="/globalnews" target="_blank" rel="noopener noreferrer">

                            <img src={props.icon} alt={`${props.alt} icon`} className="app-icon" />

                    </Link>  : 
                    
                    <a href={props.url} target="_blank" rel="noopener noreferrer"> 

                        <img src={props.icon} alt={`${props.alt} icon`} className="app-icon" />

                    </a>
                    // if no link like gif situation then pass a prop to create component where onclick shows gif
                    
                    }
                 
                    </div>
                <img src = {appIconCard} alt = 'app icon card' className="app-icon-card"/>
            </div>


            {/* DESCRIPTION CARD */}
            <div className='description-div-wrapper'>
                <div className="description-text-div" >
                    {props.Description}
                    {/* <div className='app-description'> {props.Description}</div> */}
             
                    <p className="tech-used">  <span className="stack"> Tech stack: </span> <span className="tech-list"> {props.stackList} </span> </p>
                    <button className="more-info-btn" onClick = {handleShowInfoClick} > Click here for more info</button>
                </div>


                <img src = {appDescriptionCard} alt = 'app description card' className="app-description-card"/>
            </div>

            <div style={{width: '0px'}}></div>



            <InfoPopUp popupState = {popupState}/>
        </div>
    )
}

export default Cards;