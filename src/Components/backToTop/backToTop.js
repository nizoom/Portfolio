import React from "react";
import "./backToTop.css"

const BackToTopBtn = ( props ) => {

  const scrollUp = ( )=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return(
    <div className = "btn_div">
      <button type = "button" className = "top"
      onClick = {scrollUp}
      > 👆 </button>
    </div>
  )
}

export default BackToTopBtn;
