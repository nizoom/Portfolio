import React from "react";
import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar"
import "./css/blog.css"
import PostOne from "../Components/blog_posts/post_one"


const Blog = ( ) => {
  return (
    <div>
      <Logo/>
      <Sidebar/>
      <div className = "blog_div">
        <div className = "post">
          <PostOne/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
