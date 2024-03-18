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
        margin: 50px;
        color: white;
        text-align: left;
      }

      /* List item styles */
      li {
        font-size: 18px;
        margin-bottom: 8px;
        font-family: "Georgia";
        padding: 5px;
        color: white;
      }

      /* Box styles */
      .projects-box {
        background-color: white;
        padding: 15px;
        border-radius: 10px;
        border: solid 2px grey;
        margin-top: 40px;
        margin-left: 150px;
        margin-right: 150px;
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
      {/* Box containing the project list */}
      <div className="projects-box">
        {/* List projects with links to GitHub repositories and deployed versions */}
        <ul>
          <li>
            <strong>Project 1:</strong>{" "}
            <a
              href="https://github.com/MonicaC29/TravelBlogApp.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Travel Blog App Repository
            </a>
          </li>
          <li>
            <strong>Project 2:</strong>{" "}
            <a
              href="https://github.com/MonicaC29/Hangman.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hangman Repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);
