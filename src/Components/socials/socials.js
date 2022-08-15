import React from "react";
import LinkedInIcon from "../../project_layout/socialicons/linkedin.png"
import GithubIcon from "../../project_layout/socialicons/github.png"
import TwitterIcon from "../../project_layout/socialicons/twitter.png"
import EmailIcon from "../../project_layout/socialicons/email.png"

import { BrowserRouter as Router, Link } from "react-router-dom";

const Socials = (props) => {
    return (
        <div>
            <nav className={props.sidebarStatus ? "slide-out" : "socials-wrapper slide-in"}>
                <ul>
                    <li> <a href = "https://www.linkedin.com/in/nissimram/"   target="_blank" rel="noopener noreferrer"> 
                            <img src = {LinkedInIcon} alt = "Nissim Ram's LinkedIn"/> 
                        </a>
                    </li>
              
                    <li> 
                        <a href = "https://twitter.com/NizoomRam"   target="_blank" rel="noopener noreferrer"> 
                             <img src = {TwitterIcon} alt = "Nissim Ram's Twitter"/>
                        </a> 
                    
                    </li>
              
                    <li> 
                         <a href = "  https://github.com/nizoom"   target="_blank" rel="noopener noreferrer"> 
                        
                             <img src = {GithubIcon} alt = "Nissim Ram's GitHub"/> 

                        </a>
                    
                    </li>
                    <li> 
                         <Link to="/contact"  rel="noopener noreferrer">
                            <img src = {EmailIcon} alt = "Nissim Ram's Contact"/> 
                         </Link>
                    </li>
                   
                </ul>
            </nav>
        </div>
    )
}

export default Socials;