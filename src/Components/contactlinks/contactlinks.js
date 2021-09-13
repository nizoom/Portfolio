import React from "react";
import EmailIcon from "./icons/email.png"
import TwitterIcon from "./icons/twitter.png"
import LinkedInIcon from "./icons/linkedin.png"
import "./contactlinks.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
const ContactLinks = () => {
    return (
        <div className="icon-bubble">


            <span className="circle">
                <Link to="/Contact">
                    <img src={EmailIcon} alt="email icon" className="pic" />
                </Link>
            </span>

            <span className="circle">
                <a href="https://twitter.com/Nissim37907843" target="blank" rel="noopener noreferrer" >
                    <img src={TwitterIcon} alt="twitter icon" className="pic" />
                </a>
            </span>


            <span className="circle">
                <a href="https://www.linkedin.com/in/nissimram/" target="blank" rel='noopener noreferrer'>
                    <img src={LinkedInIcon} alt="linkedin icon" className="linkedin-pic" />
                </a>
            </span>

        </div >
    )
}

export default ContactLinks;