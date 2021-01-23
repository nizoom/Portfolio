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


const Languages = ( ) => {
  return (

  <div>
    <h1 className = "title"> Languages </h1>
    <div className = "main">

      <Tippy content = {<span> HTML</span>}>
        <img src = {htmlImg} width = "" height = "150px" alt = "HTML"/>
      </Tippy>

      <Tippy content = {<span> CSS </span>}>
        <img src = {cssImg} width = "" height = "150" alt = "CSS"/>
      </Tippy>

      <Tippy content = {<span> JavaScript </span>}>
        <img src = {jsImg} width = "" height = "150" alt = "JavaScript"/>
      </Tippy>

      <Tippy content = {<span> ReactJS </span>}>
        <img src = {reactImg} width = "" height = "150" alt = "ReactJS"/>
      </Tippy>

      <Tippy content = {<span> NodeJS </span>}>
        <img src = {nodeImg} width = "" height = "150" alt = "NodeJS"/>
      </Tippy>


    </div>
  </div>
  )
}

export default Languages;
