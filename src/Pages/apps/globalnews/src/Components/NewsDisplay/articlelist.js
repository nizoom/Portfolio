import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const ArticleList = (props) => {
  let readyToDisplay = false;
  if (props.articlesToDisplay !== undefined) {
    readyToDisplay = true;
  }

  const useStyles = makeStyles({
    typographyStyle: {
      border: "5px solid #FEFAE0",
      padding: ".8vh",
      overflowWrap: "break-word",
      color: "#FEFAE0",
      backgroundColor: "#6F9544",
      width: "95%",
      margin: "auto",
      marginTop: "2vh",
      "&:hover": {
        width: "99%",
        fontSize: "1.3rem",
      },
    },

    liMediaQueries: {
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:500px)": {
        fontSize: "16px",
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      {/*for each article list the source name and title which is also a hyperlink to
      the article */}
      <div name="results-wrapper" style={{ margin: "auto", width: "95%" }}>
        {readyToDisplay ? (
          <ul style={{ padding: 0 }}>
            {" "}
            {props.articlesToDisplay[0].map(function (article, index) {
              return (
                <li
                  key={article.url}
                  className={`${classes.typographyStyle} ${classes.liMediaQueries}`}
                >
                  {article.provider[0].name} -
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#FEFAE0" }}
                  >
                    {" "}
                    {article.name}{" "}
                  </a>{" "}
                </li>
              );
            })}{" "}
          </ul>
        ) : (
          <h1> Nothing to Display </h1>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
