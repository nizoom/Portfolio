import React from "react";
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
      <p className="filter-label"> {props.checkboxState.Localize ? "2. Check for local news" : "2. Check for national news"}</p> 
    <FormControlLabel
         control={<CustomBox checked={props.checkboxState.Localize} onChange={props.handleBoxClick}
         name="Localize"/>}
         label="Localized" 
       
       />
     
    <FormControlLabel
         control={<CustomBox checked={props.checkboxState.National } onChange={props.handleBoxClick}
         name="National"/>}
         label="National" 
       
       />




    </div>
  )
}


export default LocalityCheckBox;
