// Import the main App component and global styles for the About page
import Layout from "../components/Layout";
import Image from "next/image";

// Define the AboutPage functional component
export default () => (
  <Layout>
    {/* Styled-jsx for the about page*/}
    <style jsx global>{`
      /* Global styles */
      body {
        margin: 0;
        padding: 0;
        background-color: black;
        text-align: center;
      }
      h1 {
        font-size: 35px;
        font-family: Georgia, "Times New Roman", Times, serif;
        color: pink;
        margin-top: 30px;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 10px;
      }

      h2 {
        margin-top: 40px;
        font-size: 20px;
        text-align: center;
        color: pink;
        font-family: Georgia, "Times New Roman", Times, serif;
      }

      p {
        font-size: 18px;
        font-family: Georgia, "Times New Roman", Times, serif;
        color: white;
        text-align: justify;
      }

      .p-container {
        padding: 35px;
        border-radius: 10px;
        border: solid 2px grey;
        margin-top: 30px;
        margin-left: 150px;
        margin-right: 150px;
        margin-bottom: 30px;
      }

      li {
        color: white;
      }
    `}</style>
    {/* Heading for the About Me page */}
    <h1>About Me</h1>

    {/* Image of the profile with styling */}
    <Image
      src="/monica.jpg"
      height="300"
      border="4px solid #bf8fbf"
      width="300"
    />
    <br />
    {/* Subheading for the About Me page */}
    <h2>
      Welcome to my developer portfolio!<br></br>
      I'm passionate about web design and content creations.
    </h2>
    {/* Container for the About Me content */}
    <div className="p-container">
      {/* Paragraph with information about the developer */}
      <ul>
        <li>
          <p>
            New in the field of Web Development, with a passion for online
            businesses, web design, and photography, with the goal to join a
            team of like-minded developers.
          </p>
        </li>
        <br />
        <br />
        <li>
          <p>
            I have a background in Pedagogical Sciences. In my professional
            journey, I have worked in the Montessori Nursery, primary School,
            and secondary School.
          </p>
        </li>
        <br />
        <br />
        <li>
          <p>
            I am a professional with experience in Administration, secretarial
            work, and tutoring, supported by a strong background in the field of
            education. Being a confident user of business IT tools, data entry,
            email management.
          </p>
        </li>
      </ul>
    </div>
  </Layout>
);
