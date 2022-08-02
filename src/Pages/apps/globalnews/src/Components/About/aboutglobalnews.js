import React, {useState} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles"

const About = ( props ) => {
  


  const useStyles = makeStyles({
    h2 : {
      textDecoration: 'underline',
      cursor: 'pointer',
       color: "#FEFAE1",
      fontSize: "25px",
      position: 'absolute',
      top: '40px',
      right: '20px',
      
      '@media (max-width:900px)': {
        fontSize: "20px",
        top: '30px',
      },
      '@media (max-width:600px)': {
        fontSize: "20px",
      },
      '@media (max-width:500px)': {
        position: 'relative', textAlign: 'center', right: '0'
      }
    } ,

    p : {
      color: "#FEFAE1",
      fontSize: '18px',
      '@media (max-width:600px)': {
        fontSize: '16px',
      }
    }
  })

  const classes = useStyles()

  const [aboutStatus, setAboutStatus] = useState(false);

  return(
    <div name = "Stuart">
      <Typography variant = "h2" className={classes.h2} onClick = {() => setAboutStatus(!aboutStatus)}> About </Typography>
      
      <CssBaseline />
   {   aboutStatus ? <Container maxWidth = "md" style = {{backgroundColor : "#BC6C25", padding : "1vh",
        marginTop: "4em"}} >
        <p className={classes.p}> This web app was inspired by the convenience and
        subsequently narrowing format of modern news consumption.
        The majority of news sites convey a preselected list of articles that inform
        you of what important events have occurred that day. Yet often this reporting is
        specific to your city or country, while other areas are deemed irrelevant, and fated to
         be excluded from your news feed day after day.
         This app encourages geographic and social exploration.
         Through using the Google Maps API, Leaflet JS library, and Azure News API
         the app allows you to be as local or macro as your interest demands.
         By clicking on places you’ve never heard of before, you get a glimpse of
         the victories and challenges of people living in these places.
         I hope it is a springboard for your curiosity! For more check out <a href = 'nissimram.com'  target="_blank" rel="noopener noreferrer"> nissimram.com </a> </p>
       </Container> : null }
    </div>
  )
}

export default About;
