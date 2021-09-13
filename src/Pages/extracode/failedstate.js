import React, {Component} from "react"
//The goal is to have one onChange function
//that also changes the state

class Tester extends Component{
  constructor(props){
    super(props)
    this.state = {
      fieldContent : [{
        firstName : "Yo",
        email : "",
        message : "",
        age : 0

      }],
      update : ( ) => {
        let copy = {...this.state.fieldContent}
        copy.firstName = "Nissim"
        this.setState({fieldContent : copy})
        console.log(copy);
      },
      handleChange : ( event )=> {
        let {target : { name , value } } = event;
        let copy = {...this.state.fieldContent}
          //  console.log([name], value);
          //  console.log(typeof [name]);
          //  console.log(this.state.fieldContent[0]);
            let nameField = this.state.fieldContent[0];

        this.setState((state) => ({

          nameField : value
        }), () => console.log(`the state is ${this.state.fieldContent.firstName}`));
        //this.state.fieldContent.[name] : value);
        //how to combine copy AKA ...this.state.fieldContent
        // with name AKA firstName
        //how to use a string as a key
        /*
        // 3. Bracket notation (variable key)
        --this would be state
            let me = {
            name: 'samantha',
            };
        --this line works as property?
            let key = 'name';
        --copy[name]
            me[key]; // samantha   */


        //copy creates an object that we need
        // adding [name] to that disrupts something
        //let key = {...this.state.fieldContent.[name]}

        // this logs the value

        /*
        copy.firstName = "Nissim"
        this.setState({fieldContent : copy})  */

        //this.setState({ key  : value },
        //() => console.log(`the state is ${this.state.fieldContent.firstName}`));
        //this.state.fieldContent.[name] : value
      }
    }
  }

  render(){
    return(
      <div>
        <button onClick = {this.state.update}> Update </button>
        <h1> Hi My Name is {this.state.fieldContent.firstName} </h1>

        <label>
         First Name:
         <input
           name="firstName"
           type="text"
           //value={this.state.fieldContent.firstName}
           onChange={this.state.handleChange} />
       </label>
       <label>
          Age:
          <input
            name="age"
            type="number"
            //value={this.state.fieldContent.age}
            onChange={this.state.handleChange} />
        </label>
        <h1> Hello {this.state.fieldContent.firstName} </h1>
      </div>
    )
  }
}

export default Tester;


/*
nameValid : ( ) => {

  let regex = /\d/;
  if (regex.test(this.state.name) === true) { // NOT VALID
    console.log("num found");
    this.setState(prevState => {
      let formValid = {...prevState.formValid};
      formValid.name = false;
      console.log(formValid);
      return { formValid }
    })
  } else { // VALID
    this.setState(prevState => {
      console.log("no num here");
      let formValid =  {...prevState.formValid};  // creating copy of state variable jasper
      formValid.name = true;
      console.log(formValid);
      return { formValid };
    })
  }
}*/
/*
nameValid : ( ) => {

  let regex = /\d/;
  if (regex.test(this.state.name) === true) { // NOT VALID
    console.log("num found");
    this.setState(prevState => {
      let formValid = {...prevState.formValid};
      formValid.name = false;
      console.log(formValid);
      return { formValid }
    })
  } else { // VALID
    this.setState(prevState => {
      console.log("no num here");
      let formValid =  {...prevState.formValid};  // creating copy of state variable jasper
      formValid.name = true;
      console.log(formValid);
      return { formValid };
    })
  }
}*/
