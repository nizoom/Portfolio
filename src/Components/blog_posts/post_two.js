import React from "react";

const PostTwo = (props) => {
  return (
    <div style={{ marginBottom: "10em" }}>
      <h1 style={{ color: "#D2C396", margin: "60px", fontWeight: "400" }}> Post Two, March 2021 </h1>
      <h2 style={{ textAlign: "center", color: "#D2C396", fontWeight: "300" }}> Global News Project </h2>

      <p style={{ fontSize: "1.3em", lineHeight: "2", color: "#D2C396" }} >

        This post is about building my first web application, Global News.
        I first had the idea for the project around a year ago, and at the time,
        it came in a very different form.
        <br /><br />
        It was inspired by a rising need for immigration assistance.
        Between climate change creating unstable homes and global economic
        inequality generating desperation, there would be a compounding need for
        travel both today and in the future. And so, I was thinking about how to facilitate
        information to those considering a journey to a new place.
        <br /><br />

        What would people need to know before embarking on this new chapter?
        What’re public schools like, how does the local healthcare work, what’re the job prospects
        available, how do you start along the avenues towards becoming a legal resident? These are the
        questions I thought might be on the minds of prospective immigrants.
        <br /><br />

        While this could be of service to, for example, a
        refugee on the other side of the world, I also was spurred on by something closer to
        home. Here, the socioeconomic circumstances that many Americans my generation find themselves
        in came to mind. Combining student debt with a high cost of living can make America feel like
        a place that demands that you join the rat race for survival, whether your heart is in it or not.
        Is this incentive enough to leave? Often the answer is no. Aside from personal

        and familial ties that would be difficult to turn into longer distance connections,
        there is a cultural block against contemplating leaving America.
        The US is painfully closed off. Sometimes, in the media, there is a stigma
        against learning from other countries, certainly on the level of public policy.
        Often American pundits talk about tax and healthcare systems abroad as if there is
        something inherently broken about them due to their foreignness. I bring it up to serve
        as an example of how
        this attitude trickles down to a popular sentiment, a lethargy we have around
        imagining a life outside the US.
        <br /><br />

        Part of this is due to geographic isolation. Our closest national neighbors are often 4 or 5 hours away
        by flight and many more by car or train.  I was
        fortunate enough to study abroad in London and was struck by the accessibility
        to other countries. With that accessibility comes contact with other languages and a broader range of people. You leave feeling that you’ve come into contact with a much wider breadth of society than you could do in some of America’s most diverse cities. Global News attempts to tackle that issue of distance and encourages the user to zoom into places they’ve never been to or heard of.
        <br /><br />

        Upon starting this project, it became clear that the questions I was hoping to answer around healthcare, schooling, and immigration processes meant a level of data availability that would be difficult to manage. Not only would there have to be infrastructure to track a given category in every country, but it would also have to be public. While certain nations may provide public information on, let’s say, healthcare options in a programmatically convenient way, many others do not. So, I had to tweak my ambitions a bit and focus on something that could be provided no matter where a user might choose to click on a map.
        So, I settled on news. The news satisfied some of the needs I’ve mentioned already. It told the user about the place they were looking at and, through the API services being use, promised to work nearly everywhere on the world map.
        <br /><br />

        Here’s how it works:
        <br /><br />
      </p>
      <p style={{ fontStyle: "oblique", fontSize: "1.3em", lineHeight: "2", color: "#D2C396" }}> When a user clicks a location, the longitude and latitude is passed to a Google Maps Application Programming Interface (API). An API, in this case, allows two different applications to talk to one another. Google Maps is able to perform reverse geolocation by giving back a human readable address based on those coordinates.  While it is technically readable there is a lot of excess information to parse through. Google will “return” a long list of ways to describe the place. The list goes from very local to the name of the country at its broadest. Every place name is labeled by type such as locality, administrative region, or country. So, there are many place names associated with even one click. All those place names are added to a list. This list is fed one-by-one into a getNews function. I can then pull the news about a place through the Bing News API. I feed the Bing News API a place name, its country, and/or a keyword from the user. The Bing News API will return another list, this time of articles relevant to the place. If a place name is too obscure because no articles are found, the getNews function is fed the next larger place name. One click can result in multiple news searches until articles can be displayed to the user. While there may not be news, for example, on desert section 4392 in Saudi Arabia, there may be much more news containing the place name, Riyadh Province. That is why Global News is able to find information more often than not. It will keep iterating through broader place names until either it runs out of names or it finds at least one article to show.
      </p>
      <br /><br />
      <p style={{ fontSize: "1.3em", lineHeight: "2", color: "#D2C396" }}>
        It may not always result in a perfect correlation of place name and relevant articles. The strength of results is somewhat at the whim of the news API, what it deems to be pertinent, and the media sources it pulls from. It has certainly been a lesson in adapting to the tools at your disposal.
        <br /><br />
        This project has also encouraged me to write more organized code. Creating separate files each with their own function can help to make code more readable. Rather than a few endless files, each functionality can be housed in its own file and then imported when needed.
        <br /><br />
        All of this functionality is presented through Google’s CSS framework Material
        UI which helped me grasp the power of flexbox for organizing content.
        Their documentation along with some tutorials built upon my understanding of
        flexbox through visualizing your content in a grid system. The grid is flexible enough to
        adapt to different screen sizes so that your website is responsive and will fit nicely on mobile and desktop.

        <br /><br />
        I realize that the project looks very different at the end than at its beginning.
        However, in this iteration I believe it tackles some important issues such as news
        algorithms preselecting how you’re informed about your day and the place you live in. Through clicking on new lands, you escape the geographic and political echo chamber that geolocated, personalized news is today.
        <br /><br />

        A lot of different issues went into inspiring this project, and I
        know that the app didn’t solve them. However, I hope that it encourages
        all of us to stay curious about the world around us, to discover new places,
        and to reinforce seeking the world out on your own rather than have someone else
        judge it all for you.
      </p>
      <br /><br /><br /><br />
      <div className="divider">
        <hr className="blog-hr" />
        {/* {window.innerWidth > 100 ? <h4 stlye={{ color: "#D2C396" }}> ____________________</h4> :
          <h4> ________________________________________________ </h4>} */}
      </div>
    </div>
  )
}

export default PostTwo
