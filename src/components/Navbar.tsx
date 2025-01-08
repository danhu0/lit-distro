import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav
      style={{
        backgroundColor: "white",
        color: "white",
        padding: "20px",
        paddingTop: "37px", // Add padding to the top of the nav
        height: "100vh", // Ensure the nav takes full height of the viewport
        position: "fixed", // Make it fixed on the left side
        left: 0,
        top: 0,
        width: "150px", // You can adjust the width as needed
        display: "flex",
        flexDirection: "column", // Align items vertically
        borderRight: "2px dotted grey",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column", // Align items vertically
          listStyleType: "none",
          margin: 0,
          padding: 0,
          alignItems: "flex-end",
          fontStyle: "italic",
        }}
      >
        <li style={{ margin: "5px 0" }}>
          <Link
            to="/"
            style={{
              color: location.pathname === "/" ? "black" : "grey",
              textDecoration: "none",
              fontWeight: location.pathname === "/" ? "bold" : "normal", // Bold if current path is "/"
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ margin: "5px 0" }}>
          <Link
            to="/articles"
            style={{
              color: location.pathname === "/articles" ? "black" : "grey",
              textDecoration: "none",
              fontWeight: location.pathname === "/articles" ? "bold" : "normal", // Bold if current path is "/articles"
            }}
          >
            Articles
          </Link>
        </li>
        <li style={{ margin: "5px 0" }}>
          <Link
            to="/books"
            style={{
              color: location.pathname === "/books" ? "black" : "grey",
              textDecoration: "none",
              fontWeight: location.pathname === "/books" ? "bold" : "normal", // Bold if current path is "/books"
            }}
          >
            Books/Zines
          </Link>
        </li>
        <li style={{ margin: "5px 0" }}>
          <Link
            to="/quicklinks"
            style={{
              color: location.pathname === "/quicklinks" ? "black" : "grey",
              textDecoration: "none",
              fontWeight:
                location.pathname === "/quicklinks" ? "bold" : "normal", // Bold if current path is "/quicklinks"
            }}
          >
            Quick Links
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
