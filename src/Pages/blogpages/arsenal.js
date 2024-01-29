import React, { useState, useRef, useEffect } from "react";
import "../blogpages/blogcss/arsenal.css";
import Logo from "../../Components/logo/logo";
import Sidebar from "../../Components/sidebar/sidebar";
const ArsenalPage = () => {
  const [isSolidBackground, setIsSolidBackground] = useState(false);
  const arsenalPageRef = useRef();
  const figmaBackgroundRef = useRef();
  const solidBackgroundRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      // if (!arsenalPageRef.current) return;
      // const backgroundEnd =
      //   figmaBackgroundRef.current.offsetHeight - window.innerHeight;
      // if (window.scrollY >= backgroundEnd) {
      //   setIsSolidBackground(true);
      // } else {
      //   setIsSolidBackground(false);
      // }
    };
    //  create a new div the height of which is the distance between the end of the figma and
    // the bottom of the page
    const figmaBackgroundHeight = figmaBackgroundRef.current.clientHeight;
    solidBackgroundRef.current.style.height = `calc(100vh - ${figmaBackgroundHeight}px)`;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={isSolidBackground ? "arsenal-pg-solid-bg" : "arsenal-page"}
      ref={arsenalPageRef}
    >
      <header>
        <Logo />
        <div className="sidebar-and-socials-wrapper">
          <Sidebar clickHandler={null} />
        </div>
      </header>
      <div className="arsenal-background" ref={figmaBackgroundRef}>
        {" "}
      </div>

      <div className="blog-div arsenal-content">
        <h1 className="blog-title">An Arsenal Blog</h1>

        <h2> Plastic fan </h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="solid-background" ref={solidBackgroundRef}></div>
      </div>
    </div>
  );
};

export default ArsenalPage;
