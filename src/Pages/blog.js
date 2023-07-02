import React from "react";
import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar";
import "./css/blog.css";
// import PostOne from "../Components/blog_posts/post_one";
// import PostTwo from "../Components/blog_posts/post_two";
// import PostThree from "../Components/blog_posts/post_three";
// import PostFour from "../Components/blog_posts/post_four";
// import PostFive from "../Components/blog_posts/post_five";
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

        {/* <div className="post">
            <PostFive />

            <PostFour />

            <PostThree />

            <PostTwo />

            <PostOne />
          </div> */}
      </div>
    </div>
  );
};

export default Blog;
