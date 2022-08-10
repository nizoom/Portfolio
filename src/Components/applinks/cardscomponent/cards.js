import React, {useEffect} from 'react';
import './cards.css';
import Card1 from "../../../project_layout/Card1.png"
import Card2 from "../../../project_layout/Card2.png"


import { BrowserRouter as Router, Link } from "react-router-dom";

const Cards = (props) => {



    const handlePopupClick = (popup, boolean) => {
    //    const updatedvalues = {
    //         status : boolean,
    //         app : popup
    //    }  
        props.toggleOpacityForPopup(props.appTitle)
        // setPopupState(updatedvalues)
    }



    useEffect(() => {
        document.addEventListener("keydown", handleEscape, false)
        //document.addEventListener("keydown", (event) => escapeFunction(event, props.appTitle), false)
        return () => {
            document.removeEventListener("keydown", handleEscape, false);
            // document.removeEventListener("click", clickOutPopup, false)
        }
    })

    const handleEscape = (event) => {
        if(props.projectInFocus === props.appTitle){
            if(event.key === "Escape"){
                handlePopupClick(props.appTitle);  
             }
        }
    };

  
    return (

        // ICON CARD
        <div className='card-component-wrapper'>
            <div className='card-wrapper'>
                <img src= {props.cardGraphic} className='card-img'/>
                <section className='text-wrapper'>
                    <div className='left-column'>
                        <h3 className='app-title'> {props.appTitle}</h3>
                        <button className='more-info-btn learn-more'> {props.btnOneTxt} </button>
                        <button className='more-info-btn view-code'> View Code </button>
                       
                    </div>
                    <div className='right-column'>
                        <p className='app-description'> 
                            {props.Description}
                        </p>
                        <p> 
                        <span className="stack"> Tech stack: </span> 
                            {props.stackList}
                        </p>
                    </div>
                  
                </section>
            </div>
            
            
      </div>
   
    )
}

export default Cards;


// import appIconCard from "../../../project_layout/appiconcard.png"
// import appDescriptionCard from "../../../project_layout/appdescriptioncard.png"
// import DownArrow from "../../../project_layout/downarrow.png"
// import InfoPopUp from './infopopup';
// import MobileCard from "../../../project_layout/mobilecard.png"


// <img src={MobileCard} className= 'mobile-card' alt = 'card to display app on to'/>
// <div className='columns'>
//       <div className='icon-card-wrapper'>
//           <div className='icon-and-title-wrapper'>
//               <h3 className="app-title"> {props.appTitle} </h3>

//               <img src={DownArrow} className= 'arrow'/>

//               { props.linkType === "Link" ?  <Link to="/globalnews" target="_blank" rel="noopener noreferrer">

//                       <img src={props.icon} alt={`${props.alt} icon`} className="app-icon" />

//               </Link>  : 
              
//               <a href={props.url} target="_blank" rel="noopener noreferrer"> 

//                   <img src={props.icon} alt={`${props.alt} icon`} className="app-icon" />

//               </a>
//               // if no link like gif situation then pass a prop to create component where onclick shows gif
              
//               }
          
//               </div>
//           <img src = {appIconCard} alt = 'app icon card' className="app-icon-card"/>
//       </div>
      

//       {/* DESCRIPTION CARD */}
//       <div className='description-div-wrapper'>
//           <div className="description-text-div" >
//               {props.Description}
//               {/* <div className='app-description'> {props.Description}</div> */}
      
//               <p className="tech-used">  <span className="stack"> Tech stack: </span> <span className="tech-list"> {props.stackList} </span> </p>
//               <button className="more-info-btn" onClick = {() => handlePopupClick(props.appTitle)}> Click here for more info</button>
//           </div>


//           <img src = {appDescriptionCard} alt = 'app description card' className="app-description-card"/>
//       </div>

//       {/* <div style={{width: '0px'}}></div> */}

//   </div>

//   <InfoPopUp 
  
//    appTitle = {props.appTitle} handlePopupClick = {handlePopupClick} position = {props.position} url = {props.url}
//   projectInFocus = {props.projectInFocus} status = {props.status}

//   />