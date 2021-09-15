import React, { useState } from "react"
import useForm from "./useForm"
import validate from "./validateinfo"
import "./contactFinal.css";
import Sidebar from "../../Components/sidebar/sidebar";
import Logo from "../../Components/logo/logo"
import submitValidatedData from "./submit"
import Headshot from "./headshot.png"



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
  const [clazz, setClazz] = useState(true)

  const [showHeadShot, setShowHeadshot] = useState(true)

  const classStatusForMobile = (sidebarStatus) => {
    console.log(sidebarStatus)
    setShowHeadshot(!showHeadShot)

    if (sidebarStatus && window.innerWidth < 850) {
      setClazz(!clazz)
    } if (window.innerWidth < 850) {
      setClazz(!clazz)
    }
  }

  return (
    <div>
      <Logo />
      <Sidebar functionCallFromParent={classStatusForMobile} />
      <div className={clazz ? "contact-divy" : "navOpen"} style={{ marginTop: "5em" }}>


        <div className="contact-border">
          <div className="contact-wrapper">

            <h1 className="contact-intro">  Please contact me and I'll get
              back to you as soon as possible. </h1>


            <div className="form-wrapper">
              <form onSubmit={handleSubmit}
                action="#" method="POST" className="contact-form">

                <div className="name-input-div">
                  <label htmlFor="Name" className="form-label" >
                    Name:
                  </label>
                  <input type="text" className="name-input"
                    placeholder="Name" id="username" name="name"
                    value={values.name}
                    onChange={handleChange} />


                  {errors.name &&
                    <span className="err-span">
                      <p className="err">{errors.name}</p>
                    </span>}
                </div>

                <div className="email-input-div">
                  <label htmlFor="email" className="form-label" >
                    Email:
                  </label>
                  <input type="email" className="email-input"
                    placeholder="Email Address" id="email" name="reply_to"
                    value={values.reply_to}
                    onChange={handleChange} />


                  {errors.reply_to &&
                    <span className="err-span">
                      <p className="err">{errors.reply_to}</p>
                    </span>}

                </div>


                <div className="message-input-div">
                  <label htmlFor="Message" className="form-label" >
                    Message:
                  </label>
                  <textarea rows="10" cols="50" className="message_field"
                    placeholder="Message" id="message" name="message"
                    value={values.message}
                    onChange={handleChange} />

                  {errors.message &&
                    <span className="err-message-span">
                      <p className="err"> {errors.message} </p>
                    </span>}
                </div>



                <div className="btnDiv" style={{ fontColor: "white" }}>
                  <button className="form-input-btn" type="submit" style={{
                    borderRadius: "17px"
                    , fontSize: "1em", fontColor: "white"
                  }}>
                    Submit
                  </button>

                  {showHeadShot ?
                    <span className="headshot-span">
                      <img src={Headshot} alt="headshot photo" className="headshot" />
                    </span>

                    : null}
                </div>
              </form>
            </div>

            {isSubmitted ? <div className="form-success"> <h1> Sent! Thanks for your message
            </h1> </div> : null}


          </div>
        </div>
      </div>
    </div >

  )
}




export default ContactPage;
