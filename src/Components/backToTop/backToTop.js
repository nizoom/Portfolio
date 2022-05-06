import React from "react";
import "./backToTop.css"
import Arrow from "../../project_layout/arrow.png"

const BackToTopBtn = (props) => {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
 
  return (
    <div className={props.navStatus ? "hide-backtotop-btn" : "btn_div"}>
      <button type="button" className="top"
        onClick={scrollUp}
      > <img src = {Arrow} className = 'up-arrow-img' alt = 'button going to top of page'/> </button>
    </div>
  )
}

export default BackToTopBtn;
