import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import { Link } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import About from "./pages/About.jsx"
import Dwellings from "./pages/Dwellings.jsx"
import Dashboard from "./pages/Dashboard.jsx";
import Contact from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/dwellings" element={<Dwellings />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;