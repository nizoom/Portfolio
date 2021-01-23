import React from "react";
import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar"
import "./css/blog.css"


const Blog = ( ) => {
  return (
    <div>
      <Logo/>
      <Sidebar/>
      <div className = "blog_div">
        <div className = "post">
          <h1> Post 1 </h1>
        </div>
      </div>
    </div>
  )
}

export default Blog;
