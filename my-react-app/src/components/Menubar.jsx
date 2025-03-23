import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menubar.css";
import PopupLogin from "./PopupLogin"; 

const Menubar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isTrainsOpen, setIsTrainsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png"
            alt="Indian Railways"
            className="logo"
            aria-label="Indian Railways Logo"
          />
        </div>

        <div className="navbar-middle">
          <div className="navbar-center">
            <button className="login-btn" onClick={handleLoginClick}>
              LOGIN
            </button>

            <Link to="/register" className="menu-item register">
              REGISTER
            </Link>

            <span className="menu-item">AGENT LOGIN</span>
            <span className="menu-item">CONTACT US</span>
            <span className="menu-item">HELP & SUPPORT</span>
            <span className="menu-item daily-deals">DAILY DEALS</span>
            <span className="menu-item alerts">ALERTS</span>
            <span className="menu-item date">20-Mar-2025 [23:26:57]</span>
            <span className="menu-item lang">हिंदी</span>
          </div>

          <div className="navbar-bottom">
            <Link to="/" className="menu-item home">🏠</Link>
            <span className="menu-item active">IRCTC EXCLUSIVE</span>

            <div
              className="menu-item trains"
              onMouseEnter={() => setIsTrainsOpen(true)}
              onMouseLeave={() => setIsTrainsOpen(false)}
            >
              TRAINS ▼
              {isTrainsOpen && (
                <div className="dropdown-menu">
                  <Link to="/book-ticket" className="dropdown-item">Book Ticket</Link>
                  <Link to="/foreign-tourist-booking" className="dropdown-item">Foreign Tourist Booking</Link>
                  <Link to="/connecting-journey" className="dropdown-item">Connecting Journey Booking</Link>
                  <Link to="/irctc-trains" className="dropdown-item">IRCTC TRAINS</Link>

                  <div className="dropdown-sub">
                    <span className="dropdown-heading">Group Booking</span>
                    <span className="dropdown-heading">Travel Insurance Claim Process</span>
                  </div>

                  <Link to="/cancel-ticket" className="dropdown-item">Cancel Ticket</Link>
                  <Link to="/pnr-enquiry" className="dropdown-item">PNR Enquiry</Link>
                  <Link to="/train-schedule" className="dropdown-item">Train Schedule</Link>
                  
                  <Link to="/track" className="dropdown-item">Track Your Train</Link>

                  <Link to="/ftr-booking" className="dropdown-item">FTR Coach/Train Booking</Link>
                  <Link to="/pets-booking" className="dropdown-item">Dogs/Cats Booking</Link>
                </div>
              )}
            </div>

            <span className="menu-item">LOYALTY</span>
            <span className="menu-item">IRCTC eWallet</span>
            <span className="menu-item">BUSES</span>
            <span className="menu-item">FLIGHTS</span>
            <span className="menu-item">HOTELS</span>
            <span className="menu-item">HOLIDAYS</span>
            <span className="menu-item">MEALS</span>
            <span className="menu-item">PROMOTIONS</span>
            <span className="menu-item">MORE</span>
          </div>
        </div>

        <div className="navbar-right">
          <img
            src="https://www.irctc.co.in/nget/assets/images/logo.png"
            alt="IRCTC"
            className="logo-right"
            aria-label="IRCTC Logo"
          />
        </div>
      </nav>

      {isPopupOpen && <PopupLogin setIsPopupOpen={setIsPopupOpen} />}
    </>
  );
};

export default Menubar;
