import React, { Component } from "react";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"
import "./css/contact.css";

class Contact extends Component{
  constructor (props) {
    super(props)

    this.state ={
      fieldContent : {
        name : "",
        email : "",
        message : "",
      },

      handleNameChange : (event) => {
        let copyNm = {...this.state.fieldContent}
        copyNm.name = event.target.value
        this.setState({ field : copyNm.name} )
      },
      handleEmailChange : (event) => {
        let copyEml = {...this.state.fieldContent}
        copyEml.email = event.target.value
        this.setState({ email : copyEml.email})
      },
      handleMessageChange : (event) => {
        let copyMsg = {...this.state.fieldContent}
        copyMsg.message = event.target.value;
        this.setState({ message : event.target.value})
      },
      submitFunc : () => {
          console.log("fired");
          //this.state.nameValid()
          this.state.bigValidFunc(/\d/, this.state.name, )

      },

      formValid : {
        name : false,
        email : false,
        message : false
      },

  determineField : (property) => {

        let keys = Object.keys(this.state);
        let values = Object.values(this.state.formValid);
        for(let i=0 ; i < values.length ; i++){
          if(values[i] === property){
            console.log(keys[i]);
            return keys[i]
          } else {

            continue;
          }
        }
        },

  bigValidFunc : (criteria, property ) => {
      let regex = criteria;
      const {name} = this.state.formValid;
      console.log(property);
      if(regex.test(property) === true){

         // NOT VALID


          /*
  console.log("not valid");
          let formValid = {...prevState.formValid};
          formValid[0] = false;
          console.log(formValid);
          return { formValid };  */
      } else {
        this.setState(prevState => { // VALID
          let formValid = {...prevState.formValid};
          let fieldCopy = this.state.determineField(property)
          console.log(fieldCopy);

          //let formValues = Object.values(this.state.)
          //if(property is the same as the value of this.state.email
          // or name or message then update that key name on the
          //formvalid obj

          formValid.[property] = true;
          console.log(formValid);
          return { formValid };
        })
      }
    }
  }
}
    render(){
      return(
        <div className = "final_contact_wrapper">
        <Logo/>
        <Sidebar/>
          <h1> Please send me a message and I'll get back to you as soon as I can </h1>
          <form className = "form-div">
          <div className = "small_fields">
            <div className = "name_field">
              <label> Name </label>
              <input name = "name_field"type = "text"
               value = {this.state.name} onChange = {this.state.handleNameChange}
               />
            </div>


            <div className = "email_field">
              <label htmlFor="email"> Email </label>
              <input type = "email" name = "email"
               value = {this.state.email} onChange = {this.state.handleEmailChange}
               />
            </div>
          </div>
            <div className = "message_field">
              <label> Message </label>
              <textarea rows="7" cols="50"
              value = {this.state.message} onChange = {this.state.handleMessageChange}/>
            </div>
          </form>
          <div className = "submit_div">
            <button type = "submit" onClick = {this.state.submitFunc}> Submit </button>
          </div>
        </div>
      )
    }
  }

export default Contact;
