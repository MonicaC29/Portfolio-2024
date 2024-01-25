import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// Define the styling for the layout
const layoutStyle = {
  margin: 50,
  padding: 20,
  border: "1px solid #DDD",
  display: "flex",
  flexDirection: "column",
  minHeight: "80vh",
  alignItems: "center",
  background: "black",
};

// Define the Layout functional component
const Layout = (props) => (
  <div>
    {/* Render the Header component */}
    <Header>
      {/* Link to the Bootstrap stylesheet */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Header>

    {/* Main content area with layout styles */}
    <div style={layoutStyle}>
      {/* Render the Footer component */}

      {/* Render the child components passed to the Layout component */}
      {props.children}
    </div>
    <Footer />
  </div>
);

// Export the Layout component as the default export
export default Layout;
