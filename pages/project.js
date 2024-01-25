// Import React components and styles for the Projects page
import React from "react";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    {/* Styled-jsx for the Projects page */}
    <style jsx global>{`
      /* Global styles here */
      body {
        margin: 0px;
        padding: 0;
        background-color: black;
        text-align: center;
      }

      /* Heading styles */
      h1 {
        font-size: 35px;
        margin-bottom: 35px;
        color: pink;
        text-align: center;
        font-family: Georgia;
        background-color: black;
      }

      /* Introduction paragraph styles */
      p {
        font-size: 20px;
        color: white;
        font-family: "Georgia";
        text-align: center;
      }

      /* Project title styles */
      strong {
        color: pink;
      }

      /* List styles */
      ul {
        list-style-type: none;
        padding: 0;
        margin: 50px;
        color: white;
        text-align: left;
      }

      /* List item styles */
      li {
        font-size: 18px;
        margin-bottom: 8px;
        font-family: "Georgia";
        color: white;
      }
    `}</style>
    {/* Main content for the Projects page */}
    <div className="container">
      {/* Heading for the Projects page */}
      <h1>Projects</h1>
      <br />
      {/* Introduction paragraph for projects */}
      <p>
        Check out some of my projects below. Feel free to explore the GitHub
        repositories and deployed versions.
      </p>

      {/* List projects with links to GitHub repositories and deployed versions */}
      <ul>
        <li>
          <strong> Project 1:</strong> Travel-Experience-App{" "}
        </li>
        <li>
          <strong>Project 2:</strong> ITunes-App{" "}
        </li>
      </ul>
    </div>
  </Layout>
);
