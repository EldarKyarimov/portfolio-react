import React from "react";
import "./styles/app.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Projects from "./pages/projects/projects";
import Project from "./pages/project";
import Contacts from "./pages/contacts";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
