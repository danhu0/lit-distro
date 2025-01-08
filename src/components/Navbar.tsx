import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", color: "white" }}>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <li style={{ margin: "0 15px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/articles"
            style={{ color: "white", textDecoration: "none" }}
          >
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
