import React, {useState} from "react"
import useForm from "./useForm"
import validate from "./validateinfo"
import "./contactFinal.css";
import Sidebar from "../../Components/sidebar/sidebar";
import Logo from "../../Components/logo/logo"
import submitValidatedData from "./submit"



const ContactPage = ( ) => {
  // FORM CODE
  const {handleChange, values, handleSubmit, errors, isSubmitting} =  useForm(
    validate, submitForm);

  const [isSubmitted, setIsSubmitted] = useState(false);


  function submitForm(){
    setIsSubmitted(true)
    submitValidatedData(values)

  }


  //SIDEBAR CODE
  const [clazz, setClazz] = useState(true)

  const classStatusForMobile = ( sidebarStatus ) => {
      if(sidebarStatus && window.innerWidth < 850){
        setClazz(!clazz)
      } if(window.innerWidth < 850){
        setClazz(!clazz)
      }
  }

  return(
    <div >
      <Logo/>
      <Sidebar functionCallFromParent = {classStatusForMobile}/>
      <div className = { clazz ? "contact-divy" : "navOpen"} style = {{marginTop: "5em"}}>
        <div className = "welcome-note">
          <h1 style = {{color : "#DAC6DE", fontWeight: "500"}}>  Please contact me and I'll get
          back to you as soon as possible </h1>
        </div>
          <form className = "form" onSubmit = {handleSubmit}
           action = "#" method = "POST"  style = {{marginTop: "5em"}}>

          <div className = "form-inputs">
            <label htmlFor = "Name" className = "form-label" >
            Name:
              <input type = "text" className = "form-input"
              placeholder = "Name" id = "username" name = "name"
              value = {values.name}
              onChange = {handleChange}/>

            </label>
            {errors.name && <p className = "err">{errors.name}</p>}
          </div>

          <div className = "form-inputs">
            <label htmlFor = "email" className = "form-label" >
            Email:
              <input type = "email" className = "form-input"
              placeholder = "Email Address" id = "email" name = "reply_to"
              value = {values.reply_to}
              onChange = {handleChange}/>
            </label>

          {errors.email && <p className = "err">{errors.email}</p>}

          </div>

          <div className = "form-inputs">
            <label htmlFor = "Message" className = "form-label" >
            Message:
              <textarea rows="7" cols="50" className = "message_field"
              placeholder = "Message" id = "message" name = "message"
              value = {values.message}
              onChange = {handleChange}/>
            </label>
            {errors.message && <p className = "err"> {errors.message} </p>}
          </div>
            <div className = "btnDiv" style = {{fontColor: "white"}}>
              <button className = "form-input-btn" type = "submit" style = {{borderRadius : "17px"
            , fontSize : "1em", fontColor: "white"}}>
                Submit
              </button>
            </div>
          </form>


          { isSubmitted ? <div className = "form-success"> <h1> Sent! Thanks for your message
             </h1> </div>: null }



        </div>
      </div>

  )
}




export default ContactPage;
