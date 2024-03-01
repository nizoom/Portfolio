import React, { useState } from "react";
import "../../Pages/css/blog.css";
import { Link } from "react-router-dom";
const BlogMenu = (props) => {
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [comingSoonMsgClass, setComingSoonMsgClass] = useState(
    "hide-coming-soon-msg"
  );

  const [blogLabelState, setBlogLabelState] = useState({
    music: { text: "Music", class: "default-label-class" },
    tech: { text: "Tech", class: "default-label-class" },
    arsenal: { text: "Arsenal", class: "default-label-class" },
    writing: { text: "Writing", class: "default-label-class" },
  });

  const toggleLableStatus = (page) => {
    // handleComingSoonMsgClass();
    props.returnSelectedPgComponent(page);
    page = page.toLowerCase();

    const animations = [
      { func: slideOut, args: [page], delay: 0 },
      { func: slideIn, args: [page, "Coming Soon"], delay: 1000 },
      { func: slideOut, args: [page], delay: 2000 },
      { func: slideIn, args: [page], delay: 3000 },
    ];

    animations.forEach(({ func, args, delay }) => {
      setTimeout(() => {
        func(...args);
      }, delay);
    });
  };

  const updateLabelClass = (page, cssClass) => {
    setBlogLabelState((prevState) => ({
      ...prevState,
      [page]: { ...prevState[page], class: cssClass },
    }));
  };
  const updateLabelClassAndText = (page, cssClass, text = page) => {
    setBlogLabelState((prevState) => ({
      ...prevState,
      [page]: { text: String(text), class: cssClass },
    }));
  };
  const slideOut = (page) => {
    updateLabelClass(page, "slide-out");
  };

  const slideIn = (page, text = page) => {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    updateLabelClassAndText(page, "slide-in", capitalizedText);
  };
  return (
    <div className="blog-menu-flexbox">
      <div className="blog-page-description-wrapper">
        <h1 className="blog-menu-header">
          {" "}
          Blogs <span>and </span> writeups
        </h1>
        <h3 className={comingSoonMsgClass}>
          This section is coming <span> soon!</span>
        </h3>
      </div>

      <nav className="blog-nav">
        <ul>
          <li
            className="blog-tab tech-tab"
            onClick={() => toggleLableStatus("Tech")}
          >
            <h3 className={blogLabelState.tech.class}>
              {blogLabelState.tech.text}
            </h3>
          </li>

          <li
            className="blog-tab arsenal-tab"
            // onClick={() => toggleBlogPage("Arsenal")}
          >
            <Link
              to="/Arsenal"
              style={{ color: "#edc671", textDecoration: "none" }}
            >
              <h3>Arsenal</h3>
            </Link>
          </li>

          <li
            className="blog-tab music-tab"
            onClick={() => toggleLableStatus("Music")}
          >
            <h3 className={blogLabelState.music.class}>
              {blogLabelState.music.text}
            </h3>
          </li>
          <li
            className="blog-tab writing-tab"
            onClick={() => toggleLableStatus("Writing")}
          >
            <h3 className={blogLabelState.writing.class}>
              {blogLabelState.writing.text}
            </h3>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogMenu;
