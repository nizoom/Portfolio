import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
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
  });

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
        <FontAwesomeIcon icon={faX} />
      </button>
      <Slider {...settings}>
        <div>
          <img
            rel="preload"
            as="image"
            src={ESContactPage}
            style={{ maxHeight: "500px", maxWidth: "800px" }}
            alt="contact-page-build-during-internship"
          />
        </div>
        <div>
          <img
            rel="preload"
            as="image"
            src={ESEntrePage}
            alt="entrepreneurs-page-build-during-internship"
            style={{ maxHeight: "500px", maxWidth: "800px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Fader;
