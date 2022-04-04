import React from "react";
import LinkedInIcon from "../../project_layout/socialicons/linkedin.png"
import GithubIcon from "../../project_layout/socialicons/github.png"
import TwitterIcon from "../../project_layout/socialicons/twitter.png"
import EmailIcon from "../../project_layout/socialicons/email.png"
const Socials = (props) => {
    return (
        <div>
            <nav className="socials-wrapper">
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
{/* LINK TO CONTAact PAGE */}
                    <li> <img src = {EmailIcon} alt = "Nissim Ram's Contact"/> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Socials;