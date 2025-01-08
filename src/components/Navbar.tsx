import React, { useState } from "react";

const Navbar = () => {
  // State to toggle the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", color: "white" }}>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ margin: "0 15px" }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li style={{ margin: "0 15px" }}>
          <a
            href="/articles"
            style={{ color: "white", textDecoration: "none" }}
          >
            Articles
          </a>
        </li>
        {/* Quick Links Dropdown Section */}
        <li style={{ margin: "0 15px" }} onClick={toggleDropdown}>
          <span
            style={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
          >
            Quick Links
          </span>
          <div
            style={{
              display: dropdownOpen ? "block" : "none",
              position: "absolute",
              backgroundColor: "#444",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              zIndex: 1,
            }}
          >
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              <li style={{ margin: "5px 0" }}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
