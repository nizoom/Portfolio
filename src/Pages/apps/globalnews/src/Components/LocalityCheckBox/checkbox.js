import React from "react";
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { purple } from "@material-ui/core/colors"
import { withStyles } from '@material-ui/core/styles';



const LocalityCheckBox = ( props ) => {

//Material UI Styling
  const CustomBox = withStyles({
  root: {
    color: '#DDA15E',
    backgroundColor: "#FEFAE0",
    borderRadius: "16px",
    fontWeight: "1000",
    marginRight: "0px",

    

    '&$checked': {
      color: '#283618',
    },
  },

  
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

  return(
    <div className="filter-form">

    {/* below props pass the current checked status of the box and an onChange function
      for when it is clicked.*/}
      <p className="filter-label"> {props.status ? "2. Checking for local news" : "2. Checking for national news"}</p> 
    <FormControlLabel
         control={<CustomBox checked={props.status} onChange={props.handleBoxClick}
         name="Localize"/>}
         label="Localized" 
       
       />




    </div>
  )
}


export default LocalityCheckBox;
