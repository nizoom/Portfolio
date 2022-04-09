import React, {useState} from "react";
import "./infopopup.css"

const InfoPopUp = (props) => {

    const [appDetails, setAppDetails] = useState("")
    
    // Switch statement to determine app details text

    console.log(props.popupState.status)

    return(

        <div className={props.popupState.status ? "popup-wrapper" : "hide"}>

             <article>
                <p className="popup-text"> 
                    Ex amet mollit qui id aute laboris in. Mollit commodo ipsum consequat magna sunt 
                    labore pariatur sint non velit et. 
                    Enim elit veniam ut laborum amet adipisicing.
                </p>

            </article> 
        </div>

    )
}

export default InfoPopUp;