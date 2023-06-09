import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import Welcome from "./pages/Welcome.jsx";
import About from "./pages/About.jsx"
import Dwellings from "./pages/Dwellings.jsx"
import Dashboard from "./pages/Dashboard.jsx";
import Contact from "./components/ContactForm";
import EditDwelling from './pages/EditDwelling'
import NewDwelling from "./pages/NewDwelling";
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
        <Route path="/dwellings/:propertyId/edit" element={<EditDwelling />} />
        <Route path="/dwellings/new" element={<NewDwelling />} />
      </Routes>
    </div>
  );
}

export default App;
