// Import React components and styles for the Contact page
import React from "react";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    {/* Styled-jsx for the Contact page */}
    <style jsx global>{`
      /* Global styles here */

      body {
        margin: 0px;
        padding: 0;
        background-color: black;
        text-align: center;
        color: white;
      }

      /* Heading styles */
      h1 {
        font-size: 35px;
        margin-top: 24px;
        margin-bottom: 10px;
        color: pink;
        font-family: Georgia, "Times New Roman", Times, serif;
      }

      h3 {
        text-align: center;
        color: grey;
        margin-bottom: 20px;
        font-family: Georgia, "Times New Roman", Times, serif;
      }

      p {
        font-size: 20px;
        font-family: Georgia, "Times New Roman", Times, serif;
        color: grey;
        margin: 10px;
        text-align: justify;
      }

      /* Email border box styles */
      .email-border-box {
        margin: 40px;
        background-color: pink;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
      }

      /* Large text styles */
      .large-text {
        font-size: 20px;
        padding: 10px;
        text-align: center;
      }

      /* Medium text styles */
      .medium-text {
        font-size: 16px;
      }
      /* Contact form styles */
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      input-box {
        margin-bottom: 20px;
      }

      label {
        display: block;
        margin-bottom: 5px;
        color: white;
        font-family: Georgia, "Times New Roman", Times, serif;
        text-align: center;
      }

      input,
      textarea {
        width: 100%;
        padding: 2px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 10px;
        background-color: white;
        align-items: center;
      }

      input[type="submit"] {
        background-color: grey;
        color: black;
        cursor: pointer;
      }

      .form-container {
        margin: 50px;
    max-width: 600px;
    padding: 30px;
   border: 1px solid #ccc;
    border-radius: 8px;
    background-color: pink;
  } 
      }
    `}</style>
    {/* Heading for the Contact Me page */}
    <h1>Contact Me</h1>
    <br />
    {/* Contact information paragraph */}
    <p>
      I'd love to connect with you! You can reach me via email or phone. Feel
      free to drop me a message.
    </p>
    <main>
      {/* Container for email and phone */}
      <div className="email-border-box">
        {/* Email address */}
        <address className="large-text">
          Email:{""}
          <a href="mailto:tutor.monica.carta.2012@gmail.com">
            tutor.monica.carta.2012@gmail.com
          </a>
        </address>
        {/* Phone number */}
        <p className="large-text">Phone:07757755121</p>
      </div>
      <br />
      <br />
      <br />
      {/* Heading for the contact form */}
      <h3 className="medium-text">Use the form below to send a message:</h3>
      {/* Container for the form */}
      <div className="form-container">
        {/*--Contact form */}
        <form id="messageForm">
          <br />
          {/* Input box for name */}
          <div className="input-box">
            <label for="name"> Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              style={{ width: "200px" }}
              required
            />
          </div>
          <br />
          {/* Input box for message */}
          <div className="input-box">
            <label htmlFor="message"> Your message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter message here..."
              rows="8"
              style={{ width: "400px" }}
              required
            ></textarea>
          </div>
          <br />
          {/* Submit button */}
          <div className="input-box">
            <input name="submit" type="submit" value="submit" />
          </div>
        </form>
      </div>
    </main>
  </Layout>
);
