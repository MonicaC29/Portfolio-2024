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
        margin: 50px;
      }

      h2 {
        font-size: 20px;
        text-align: center;
        color: pink;
        margin: 80px;
        font-family: Georgia, "Times New Roman", Times, serif;
      }

      p {
        font-size: 18px;
        font-family: Georgia, "Times New Roman", Times, serif;
        color: white;
        margin: 10px;
        text-align: justify;
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

    {/* Paragraph with information about the developer */}
    <p>
      New in the field of Web Development, with a passion for online businesses,
      web design, and photography, with the goal to join a team of like-minded
      developers.
      <br />
      <br />
      I have a background in Pedagogical Sciences. In my professional journey, I
      have worked in the Montessori Nursery, primary School, and secondary
      School.
      <br />
      <br />I am a professional with experience in Administration, secretarial
      work, and tutoring, supported by a strong background in the field of
      education. Being a confident user of business IT tools, data entry, email
      management.
    </p>
  </Layout>
);
