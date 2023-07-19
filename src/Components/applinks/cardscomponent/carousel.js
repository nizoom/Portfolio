import React, { forwardRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ESContactPage from "../../../project_layout/elitesuites-contact.png";
import ESEntrePage from "../../../project_layout/elitesuites-entre.png";
import certOfCompletion from "../../../project_layout/Nissim-Certificate-Of-Completion.png";
import "./carousel.css";

const Carousel = forwardRef((props, ref) => {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        props.closeSlider();
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const closeSlider = () => {
    props.closeSlider();
  };
  return (
    <div className={props.className} ref={ref}>
      <button className="close-slider-btn" onClick={closeSlider}>
        <FontAwesomeIcon icon={faX} />
      </button>
      <Slider {...settings} className="slider-parent-element">
        <div>
          <img
            rel="preload"
            as="image"
            src={ESContactPage}
            className="carousel-img"
            alt="contact-page-build-during-internship"
          />
        </div>
        <div>
          <img
            rel="preload"
            as="image"
            src={ESEntrePage}
            alt="entrepreneurs-page-build-during-internship"
            className="carousel-img"
          />
        </div>
        <div>
          <img
            rel="preload"
            as="image"
            src={certOfCompletion}
            alt="certificate for completion of internship"
            className="carousel-img"
          />
        </div>
      </Slider>
    </div>
  );
});

export default Carousel;
