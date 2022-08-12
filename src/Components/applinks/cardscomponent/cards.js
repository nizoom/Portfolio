import React from 'react';
import './cards.css';
import Card from '../../../project_layout/appiconcard.png'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Cards = (props) => {

  
    return (

        // ICON CARD
        <div className='card-component-wrapper bob-on-hover'>
      
            <img src = {Card} alt ='app' className='card-img'/>
            <div className='text-wrapper'>
                <h3 className='app-title'> {props.appTitle} </h3>
                <img src = {props.logo} className='logo'/>
                <p className='description-txt'> {props.Description}</p>
                <p className='description-txt tech'> Technologies: {props.stackList}</p>

               
                    { props.btnOneTxt === 'View ReadMe' ?  

                        <button className='more-info-btn view-code'> <a href = {props.githubUrl}
                        style = {{color: '#B7861B', textDecoration:'none'}} target="_blank" rel="noopener noreferrer"
                        >  View ReadMe  </a> </button>
                        
                    :
                    <div className='btns-div'> 
                        <button className='more-info-btn learn-more'> <a href = {props.url}
                            style = {{color: '#B7861B', textDecoration:'none'}} target="_blank" rel="noopener noreferrer">
                        {props.btnOneTxt} </a> </button> 

                            <button className='more-info-btn view-code'> <a href = {props.githubUrl}
                            style = {{color: '#B7861B', textDecoration:'none'}} target="_blank" rel="noopener noreferrer"
                            >  View Code  </a> </button>

                    </div>
        }
            </div>
         
      </div>
   
    )
}

export default Cards;

