import React, { useState } from "react";
import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar"
import "./css/blog.css"
import PostOne from "../Components/blog_posts/post_one"
import PostTwo from "../Components/blog_posts/post_two"
import PostThree from "../Components/blog_posts/post_three";
import PostFour from "../Components/blog_posts/post_four";
import PostFive from "../Components/blog_posts/post_five";
import BackToTopBtn from "../Components/backToTop/backToTop"




const Blog = (props) => {

  const [navStatus, setNavStatus] = useState(false);

  const getSidebarStatus = (sidebarStatus) => {
  
    return (sidebarStatus ? setNavStatus(true) : setNavStatus(false))
  }


  return (
    <div className={navStatus ? "wallpaper-extended blog-wrapper": "wallpaper blog-wrapper" }>
      <Logo />
      <Sidebar clickHandler={null} />
      <div className={navStatus ? "navOpen" : null}>
        <BackToTopBtn navStatus = {navStatus}/>
        <div className="blog_div">
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
  )
}

export default Blog;
