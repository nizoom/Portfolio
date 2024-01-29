import React from "react";
import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar";
import "./css/blog.css";
import BackToTopBtn from "../Components/backToTop/backToTop";
import BlogMenu from "../Components/BlogMenu/blogmenu";
import "./css/homepage.css";

const Blog = () => {
  const returnSelectedPgComponent = (clickedPage) => {
    console.log(clickedPage);
    // selection logic

    // transition css

    // show content
  };
  return (
    <div className="blog-page-wrapper">
      <Logo />
      <header>
        <div className="sidebar-and-socials-wrapper">
          <Sidebar clickHandler={null} />
        </div>
      </header>

      <div>
        {/* <BackToTopBtn navStatus={false} /> */}

        <BlogMenu returnSelectedPgComponent={returnSelectedPgComponent} />
      </div>
    </div>
  );
};

export default Blog;
