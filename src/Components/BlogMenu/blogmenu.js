import React, { useMemo, useState } from "react";
import "../../Pages/css/homepage.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
const BlogMenu = (props) => {
  // const isDesktop = useMediaQuery({ minWidth: 1024 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const [comingSoonMsgClass, setComingSoonMsgClass] = useState(
    "hide-coming-soon-msg"
  );

  const handleComingSoonMsgClass = () => {
    if (comingSoonMsgClass === "hide-coming-soon-msg") {
      if (isMobile) {
        setComingSoonMsgClass("mobile-coming-soon-msg");
      } else {
        setComingSoonMsgClass("show-coming-soon-msg");
      }
      const timer = setTimeout(() => {
        setComingSoonMsgClass("hide-coming-soon-msg");
      }, 2000);

      // Clean up the timer on component unmount
      return () => clearTimeout(timer);
    }
  };

  const toggleBlogPage = (page) => {
    handleComingSoonMsgClass();
    props.returnSelectedPgComponent(page);
  };

  return (
    <div className="blog-menu-flexbox">
      <div className="blog-page-description-wrapper">
        <h1 className="blog-menu-header">
          {" "}
          Blogs <span>and </span> writeups
        </h1>
      </div>
      <nav className="blog-nav">
        <h4 className={comingSoonMsgClass}>These sections are coming soon!</h4>

        <ul>
          <li
            className="blog-tab tech-tab"
            onClick={() => toggleBlogPage("Tech")}
          >
            <h3>Tech</h3>
          </li>

          <li
            className="blog-tab arsenal-tab"
            onClick={() => toggleBlogPage("Arsenal")}
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
            onClick={() => toggleBlogPage("Music")}
          >
            <h3>Music</h3>
          </li>
          <li
            className="blog-tab writing-tab"
            onClick={() => toggleBlogPage("Writing")}
          >
            <h3>Writing</h3>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogMenu;
