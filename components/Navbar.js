import React from "react";
import Link from "next/link";

// CSS styles for the navbar
const navbarStyle = {
  backgroundColor: "black",
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-around",
  margin: "20px",
};

// Define the styling for the link
const linkStyle = {
  backgroundColor: "black", // Background color for the link
  justifyContent: "center", // Center content horizontally within the link
  color: "white",
  margin: "0 60px",
  textDecoration: "none",
  fontSize: "20px",
  transition: "color 0.3s ease, opacity 0.3s ease",
  display: "inline-block",
};

// Define the Navbar functional component
const Navbar = () => (
  <nav style={navbarStyle}>
    {/* Container div with styling */}
    <div className="container">
      {/* Use Next.js Link component to create links to different pages */}
      <Link href="/" passHref>
        <div style={linkStyle}>Home</div>
      </Link>
      <Link href="/about" passHref>
        <div style={linkStyle}>About</div>
      </Link>
      <Link href="/project" passHref>
        <div style={linkStyle}>Projects</div>
      </Link>
      <Link href="/contact" passHref>
        <div style={linkStyle}>Contact</div>
      </Link>
    </div>
  </nav>
);

// Export the Navbar component as the default export
export default Navbar;
