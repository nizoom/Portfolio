import React from "react"
import "./languages.css"
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//images
import htmlImg from "./lang_imgs/html_img.png"
import cssImg from "./lang_imgs/css_img.png"
import jsImg from "./lang_imgs/js_img.png"
import nodeImg from "./lang_imgs/node_img.png"
import reactImg from "./lang_imgs/react_img.png"


/*
1. try a classname for all where custom attribute for each will be pluged in
2. follow along with video
ddd*/


const Languages = ( props ) => {
  return (

  <div className = {props.classStatusForMobile != "gif"  && window.innerWidth < 850 ? "navOpen" : "boom"}>
    <div className = "title_div">
      <h1 className = "title"> Languages </h1>
    </div>
    <div className = "main">
      <div>
      <Tippy content = {<span> HTML</span>}>
        <img src = {htmlImg} width = "" height = "150px" alt = "HTML"
        className = "htmlImg"/>
      </Tippy>
      </div>

      <div>
      <Tippy content = {<span> CSS </span>}>
        <img src = {cssImg} width = "" height = "150" alt = "CSS"
        className = "cssImg"/>
      </Tippy>
      </div>

      <div>
      <Tippy content = {<span> JavaScript </span>}>
        <img src = {jsImg} width = "" height = "150" alt = "JavaScript"
        className = "jsImg"/>
      </Tippy>
      </div>

      <div>
      <Tippy content = {<span> ReactJS </span>}>
        <img src = {reactImg} width = "" height = "120" alt = "ReactJS"
        className = "reactImg" />
      </Tippy>
      </div>

      <div className = "nodeImg_div">
      <Tippy content = {<span> NodeJS </span>}>
        <img src = {nodeImg} width = "" height = "120" alt = "NodeJS"
        className = "nodeImg"/>
      </Tippy>
      </div>


    </div>
  </div>
  )
}

export default Languages;
