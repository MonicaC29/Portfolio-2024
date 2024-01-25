// Import React and the Navbar component
import React from "react";
import Navbar from "./Navbar";

const headerContainerStyle = {
  backgroundColor: "#333",
  display: "flex",
  justifyContent: "center",
};

// Define the Header functional component
const Header = () => (
  <div style={headerContainerStyle}>
    {" "}
    {/* Apply the defined linkStyle to the div */}
    <Navbar />
  </div>
);

export default Header;
