import React from "react";
import "./PopupLogin.css";

const PopupLogin = ({ onClose,setIsPopupOpen }) => {
  function closePopup() {
    setIsPopupOpen(false)
  onClose();
  }
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={closePopup}>
          ✖
        </button>

        <div className="popup-content">
          <div className="popup-left">
            <h2>LOGIN</h2>
            <input type="text" placeholder="User Name" className="input-box" />
            <input type="password" placeholder="Password" className="input-box" />
            <a href="#" className="forgot-link">FORGOT ACCOUNT DETAILS?</a>

            <img
              src="https://tpc.googlesyndication.com/simgad/11177238581559838120"
              alt="Ad"
              className="ad-image"
            />

            <div className="captcha-box">
              <span className="captcha-text">Enter Captcha</span>
              <input type="text" className="captcha-input" />
            </div>

            <button className="login-btn">SIGN IN</button>
            <button className="otp-btn">Login with OTP</button>
          </div>

          <div className="popup-right">
            <img
              src="https://tpc.googlesyndication.com/simgad/10354572529441525961"
              alt="Ad"
              className="right-ad"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;
