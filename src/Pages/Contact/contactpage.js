import React, { useState } from "react"
import useForm from "./useForm"
import validate from "./validateinfo"
import "./contact.css";
import Sidebar from "../../Components/sidebar/sidebar";
import Logo from "../../Components/logo/logo"
import submitValidatedData from "./submit"
import cluster from "../../project_layout/contactpagecluster.png"





const ContactPage = () => {
  // FORM CODE
  const { handleChange, values, handleSubmit, errors, isSubmitting } = useForm(
    validate, submitForm);

  const [isSubmitted, setIsSubmitted] = useState(false);


  function submitForm() {
    setIsSubmitted(true)
    submitValidatedData(values)

  }


  //SIDEBAR CODE
  const [navStatus, setNavStatus] = useState(false)

  // const classStatusForMobile = (sidebarStatus) => {
  //   if (sidebarStatus && window.innerWidth < 850) {
  //     setNavStatus(!navStatus)
  //   }
  //   if (window.innerWidth < 850) {
  //     setNavStatus(!navStatus)
  //   }
  // }
  const getSidebarStatus = (sidebarStatus) => {
    console.log(sidebarStatus)
    return (sidebarStatus ? setNavStatus(true) : setNavStatus(false))
  }

  return (
    <div className="contact-page-wrapper">
      <Logo />
      <Sidebar functionCallFromParent={getSidebarStatus} />



        <div className="contact-border">
          <div className={navStatus ? "nav-open-contact" : "contact-form-wrapper"}>

            
            <h1 className="contact-intro">  Please submit your message here and I'll get
              back to you as soon as possible. </h1>


            <div className="form-wrapper">
              <img src = {cluster} alt= 'bubble graphic' className="cluster"/>
              <form onSubmit={handleSubmit}
                action="#" method="POST" className="contact-form">

                <div className="name-input-div form-line-wrapper">
                  <label htmlFor="Name" className="form-label" >
                    Name:
                  </label>
                  <input type="text" className="name-input contact-input-field"
                    placeholder="Name" id="username" name="name"
                    value={values.name}
                    onChange={handleChange} />


                  {errors.name &&
                    <span className="err-span">
                      <p className="err">{errors.name}</p>
                    </span>}
                </div>

                <div className="email-input-div form-line-wrapper">
                  <label htmlFor="email" className="form-label" >
                    Email:
                  </label>
                  <input type="email" className="email-input contact-input-field"
                    placeholder="Email Address" id="email" name="reply_to"
                    value={values.reply_to}
                    onChange={handleChange} />


                  {errors.reply_to &&
                    <span className="err-span">
                      <p className="err">{errors.reply_to}</p>
                    </span>}

                </div>


                <div className="message-input-div form-line-wrapper">
                  <label htmlFor="Message" className="form-label textarea-label" >
                    Message:
                  </label>
                  <textarea rows="15" cols="50" className="message_field contact-input-field"
                    placeholder="Message" id="message" name="message"
                    value={values.message}
                    onChange={handleChange} />

                  {errors.message &&
                    <span className="err-message-span">
                      <p className="err"> {errors.message} </p>
                    </span>}

                    <div className="btn-div" style={{ fontColor: "white" }}>
                        <button className="form-input-btn" type="submit" >
                          Submit
                        </button>
                </div>
        

              </div>
              {isSubmitted ? <div className="form-success"> <h4 className="success-msg"> Sent! ✅
            </h4> </div> : null}
            </form>
          </div>

          


          </div>
      </div>
    </div >

  )
}




export default ContactPage;
