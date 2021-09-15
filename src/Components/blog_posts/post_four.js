import React from "react";
import "./blogposts.css"

const PostFour = () => {
    return (
        <div>
            <h1 className="date"> Post Four, August 2021 </h1>
            <h2 className="blog-title"> City Building, Certifications, and CRUDs </h2>

            <p className="blog-body" >
                After deploying the Echo Chamber app, I wanted to delve into databases and data visualization.
                That hope was delivered in Built NYC, a visualizer for tracking building development in New York
                from the past 30 years. Making this app required exploring some new areas: producing organized
                server-side code and interacting with a database.
                <br /><br />

                The database I used was from NYC Open Data, which is a source of free public data published by
                the city. It is a great resource for aggregated information on aspects of city life that are
                familiar to the lived experience of New Yorkers (such as the subway) but are rarely presented in
                an aggregated, interactive, and visual way. For example, building development is a major part of living in New York for the past 25 years and for perhaps always.  Construction and demolition are constants, but perception of its scale is limited to a walk around the neighborhood. In other words, we can only see a fraction of whole situation from eye-level. How can an app fill in the blanks where we know something is happening, but the degree of urban scale remains a mystery? Here is where Built NYC comes in to flesh out the picture of construction in the city.
                <br /><br />

                Built NYC allows the user to pick a year, borough, and construction type (demolition,
                construction, alteration) and see location specific information with one click.
                This data visualizer shows the magnitude of development in New York over the last
                few decades. Clicking on a pin shows the building’s address, contracting company, and owner. Graphs further illustrate the breakdown of construction in a given year as well as over time. Interactive maps can be such a rich experience for the user because whatever information the map provides is immediately contextualized by the geography around it. Building this tool provided some valuable technical lessons as well.
                <br /><br />

                Querying the New York Open Database was an interesting challenge. The queries were written using SoQL
                (Socrata Query Language) which is supposed to be similar to Sequel’s query language (SQL). I had to grapple
                with how to design the API query to provide needed information in an efficient way. I discovered that it was more efficient to process a large amount of data received from one query than it was to make repeated iterating queries for smaller chunks. The latter can really slow down performance, and the former takes advantage of the power of the Node JS.
                <br /><br />

                During this process it has been difficult answer the question just because it works, does that mean what
                I’m writing is good code? The uncertainty guided me while writing the backend for this project.
                I wanted to keep the file sizes short to encourage functions that are clear, siloed from each other, and only summoned when needed. Instead of making a bunch of function calls in the first server file index.js, I delegated the hard work to another function processRequest to retrieve data for the user. ProcessRequest would call one set of functions that would query the database and store their responses. Another set would then format these responses to be sent to the front end. It made for a more readable and maintainable coding experience.
                <br /><br />

                The quest to understand where you fall in the spectrum of writing good code extends beyond
                architectural efforts in an individual project. There are many ways to get encouragement,
                validation, and constructive criticism. One such avenue is through certificates. While preparing
                for a technical interview I discovered hackerrank.com (not sponsored but plz email me!) which offers certificates for many languages and frameworks. They involve timed coding problems that assess your familiarity with a particular skill. The timed environment and sandbox IDE felt like a helpful simulation of a real technical interview. I was able to pass the basic JavaScript and React tests and received a certificate in both. It was a really rewarding and validating experience to get some more formal accreditation for these months of research and learning.
                <br /><br />

                The one thing that is missing from this dynamic is feedback on your code to see what could be improved. I’m not arguing that Hackerrank should offer that kind of analysis
                (perhaps they do in other situations). However, that two-way conversation is more possible with a mentor of group of peers. While I haven’t gotten an opportunity for tailored suggestions when it
                comes to writing I have gotten some broader guidance. A friend who cofounded his own ed-tech startup recommended that making a CRUD app would help bring my app-building to the next level. CRUD stands for create, read, update, and delete. This kind of app usually requires user authentication and works with databases to maintain user information. I’ve begun already with a Firebase app and hope to present it soon. There’s definably a lot more user interaction to anticipate and I’ll keep posting on its progress.
            </p>

            <br /><br />

            <div className="divider">
                <hr className="blog-hr" />
                {/* {window.innerWidth > 100 ? <h4 stlye={{ color: "#D2C396" }}> ____________________</h4> :
          <h4> ________________________________________________ </h4>} */}
            </div>
            <br /><br />
            <br />

        </div >
    )
}

export default PostFour;