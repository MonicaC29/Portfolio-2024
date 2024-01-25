import React from "react";

const footerStyle = {
  padding: "2px",
  color: "white",
  position: "fixed",
  bottom: "0px",
  width: "100%",
  justifyContent: "center",
  backgroundColor: "#333",
  textAlign: "center",
  fontSize: "18",
};

// Define the Footer functional component
const Footer = () => (
  // Footer element containing copyright information
  <div style={footerStyle}>
    {/* Paragraph with copyright information */}
    <h4>&copy; 2024 Monica Carta. All rights reserved.</h4>
  </div>
);

// Export the Footer component as the default export
export default Footer;
