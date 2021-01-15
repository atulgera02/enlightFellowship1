import React from "react";
import { Link } from "gatsby";

function Welcome() {
  return (
    
    <section className="max-w-lg m-auto text-justify">
      
      <h1 className="font-bold tracking-tight text-2xl my-8 text-gray-900">
        Hey there! Thanks for this Enlight fellowship starter project.
      </h1>

      <p className="text-xl text-gray-700 pb-2">
        I learned a lot about react.js and data visualisation through this hands-on project. 
        I was able to successfully fetch data with the useEffect hook and access the data according to the stats I wanted.
        On top of this, I used chart.js to create a beautiful bar graph displaying the completed milestones.
        Since the order of the milestones is chronological, this accurately reflects
        the level of participation of cohort members over the course of two weeks. {" "}
      </p>

      <p className="text-xl text-gray-700 py-2">
        Here is a link to the{" "}
        <Link className="text-red-600" to="pagetwo">
          Completion Data
        </Link>{" "}
        to show you the activity of cohort members.
      </p>

      <p className="text-xl text-gray-700 py-2">
        Please reach out to Atul via Discord or email (atulgera@umich.edu) if
        you have any questions or run into any issues. I cannot wait to learn more by doing!
      </p>
    </section>
  );
}

export default Welcome;
