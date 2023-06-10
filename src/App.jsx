import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Welcome from "./pages/Welcome.jsx";
import About from "./pages/About.jsx"
import Dwellings from "./pages/Dwellings.jsx"
import Dashboard from "./pages/Dashboard.jsx";
import Contact from "./components/ContactForm";
import Show from "./pages/show";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/dwellings" element={<Dwellings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dwellings/:propertyId" element={<Show />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
