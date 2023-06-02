import React, { useMemo } from "react";
import "../../Pages/css/homepage.css";
import { useMediaQuery } from "react-responsive";
const BlogMenu = (props) => {
  // const isDesktop = useMediaQuery({ minWidth: 1024 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const screenType = useMemo(() => {
    if (isMobile) {
      return "socials-wrapper mobile-blog-nav";
    }
    return "blog-nav";
  }, [isMobile]);
  return (
    <div>
      <nav className={screenType}>
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
