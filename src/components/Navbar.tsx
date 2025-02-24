import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        backgroundColor: "white",
        color: "white",
        padding: "20px",
        paddingTop: "37px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        width: "150px",
        display: "flex",
        flexDirection: "column",
        borderRight: "2px dotted grey",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
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
              fontWeight: location.pathname === "/" ? "bold" : "normal",
            }}
          >
            what's this?
          </Link>
        </li>
        <li style={{ margin: "5px 0" }}>
          <Link
            to="/article1"
            style={{
              color: location.pathname === "/article1" ? "black" : "grey",
              textDecoration: "none",
              fontWeight: location.pathname === "/article1" ? "bold" : "normal",
            }}
          >
            02/23/2025
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
