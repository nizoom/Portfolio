import React, { useState, useRef } from "react";
import ProjectCard from "./projectcard";
import Carousel from "../applinks/cardscomponent/carousel";

const ProjectsGridComponent = () => {
  const [sliderClassName, setSliderClassName] = useState("slider-wrapper");
  const standardCardBtn = (props) => {
    return (
      <button className="project-card-btn">
        <a href={props.link} rel="noreferrer" target="_blank">
          <p>{props.action}</p>
        </a>
      </button>
    );
  };

  const smoothScroll = (locationRef) => {
    requestAnimationFrame(() => {
      console.log("scrolling");
      locationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };
  const triggerSlider = () => {
    setSliderClassName("slider-wrapper");
    smoothScroll(carouselRef);
  };
  const closeSlider = () => {
    smoothScroll(topOfSectionRef);
    setTimeout(() => {
      setSliderClassName("closed-slider-wrapper ");
    }, 500);
  };

  const carouselRef = useRef();
  const topOfSectionRef = useRef();
  const initSlidesBtn = () => {
    return (
      <button className="project-card-btn" onClick={triggerSlider}>
        {" "}
        <p>View Pages</p>
      </button>
    );
  };
  return (
    <div>
      <div className="project-grid" ref={topOfSectionRef}>
        <ProjectCard
          projectTitle="Web Dev Intern with 3:5Creative[s]"
          projectDescription="Built out full WordPress websites for multiple company clients based on wireframes from design team."
          technologies="WordPress, HTML, Bootstrap, JS, Elementor"
          cardBtnsArray={[
            {
              component: initSlidesBtn,
              props: {
                link: triggerSlider,
                action: "View Pages",
              },
            },
          ]}
        />
        <ProjectCard
          projectTitle="FeedSee"
          projectDescription="Web scraping app that uses Twitter's API to recreate a personal feed."
          technologies="ReactJS, TypeScript, Chakra UI, NodeJS, ExpressJS."
          cardBtnsArray={[
            {
              component: standardCardBtn,
              props: {
                link: "https://github.com/nizoom/FeedSee",
                action: "View ReadMe",
              },
            },
          ]}
        />
        <ProjectCard
          projectTitle="Global News"
          projectDescription="Web app that finds localized news based on geolocation from map click."
          technologies="ReactJS, React Router, Azure, Google Cloud, Firebase."
          cardBtnsArray={[
            {
              component: standardCardBtn,
              props: {
                link: "https://github.com/nizoom/Portfolio/tree/main/src/Pages/apps/globalnews/src",
                action: "Try Now",
              },
            },
            {
              component: standardCardBtn,
              props: { link: "", action: "View Code" },
            },
          ]}
        />
        <ProjectCard
          projectTitle="Thank You Email Generator
        "
          projectDescription="Form web app that builds and sends templated thank you emails for nonprofit donations."
          technologies="ReactJS, ExpressJS, NodeJS, NodeMailer, and Handlebars."
          cardBtnsArray={[
            {
              component: standardCardBtn,
              props: { link: "", action: "View ReadMe" },
            },
          ]}
        />
        <ProjectCard
          projectTitle="Automation Donation Handler"
          projectDescription="Backend app that uses that generates custom daily thank you emails based on donations from an API and stores them in the organization's database."
          technologies="ExpressJS, NodeJS, NodeMailer, and Handlebars."
          cardBtnsArray={[
            {
              component: standardCardBtn,
              props: { link: "", action: "View ReadMe" },
            },
          ]}
        />
      </div>
      <div></div>
      <Carousel
        className={sliderClassName}
        closeSlider={closeSlider}
        ref={carouselRef}
      />
    </div>
  );
};

export default ProjectsGridComponent;
