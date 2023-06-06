import React from "react";
import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar";
import "./css/blog.css";
import PostOne from "../Components/blog_posts/post_one";
import PostTwo from "../Components/blog_posts/post_two";
import PostThree from "../Components/blog_posts/post_three";
import PostFour from "../Components/blog_posts/post_four";
import PostFive from "../Components/blog_posts/post_five";
import BackToTopBtn from "../Components/backToTop/backToTop";
import BlogMenu from "../Components/BlogMenu/blogmenu";
import "./css/homepage.css";

const Blog = () => {
  return (
    <div className="blog-page-wrapper">
      <Logo />
      <div className="sidebar-and-socials-wrapper">
        <Sidebar clickHandler={null} />
      </div>

      <div>
        <BackToTopBtn navStatus={false} />
        <div className="blog_div">
          <div className="socials-mobile-view">
            <BlogMenu />
          </div>

          <div className="post">
            <PostFive />

            <PostFour />

            <PostThree />

            <PostTwo />

            <PostOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
