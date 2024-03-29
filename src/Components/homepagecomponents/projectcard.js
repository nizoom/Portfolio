import React from "react";
import ProjectThumbnail from "./project_thumbail";

const ProjectCard = (props) => {
  const extractedLinkForThumbnail = () => {
    // console.log(props.cardBtnsArray[0].props.link);
    return props.cardBtnsArray[0].props.link;
  };
  return (
    <div className="projectcard-box">
      <div className="projectcard-content">
        <ProjectThumbnail
          thumbnailImg={props.thumbnail}
          link={extractedLinkForThumbnail()}
        />
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
