import React, { useState } from "react";

const ProjectThumbnail = (props) => {
  const toggleHoverState = () => setHoverState(!hoverState);
  const [hoverState, setHoverState] = useState(false);
  return (
    <div className="project-thumbnail-wrapper">
      <div
        className={
          !hoverState ? "thumbnail-wrapper" : "thumbnail-wrapper-hovered"
        }
      >
        <a href={props.link} target="_blank">
          <img
            src={props.thumbnailImg}
            className="thumbnail-img"
            onMouseEnter={toggleHoverState}
            onMouseLeave={toggleHoverState}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
