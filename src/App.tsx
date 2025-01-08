import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./Home";
import Articles from "./Articles";
import QuickLinks from "./QuickLinks";
import Books from "./Books";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Use HashRouter without basename */}
      <Navbar />
      <div
        style={{
          padding: "40px",
          paddingLeft: "220px" /* Add padding to the left of the content */,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/books" element={<Books />} />
          <Route path="/quicklinks" element={<QuickLinks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
