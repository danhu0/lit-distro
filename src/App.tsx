import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Articles from "./Articles";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
