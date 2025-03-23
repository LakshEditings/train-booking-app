import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import PopupLogin from "./components/PopupLogin";
import Register from "./components/Register"; 
import "./App.css";
import TrainBookingApp from './components/TrainSearch';
import Track from "./components/Track";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage showBooking={showBooking} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<TrainBookingApp />} />
          <Route path="track" element={<Track/>}/>
        </Routes>

        {showPopup && (
          <PopupLogin
            onClose={() => {
              setShowPopup(false);
              setShowBooking(true);
            }}
          />
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
