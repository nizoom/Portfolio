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

    // START USING A CMS!!
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

        <h2> The Perspective of a “Plastic” Fan</h2>
        <p>
          I’ve been an Arsenal fan for just about ten years now. Perhaps, like
          other Americans, my interest came in reverse order. While many
          countries outside the US had football as their default dominant sport,
          here I discovered it virtually. Back in 2012, FIFA 13 seemed like a
          classy video game to learn about, and I wanted to know how to handle
          the sticks if it ever came up in an emergency. I remember not
          understanding the structure of football, such as the difference
          between club and national teams. After first booting up the game and
          seeing SPFC (Sao Paolo Football Club) in its grand red, black, and
          white letters I thought, “wow that must be Spain’s team”.
        </p>
        <p>
          Getting introduced to a sport through its videogame is both a jump in
          the deep end and incredibly immersive. Without prior knowledge I had
          to look up how other people played and listened to them commentate
          their matches. A game mode like FIFA’s Ultimate Team, despite its more
          recent money-grubbing format, was a great way to understand the
          relationships and stories that built the structure of football’s
          universe. Here you could select players from the same club or country,
          which would build your team’s chemistry and qualify it for certain
          boosts. The once alien symbols of club crests and national flags
          became increasingly familiar. Slowly, I began to understand how
          football was organized.
        </p>
        <p>
          I became an Arsenal fan, also through the internet. My favorite FIFA
          gamers were Arsenal fans, so I decided to see what the hype was about.
          At some point I stumbled upon Arsenal Fan TV. They are the biggest
          online community of Arsenal fans and based out of London. The host,
          Robbie Lyle, interviews fans after games to get their take on the
          club’s latest efforts towards success. Though often accused of being
          deluded, there’s usually been a spectrum of opinions. From rage at the
          mediocrity of the last decade (excluding 2022- 2024 so far) to
          disappointed acceptance.
        </p>
        <p>
          In any case, the videos provided more context for what fans can expect
          from their club. And the fans weren’t just British. The regulars on
          the channel were from all over the world: Palestine, Nigeria, Jamaica
          and beyond.
        </p>
        <p>
          From the view of someone born into the game, this journey falls under
          the category of a “plastic” fan. I’m hoping, through this blog, to
          make my connection to the club will be more visceral and less virtual:
          to finally write about the club, link up with other fans, and one day
          make it to “one of those famous European nights” where global history
          is made, compressed down to an iconic period of 90 minutes.
        </p>
        <p>It also scratches an itch to just write about football.</p>
        <div className="solid-background" ref={solidBackgroundRef}></div>
      </div>
    </div>
  );
};

export default ArsenalPage;
