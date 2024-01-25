import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

// Define the Home Page functional component
export default () => (
  <Layout>
    {/* Styled-jsx for the Home page */}
    <style jsx global>{`
      /* Global styles here */
      body {
        margin: 0px;
        padding: 0;
        background-color: black;
        text-align: center;
      }
      h1 {
        font-size: 35px;
        font-family: Georgia, "Times New Roman", Times, serif;
        color: pink;
        margin-top: 50px;
        text-align: center;
        margin: 30px;
      }
      h2 {
        font-size: 20px;
        text-align: center;
        color: pink;
        margin: 40px;
        font-family: Georgia, "Times New Roman", Times, serif;
      }
    `}</style>

    {/* Heading for the Home page */}
    <h1>Welcome to My Portfolio</h1>
    <br />
    {/* Image of the profile with styling */}
    <Image
      src="/pink.jpg"
      alt="My profile"
      height="300"
      width="300"
      borderRadius="10px"
    />
    {/* Subheading for the Home page */}
    <h2>
      Explore my achievements, projects, and how you can get in touch with me.
    </h2>
  </Layout>
);
