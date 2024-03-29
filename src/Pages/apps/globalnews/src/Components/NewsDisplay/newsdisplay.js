import React, { useRef, useEffect } from "react";
import ArticleList from "./articlelist";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const NewsDisplay = (props) => {
  //Object that tracks properties about the data which inform what news header is to be displayed
  let displayDataObj = {
    newsAvailable: false,
    topicWanted: false,
    localityWanted: props.localityStatus,
    dataAssessed: false,
  };

  let newsArray, localityName, country, topic;

  if (props.dataForDisplay === "NOTHINGFOUND") {
    //console.log("NothingFound");
    newsArray = undefined; //triggers no news display when newsArray is checked
    //console.log(newsArray);
  }

  if (Array.isArray(props.dataForDisplay)) {
    // successful click
    // / checking is an array rather than the "nothingfound" str

    if (props.dataForDisplay.length > 3) {
      [newsArray, localityName, country, topic] = props.dataForDisplay;
    } else {
      //nonnational click
      // here changing name of nonNationalName to country so that the WhatToDisplay
      //function knows what to pick up on
      [newsArray, country, topic] = props.dataForDisplay;
      localityName = "";
      displayDataObj.localityWanted = false;
      //console.log(newsArray);
    }
  }
  //console.log(newsArray, localityName, country, topic);

  //based on the news results this function will change the displayDataObj

  const assessData = (displayDataObj) => {
    //console.log(`newsArray: ${newsArray}  length ${newsArray[0].length} `);
    if (newsArray !== undefined) {
      //if there is news

      displayDataObj.newsAvailable = true;
    }

    if (localityName !== "" || localityName === !undefined) {
      //if there is a locality

      displayDataObj.localityWanted = true;
      // local area searched
      //console.log(localityWanted + "localityWanted");
    }

    if (topic !== "" || undefined) {
      //if there is a topic
      //user added topic

      displayDataObj.topicWanted = true;
    }
    displayDataObj.dataAssessed = true;

    return displayDataObj;
  };

  const assessedData = assessData(displayDataObj);

  //WhatToDisplay -> based on assessed displayDataObj display the appropriate header

  const WhatToDisplay = () => {
    useEffect(() => {
      //console.log("scrollfired");
      scrollIntoView();
    }, [props.dataForDisplay]);

    if (!displayDataObj.newsAvailable) {
      //if no news
      //console.log("Firing no news display");
      return (
        <h3 className={`${classes.h1} ${classes.h1MediaQueries}`}>
          {" "}
          There is no results based on this location or topic. Try clicking a
          city or town. You can also go back and turn off Localized search to
          broaden your results to the national level
        </h3>
      );
      //all possibilities assuming that there is news:
    } //if there is news, its local, and topic/userfilter is used

    if (displayDataObj.localityWanted && displayDataObj.topicWanted) {
      return (
        <h1 className={`${classes.h1} ${classes.h1MediaQueries}`}>
          {" "}
          Here is the news for {localityName}, {country} and {topic}
        </h1>
      );
    }
    // 2. local news only
    if (!displayDataObj.topicWanted && displayDataObj.localityWanted) {
      return (
        <h1 className={`${classes.h1} ${classes.h1MediaQueries}`}>
          {" "}
          Here is the news for {localityName}, {country}{" "}
        </h1>
      );
    }
    //3. country news and topic / userfilter is used
    if (!displayDataObj.localityWanted && displayDataObj.topicWanted) {
      return (
        <h1 sclassName={`${classes.h1} ${classes.h1MediaQueries}`}>
          {" "}
          Here is the news for {country} and {topic}{" "}
        </h1>
      );
    }

    // 4. country news only
    if (!displayDataObj.localityWanted && !displayDataObj.topicWanted) {
      return (
        <h1 className={`${classes.h1} ${classes.h1MediaQueries}`}>
          {" "}
          Here is the news for {country}{" "}
        </h1>
      );
    }

    displayDataObj.dataAssessed = false;
  };

  const useStyles = makeStyles((theme) => ({
    typographyStyle: {
      color: "#BC6C25",
      padding: "2vh",
      fontWeight: "700",
    },

    h1: {
      color: "#FEFAE0",
    },

    h1MediaQueries: {
      "@media (max-width:900px)": {
        fontSize: "28px",
      },
      "@media (max-width:600px)": {
        fontSize: "24px",
      },
      "@media (max-width:500px)": {
        fontSize: "20px",
      },
    },
  }));

  const classes = useStyles();

  const scrollIntoView = () => {
    //console.log(newsDisplayRef.current);
    newsDisplayRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const newsDisplayRef = useRef();

  return (
    <div>
      <CssBaseline />

      <Container
        style={{ alignItems: "stretch", padding: "0" }}
        maxWidth={false}
      >
        <Typography
          component="div"
          className={classes.typographyStyle}
          style={{ backgroundColor: "#283618", overflowY: "hidden" }}
          ref={newsDisplayRef}
        >
          {WhatToDisplay()}

          {displayDataObj.newsAvailable ? (
            <ArticleList articlesToDisplay={newsArray} />
          ) : null}
        </Typography>
      </Container>
    </div>
  );
};

export default NewsDisplay;
