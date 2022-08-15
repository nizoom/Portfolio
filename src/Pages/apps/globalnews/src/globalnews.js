import React, { useState } from "react";
import './globalnews.css';
import "fontsource-roboto"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"


import Grid from '@material-ui/core/Grid';

import Map from "./Components/Map/map"
import NewsDisplay from "./Components/NewsDisplay/newsdisplay"
import About from "./Components/About/aboutglobalnews"
import Dropdown from "./Components/dropdown/dropdown";
import CircledTwo from "./Images/two.png"




function Globalnews() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor : "#606C38", 
      height: '125vh',
      width: '100%'

    },
    allItems : {
      textAlign: "center",
      padding : theme.spacing(2),
      justifyContent : "center",
      padding: '0',

    }, //padding: theme.spacing(2),

    typographyStyle: {
      color : "#FEFAE0",
      marginTop : "3vh",
      textAlign: "center",
    },

    h2MediaQueries : {
       '@media (max-width:900px)': {
          fontSize: '32px',
      },
    },
 
    h4MediaQueries : {
       '@media (max-width:900px)': {
          fontSize: '28px',
      },
    }
 
  }));

//useState hooks to track different changes

const [page, setPage] = useState(1);

const handleNextClick = () => {
  setPage(page + 1);
}
const handleBackClick = () => {
  setNewsData('')
  setPage(page - 1)
}


//Tracks user input
  const [input, setInput] = useState("")

//Tracks whether the LocalityCheckBox has been checked
  const [checked, setChecked] = useState(true)

//sets news info when either articles or null is found
  const [newsData, setNewsData] = useState("")


//activates setNews hook to store the data from map.js
  const dataBackToTop = ( data ) => {
    // this is not correct array (articles) and is instead a location
  
    data === null ? setNewsData("NOTHINGFOUND") : setNewsData(data);

  }


//handles user input change

  const handleChange = ( e ) => {
    let userInput = e.target.value;
    setInput(userInput)
  }

//handles locality checkbox being clicked/unclicked
  const handleBoxClick = (e) => {
    setChecked(e.target.checked)
  }

  const classes = useStyles()

  return (
    <div className= {classes.root} >

      <Grid container>
        
        <Grid item xs = {12}>
     
          <Typography variant = "h2" className = {`${classes.typographyStyle} ${classes.h2MediaQueries}` } component={'div'}>
            The Global News Source
          </Typography>
          <Typography variant = "h4" className = {`${classes.typographyStyle} ${classes.h4MediaQueries}`} component={'div'}> A new way to keep up </Typography>
    
        </Grid>

       

       { page === 1 ?<Grid item md = {12}  xs = {12} style ={{marginTop: '50px', display: 'flex', flexDirection: 'column'}}>  
   
           <Dropdown typed = {handleChange}

             handleBoxClick = {handleBoxClick} status = {checked}
             
            />

            <button className="next-btn" onClick={handleNextClick}> Next </button>
              

        </Grid> : null}

        {page === 2 ? 
          <Grid item xs = {12} className = {classes.allItems} >
                <div className="map-instruction-wrapper">
                <p className="dropdown-label map-instruction"> <img src= {CircledTwo} className='numbers'/> and 👇 a point on the map </p>

              
            </div>
            <Map topicFilter = {input} localityStatus = {checked}
              dataBackToTop = {dataBackToTop} 
            />

              <button className="next-btn" onClick={handleBackClick} style = {{marginBottom: '30px'}}> Back </button>
          </Grid> : null}
        
          {newsData !=="" && page === 2 ? 
            <Grid item xs = {12} className = {classes.allItems}>
              <NewsDisplay dataForDisplay = {newsData} localityStatus = {checked}/>
            </Grid> : null
          } 
      
      {page === 1 ? 
        <Grid item xs = {12} className = {classes.allItems}>
          <About  />
        </Grid>
      : null }
      </Grid>
  
    </div>
  );
}

export default Globalnews;


 {/* <Grid item xs = {12} className = {classes.allItems} >
          <Instructions />
        </Grid> */}
          {/* <Grid item md = {6}  xs = {12}>     break points for mobile and desktop formats

              <SearchBar typed = {handleChange} className = {classes.allItems}

              />

          </Grid>

          <Grid item md = {6} xs = {12}>  Searchbar and locality checkbox should be side-to-side
            in desktop and then stacked in mobile 
            <LocalityCheckBox className = {classes.allItems}
            boxClicked = {handleBoxClick} status = {checked}/>
          </Grid> */}
