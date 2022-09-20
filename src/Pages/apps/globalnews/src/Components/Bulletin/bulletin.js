import { uuidv4 } from "@firebase/util";
import React from "react";
import "../../styles/compiledCss/bulletin.css";
const NewsBulletin = (props) => {
  console.log(props.newsArray);
  const newsArr = props.newsArray[0];
  // newsArr.forEach((article) => {
  //   console.log(article.provider[0].name);
  // });

  const determineBoxSize = (title) => {
    if (newsArr.length < 8) {
      const titleLength = title.length;
      if (titleLength < 40) {
        return `card card-small`;
      }
      if (titleLength < 70) {
        return `card card-medium`;
      }
      return `card card-large`;
    }
    return `card card-small`;
  };

  const renderArticles = () => {
    const html = newsArr.map((article) => {
      const title = article.name;
      const className = determineBoxSize(title);
      // console.log("fired");
      return (
        <li className={`${className} gn-box-content`} key={uuidv4()}>
          <a href={article.url} rel="noopener noreferrer" target="_blank">
            <p className="gn-article-title"> {title}</p>
          </a>
          <div className="gn-publisher-div">
            <p className="gn-publisher"> {article.provider[0].name}</p>
          </div>
        </li>
      );
    });
    return html;
  };

  return (
    <div className="">
      {props.newsArray.length > 0 ? (
        <ul className="bulletin-component-wrapper">{renderArticles()}</ul>
      ) : (
        <div className="bulletin-component-wrapper-no-data">
          <p className="default-bulletin">
            Click and a location to get your local paper
          </p>
        </div>
      )}
    </div>
  );
};
export default NewsBulletin;
