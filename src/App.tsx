import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Articles from "./Articles";
import QuickLinks from "./QuickLinks";
import Books from "./Books";

const App = () => {
  return (
    <Router basename="/lit-distro">
      {" "}
      {/* Set basename to the subdirectory */}
      <Navbar />
      <div
        style={{
          padding: "40px",
          paddingLeft: "220px" /* Add padding to the left of the content */,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use "/" for root */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/books" element={<Books />} />
          <Route path="/quicklinks" element={<QuickLinks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
