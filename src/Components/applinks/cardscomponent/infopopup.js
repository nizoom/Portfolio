import React, {useState} from "react";

const InfoPopUp = (props) => {

    const [appDetails, setAppDetails] = useState("")
    
    // Switch statement to determine app details text

    return(

        <div>
            <article>
                <p> 
                    Ex amet mollit qui id aute laboris in. Mollit commodo ipsum consequat magna sunt 
                    labore pariatur sint non velit et. 
                    Enim elit veniam ut laborum amet adipisicing.
                </p>

            </article>
        </div>

    )
}

export default InfoPopUp;