import React from "react";

const BlogMenu = (props) => {
  return (
    <div>
      <nav className="blog-nav">
        <ul>
          <li className="blog-tab">
            <h3>Tech</h3>
          </li>
          <li className="blog-tab">
            <h3>Writing</h3>
          </li>
          <li className="blog-tab">
            <h3>Arsenal</h3>
          </li>
          <li className="blog-tab">
            <h3>Music</h3>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogMenu;
