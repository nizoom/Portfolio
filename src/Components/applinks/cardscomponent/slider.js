import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ESContactPage from "../../../project_layout/elitesuites-contact.png";
import ESEntrePage from "../../../project_layout/elitesuites-entre.png";
import "./cards.css";

const Fader = (props) => {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        // Do something when the Escape key is pressed
        props.sliderControls.closeSlider();
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const faderRef = useRef();
  useEffect(() => {
    if (props.sliderStatus) {
      console.log(faderRef.current);
      if (faderRef.current) {
        handleScrollToSlider();
      }
    }
  }, [props.sliderStatus]);

  const handleScrollToSlider = () => [
    setTimeout(() => {
      if (props.sliderStatus) {
        console.log("check test");
        requestAnimationFrame(() => {
          faderRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    }, 500),
  ];

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const closeSlider = () => {
    props.sliderControls.closeSlider();
  };
  return (
    <div className="slider-wrapper" ref={faderRef}>
      <button className="close-slider-btn" onClick={closeSlider}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="x-char"
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      </button>
      <Slider {...settings}>
        <div>
          <img
            src={ESContactPage}
            style={{ maxHeight: "500px", maxWidth: "800px" }}
          />
        </div>
        <div>
          <img
            src={ESEntrePage}
            style={{ maxHeight: "500px", maxWidth: "800px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Fader;
