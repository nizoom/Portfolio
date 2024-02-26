import React, { useState, useRef } from "react";
import ProjectCard from "./projectcard";
import Carousel from "../applinks/cardscomponent/carousel";
import FeedSeeThumbnail from "../../project_layout/feedseethumbnail.gif";
import GlobalNewsThumbnail from "../../project_layout/globalnews_thumbnail.png";
import ThreeFiveThumbnail from "../../project_layout/35-img.webp";
import ThankYouEmailBuilderThumbnail from "../../project_layout/Template_Builder_Thumbnail.png";
import EmailAutomaitonThumbnail from "../../project_layout/automation_thumbnail.jpg";

const smoothScroll = (locationRef) => {
  requestAnimationFrame(() => {
    console.log("scrolling");
    locationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};

const ProjectsGridComponent = () => {
  const [sliderClassName, setSliderClassName] = useState(
    "closed-slider-wrapper"
  );
  const standardCardBtn = (props) => {
    return (
      <button className="project-card-btn">
        <a href={props.link} rel="noreferrer" target="_blank">
          <p>{props.action}</p>
        </a>
      </button>
    );
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
          projectTitle="Wordpress Developer with 3:5Creative[s]"
          thumbnail={ThreeFiveThumbnail}
          projectDescription="Built out WordPress websites and themes for company clients based on wireframes from design team. Led team of interns to assist in development."
          technologies="WordPress, PHP, Elementor, Bootstrap, JS"
          cardBtnsArray={[
            {
              component: initSlidesBtn,
              props: {
                link: "https://35creatives.com/",
                action: "View Pages",
              },
            },
          ]}
        />
        <ProjectCard
          projectTitle="FeedSee"
          thumbnail={FeedSeeThumbnail}
          projectDescription="Web scraping app that uses Twitter's API to recreate a personal feed."
          technologies="ReactJS, TypeScript, Chakra UI, NodeJS."
          cardBtnsArray={[
            {
              component: standardCardBtn,
              props: {
                link: "https://github.com/nizoom/FeedSee/blob/main/README.md",
                action: "View ReadMe",
              },
            },
          ]}
        />
        <ProjectCard
          projectTitle="Global News"
          thumbnail={GlobalNewsThumbnail}
          projectDescription="Web app that finds localized news based on geolocation from map click."
          technologies="ReactJS, Azure, Google Cloud, Firebase."
          cardBtnsArray={[
            {
              component: standardCardBtn,
              props: {
                link: "https://nissimram.com/#/globalnews/landingpage",
                action: "Try Now",
              },
            },
            {
              component: standardCardBtn,
              props: {
                link: "https://github.com/nizoom/Portfolio/tree/main/src/Pages/apps/globalnews/src",
                action: "View Code",
              },
            },
          ]}
        />
        <ProjectCard
          projectTitle="Thank You Email Generator"
          thumbnail={ThankYouEmailBuilderThumbnail}
          projectDescription="Form web app that builds and sends templated thank you emails for nonprofit donations."
          technologies="ReactJS, NodeJS, and Handlebars."
          cardBtnsArray={[
            {
              component: standardCardBtn,
              props: {
                link: "https://github.com/nizoom/TYTemplateBuilder#readme",
                action: "View ReadMe",
              },
            },
          ]}
        />
        <ProjectCard
          projectTitle="Automation Donation Handler"
          thumbnail={EmailAutomaitonThumbnail}
          projectDescription="Backend app that generates custom daily thank you emails based on donations from an API and stores them in the organization's database."
          technologies="NodeJS, NodeMailer, and Handlebars."
          cardBtnsArray={[
            {
              component: standardCardBtn,
              props: {
                link: "https://github.com/nizoom/TYAutomation/blob/main/README.md",
                action: "View ReadMe",
              },
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

export { ProjectsGridComponent, smoothScroll };
