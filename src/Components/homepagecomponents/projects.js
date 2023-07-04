import React from "react";
import ProjectCard from "./projectcard";

const ProjectsGridComponent = () => {
  const standardCardBtn = (props) => {
    return (
      <button className="project-card-btn">
        <a href={props.url} rel="noreferrer" target="_blank">
          {props.action}
        </a>
      </button>
    );
  };

  const initSlidesBtn = () => {
    return <button className="project-card-btn"> View Pages</button>;
  };
  return (
    <div className="project-grid">
      <ProjectCard
        projectTitle="Web Dev Intern with 3:5Creative[s]"
        projectDescription="Built out full WordPress websites for multiple company clients based on wireframes from design team."
        technologies="WordPress, HTML, Bootstrap, JS, Elementor"
        cardBtnsArray={[
          { component: initSlidesBtn, props: { link: "", action: "" } },
        ]}
      />
      <ProjectCard
        projectTitle="FeedSee"
        projectDescription="Web scraping app that uses Twitter's API to recreate a personal feed."
        technologies="ReactJS, TypeScript, Chakra UI, NodeJS, ExpressJS."
        cardBtnsArray={[
          {
            component: standardCardBtn,
            props: { link: "", action: "View ReadMe" },
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
            props: { link: "", action: "Try Now" },
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
  );
};

export default ProjectsGridComponent;
