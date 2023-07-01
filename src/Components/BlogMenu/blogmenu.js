import React, { useMemo, useState } from "react";
import "../../Pages/css/homepage.css";
import { useMediaQuery } from "react-responsive";
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

  const screenType = useMemo(() => {
    if (isMobile) {
      if (comingSoonMsgClass !== "hide-coming-soon-msg") {
        setComingSoonMsgClass("mobile-coming-soon-msg");
      }
      return "socials-wrapper mobile-blog-nav";
    }
    return "blog-nav";
  }, [isMobile, comingSoonMsgClass]);
  return (
    <div>
      <h4 className={comingSoonMsgClass}>These sections are coming soon!</h4>
      <nav className={screenType}>
        <ul>
          <li className="blog-tab" onClick={() => toggleBlogPage("Tech")}>
            <h3>Tech</h3>
          </li>
          <li className="blog-tab" onClick={() => toggleBlogPage("Writing")}>
            <h3>Writing</h3>
          </li>
          <li className="blog-tab" onClick={() => toggleBlogPage("Arsenal")}>
            <h3>Arsenal</h3>
          </li>
          <li className="blog-tab" onClick={() => toggleBlogPage("Music")}>
            <h3>Music</h3>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogMenu;
