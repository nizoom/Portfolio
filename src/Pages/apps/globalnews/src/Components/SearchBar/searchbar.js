import React from "react";
import { TextField } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./searchbar.css"

const SearchBar = ( props ) => {

//Material UI styling
  const theme = createMuiTheme({
    overrides: {
      MuiFilledInput : { root : { backgroundColor : "#283618", 

      '@media (max-width:900px)': {
        height: '75px',
       },
      '@media (max-width:600px)': {
        height: '70px',
       },
      '@media (max-width:450px)': {
        width: '200px'
       },
    }},
      MuiInputLabel : { root : { color : "#FEFAE0"}}
  }
})


// set theme for when active 



  return(
    <form className="filter-form">
      <p className="filter-label"> 1. Topic Filter </p> 
      <MuiThemeProvider theme = {theme}>
      {/* passes in function that tracks user input
       to textField*/}
      <TextField fullWidth onChange = {props.typed} className = "searchbar" id = "filled-size-large" label = "Filter🔎" variant ="filled" 
       style = {{color: "white"}} color = "secondary" InputProps={{
    className: theme.multilineColor
  }}
       />
      </MuiThemeProvider>
    </form>
  )
}

export default SearchBar
