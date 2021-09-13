import React from "react";


const Tester = ( props ) => {

  return(
    <div>
      <div>
        <nav>
        <button className = "close" onClick = {props.onClick}>.</button>
        <button >  About </button>
        <button > Contact Us </button>
        <button> Support </button>

        <button> Our Clients </button>
        <button> Find a circle near you </button>
        <button> Testimonials </button>
        </nav>
      </div>
    </div>
  )}

export default Tester
