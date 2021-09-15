import React from "react";
import "./blogposts.css"


const PostThree = () => {
    return (
        <div>
            <h1 className="date"> Post Three, June 2021 </h1>
            <h2 className="blog-title"> Enter the Echo Chamber </h2>
            <p className="blog-body">
                This post is about building my second web app, <em> Enter the Echo Chamber </em>. Compared to Global News, my first project, it has been more of a technical exercise, than an overtly socially oriented effort. That being said, I did try to include some visual cues to get people thinking about the dynamic of a content feed and the consumer.
                <br /><br />
                <em>Enter the Echo Chamber</em> is an attempt to get insight into a particular Twitter user’s experience on the platform. Instead of seeing what people tweet from your own feed, I thought it would be interesting to look at what a given user might see. By recreating someone’s feed, you get a peek into what kind of media and language they’re exposed to, and what communities they are a part of. Amalgamating all this information across a social network is sometimes referred to as an echo chamber. A group of people who are united in some way see that commonality reflected in their peers, and feel their opinions reinforced. Yet at some level, each echo chamber is made up of individuals who typically have a variety of hobbies, concerns, and appreciations. Identifying diversity of interesting could be a powerful thing. Does taking a closer look at a single account disrupt the hive mind imagery that social media allegedly provokes?

                <br /><br />
                Often, we see tweets in isolation and draw judgements of a person based on 280 characters. We roll our eyes and think “oh they must be part of <em>that</em> [echo chamber]”. Testing if that split-second assumption held true, I made a word cloud of the feed content to see what messaging stood out most. I was wondering if visualizing their context would provide more background into what a person is like and what is influencing them. Would their feed be a consolidated block of partisan takes, or was there a surprise possibility that Candace Owens is into sustainable bee keeping? (She isn’t 🙁)
                <br /> <br />

                I also included a random account button and hardcoded in a list of popular account names where one would be selected at random. For example, one such account is basketball all-star, LeBron James. He follows many other current and former players, musicians, and some accounts related to politics in California where he presently plays. While these results may not be surprising it does paint a fuller picture of James’ circle and what he may be aware of while scrolling through Twitter. I encourage you to try it out and see for yourself!
                <br /> <br />

                The word cloud is presented over a gif that I designed on crello.com. Crello has been a great tool for visuals and has given me foundation to move onto Figma soon, to learn more about animating web content. I thought the classical-looking statue was a great stand-in for the consumer. She gazes down as if to read the words below, and the animation indicates the act of taking it all in. While it doesn’t define the reader, the content is a part of them. The lines surrounding the word cloud suggest that the content is something dynamic, constantly changing minute to minute (if you were to refresh the search).

                <br /> <br />

                <em>Enter the Echo Chamber</em> took an already popular technology and reversed the perspective of what Twitter does to take a closer look at an individual’s sphere on the platform. I think it succeeded in painting a fuller picture of an individual Twitter user, and, after building out the above process, proved to be a great technical exercise.

                <br /> <br />

                <em>How it works:
                    <br />

                    The app was made using ReactJS, Material UI in the frontend, and a NodeJS backend. The user inputs a Twitter handle, and if valid, the backend will receive all the users that the account follows. A getTweets function will iterate over the list of followed accounts and pull each most recent Tweet through Twitter’s API. Each tweet is stored in an object containing the author name, the date created, how long ago it was published, and a URL to the owner's account. The tweets are ordered by most recent and sent to the frontend where they are displayed in specially designed cards.
                    <br /> <br />

                    As mentioned, the other feature of the app is a word cloud of the tweets. In the backend each tweet is concatenated and then split to create a large array of words. After filtering out punctuation and extremely common words, they are passed into a function that will count any repeated words. The frequency of each word is recorded and is passed along with their word to the frontend. A term’s frequency determines the font-size of each word when rendered in the word cloud. The visualization feature was a big challenge in terms of styling. Because each word cloud was so variable based on the feed, I created a sort of media query based on the added frequency of all the words. If the combined frequencies are beyond a certain threshold the styling would change to contain the words in a new format. Otherwise, there was a risk of the cloud spilling all over the page.
                    <br /> <br />

                    The project was also a good exercise in conditional rendering. It is a one-page app so without much space available I had to be ergonomic with the design. Ternary operators (a shorthand for if/then statements) were essential in defining the conditions for rendering while React hooks allowed for updating these conditions. Therefore, if certain conditions were met, then a component of the app would be made visible. This was useful in displaying the word cloud, and also the gooey loader. Once data was ready to be displayed the gooey loader would be replaced by a message displaying whose feed the user is currently viewing. The quick transition from an initial input field, to a loader, and finally to a current view message was all made possible due to conditional rendering in React.

                    <br /> <br />

                    Due to the requirements of querying Twitter’s API I had to set up a backend to ask for data and then, once received, send it to the frontend. Building this out became a deeper dive into Node JS and Express (a popular library for creating servers). Setting up the server and deploying a Node/React app to Heroku helped me start to connect the dots on how the web works. Often the courses on modern web technologies offer a lot of knowledge in the isolation of a particular topic. Here I had to tie different technologies together to create a working app, and in doing so, was able to see where they connect. Projects have proved to be the strongest resource for self-teaching. Courses provide a sandbox environment to get comfortable but in order to create a more wholistic view of the web stack, personal projects have been the most helpful so far.

                    <br /> <br />
                </em>

                After this project I’ve been considering looking at UpWork or Fiver to begin working with customers and get some client experience. It will undoubtedly be its own ecosystem to get accustomed to, but I’ll keep sharing what I learn -- come back soon to hear more!

            </p>

            <br /> <br /> <br /> <br />

            <div className="divider">
                <hr className="blog-hr" />
                {/* {window.innerWidth > 100 ? <h4 stlye={{ color: "#D2C396" }}> ____________________</h4> :
          <h4> ________________________________________________ </h4>} */}
            </div>
            <br /> <br /> <br /> <br />
        </div>


    )
}

export default PostThree;