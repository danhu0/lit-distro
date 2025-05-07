import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./Home";
import Article1 from "./articles/Article1";
import Article2 from "../public/Article2";
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
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article1" element={<Article1 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
