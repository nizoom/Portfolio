import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="projectcard-box">
      <div className="projectcard-content">
        <h3 className="project-title">{props.projectTitle}</h3>
        <p className="proj-description"> {props.projectDescription}</p>
        <p className="proj-description"> Technologies: {props.technologies}</p>
      </div>
      <div className="projectcard-btns-section">
        {props.cardBtnsArray.map((btnObject, index) => {
          const BtnComponent = btnObject.component;
          const { action, link } = btnObject.props;
          return <BtnComponent key={index} link={link} action={action} />;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
