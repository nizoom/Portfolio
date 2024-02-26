import React, { useState } from "react";
import ThreeFiveImg from "../../project_layout/35-img.webp";
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
        <img
          src={ThreeFiveImg}
          className="thumbnail-img"
          onMouseEnter={toggleHoverState}
          onMouseLeave={toggleHoverState}
        />
      </div>
    </div>
  );
};

export default ProjectThumbnail;
