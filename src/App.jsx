import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Welcome from "./pages/Welcome.jsx";
import About from "./pages/About.jsx"
import Dwellings from "./pages/Dwellings.jsx"
import Dashboard from "./pages/Dashboard.jsx";
import Contact from "./components/ContactForm";
// import Show from "./pages/Show.jsx";
import Navbar from "./components/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import BookingDiv from "./components/BookingDiv";
import Luxe from "./pages/Luxe.jsx";
// import ShowLuxe from "./pages/ShowLuxe.jsx";
import Dwelling from "./components/Dwelling";
import Footer from "./components/Footer";
import LuxeDwelling from "./components/LuxeDwelling";
// import MyBookings from "./pages/MyBookings";
const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId0 = import.meta.env.VITE_AUTH0_CLIENT_ID;
// const clientSecret0 = import.meta.env.VITE_AUTH0_CLIENT_SECRET;

function App() {
  const location = useLocation();

  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={clientId0}
      redirectUri={`${window.location.origin}/dwellings`}
    >
      <div className="App">
        {location.pathname !== "/" && location.pathname !== "/test" && (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/luxe" element={<Luxe />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/dwellings" element={<Dwellings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<BookingDiv />} />
          <Route path="/dwellings/:propertyId" element={<Dwelling />} />
          <Route
            path="/dwellings/luxe/:propertyId"
            element={<LuxeDwelling />}
          />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/booking" /> */}
          {/* <Route path="/my-bookings/:bookingId" component={MyBookings} /> */}
        </Routes>
        <Footer />
      </div>
    </Auth0Provider>
  );
}

export default App;
