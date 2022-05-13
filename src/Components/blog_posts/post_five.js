import React from "react";
import "./blogposts.css"

const PostFive = () => {

    return (
        <article>
            <h1 className="date"> Post 5, February 2022 </h1>
            <h2 className="blog-title"> UIs, backend apps, and client work  </h2>

            <p className="blog-body">
            The last six months have been an eventful period in my coding journey. During this period I primarily engaged in client work where I deployed an employee-facing web app and set up a scheduled CRON job that would run a program. I also improved my design skills through taking a course on Figma and creating my own designs.
            
            <br /><br />
            My client is a non-profit that needed help processing donations as they came in online and offline. My initial project tackled automating the donation process in anticipation of the holiday season – when donations are at their peak. The main pain point for the organization’s director was writing individual emails to thank each donor. These emails could not be completely copy and paste because there were a few different categories of donations which included language that changed based on the giver. These categories and changing language presented an opportunity to use programming to automate the thank you email (TY) process.
            
            <br /><br />

            This automation program was built in NodeJS and is initiated when a Google Cloud scheduled cron job hits an endpoint on a Heroku project where the program is hosted.  The program begins by querying the donation widget’s API to see if there were any donations made since the last check.  If there were, the program sorts them into  three categories: new donor, recurring, and a donation in honor of someone else. Each category corresponds to a specific TY email template. For example, a new donor receives an email saying something like “Welcome to the [org name] family,” whereas a recurring donor would get an email saying “thank you for continuing to support us…” Those who donated in honor of someone would generate two emails. One to the donor and the other to the honoree.
            <br /><br />
            
            In order to categorize the donations, a function queries the donor endpoint of the gift widget’s API to determine the donation history of that giver. If they’ve given before, then this particular donation will generate a recurring donor TY email, otherwise they will get a new donor TY email.
           
            <br /><br />
           
            The changing language is finalized through setting dynamic strings based on criteria from each donation. This dynamic language included phrasing how the email would begin if there are multiple givers (from a couple for example). The dynamic strings in honoree emails were determined by factors such as, if the honoree was different from the recipient. This situation could occur if the tribute was made in memory of someone who  had passed away (an option the widget provides). All this dynamic language is saved as properties of the donation object. 
           
            <br /><br />

            Once the donation types and language are set, the list of donations are passed to an HTML template built with Handlebars, a templating library. With Handlebar templates you pass in the dynamic information that was described above to create a filled-out TY email. I also included inline CSS styling and images from the organization. The letter is then sent via NodeMailer (a library for programmatically sending emails). 
           
            <br /><br />

            This program is now in use and runs on a daily basis. One manager wants me to build this again for another non-profit she works with. It’s an exciting prospect to have built an app that could turn into a more widely used product! 
           
            <br /><br />

            I am implementing agile development by iterating new features onto the donation processing app. Another issue the organization was facing was maintaining an accurate and single source of data. I am adding a new step to this backend app which is responsible for posting new donations to Neon Customer Relationship Management platform (CRM).
           
            <br /><br />

            In parallel with the intake of online donations, I made another project that dealt with intaking offline gifts. When donations came that weren’t through the online widget (such as checks that were mailed) it was cumbersome to manually force the Node app to create TY emails from hardcoded donation data.  This problem was resolved through a React app that is a UI version of the backend Node app. This two-page form app allowed the user to fill out the dynamic content of a templated TY message (such as donor names, amount, honor status, etc.). As they fill out the form, the changes are reflected in a visualizer of the email on the right side. There is a GIF of this app in use on the homepage. Once the forms are filled out, they can then send the email from the app. 
           
            <br /><br />
            Both of these apps are client-facing, but further information is available on the homepage and on GitHub.

            <br /><br />

            I also wanted to improve my design skills and redo my portfolio site. I took a course on Figma which went over typography, color pallets, and design patters. Using these design fundamentals, I went about picking a color scheme and creating the cards, ellipses, and backgrounds, seen throughout this site. I practiced further with Figma by creating a wireframe for the email builder React app and then implemented the design with CSS.

            <br /><br />

            Something I am looking forward to learning is addressing practical Front End situations such as lazy loading, SEO, and unit testing.

            </p>
            
            <br /> <br /> <br /> <br /> 

            <div className="divider">
                <hr className="blog-hr" />
                {/* {window.innerWidth > 100 ? <h4 stlye={{ color: "#D2C396" }}> ____________________</h4> :
            <h4> ________________________________________________ </h4>} */}
            </div>
            <br /> <br /> <br /> 

        </article>
    )
}

export default PostFive;
          