import React, {useState}from "react";
import Logo from "../Components/logo/logo";
import Sidebar from "../Components/sidebar/sidebar"
import "./css/blog.css"
import PostOne from "../Components/blog_posts/post_one"
import BackToTopBtn from "../Components/backToTop/backToTop"



const Blog = ( props ) => {

  const [clazz, setClazz] = useState(false);

  const childFunction = (sidebarStatus) => {
    if(sidebarStatus && window.innerWidth < 850){
      setClazz(!clazz)
    } if(window.innerWidth < 850) {
      setClazz(!clazz)
    }

  }

  return (
    <div>
      <Logo/>
      <Sidebar functionCallFromParent = {childFunction}/>
      <div className = {clazz ? "navOpen" : null }>
        <BackToTopBtn/>
        <div className = "blog_div">
          <div className = "post">
            <PostOne/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;
