import React from "react";
import "./Register.css";
import Menubar from "./Menubar";

const Register = () => {
  return (
    <div className="register-container">
      <div className="menubar-container">
        <Menubar />
      </div>

      <div className="containers">
        <div className="left">
          <div className="register-form">
            <h2 className="register-title">Create Your IRCTC Account</h2>
            <p className="sign-in">SIGN IN</p>

            <div className="instructions-box">
              <p>
                1. Please use valid E-Mail ID, Mobile number and correct
                personal details in registration form. This may be required for
                verification purpose.
              </p>
              <p>
                2. Garbage / Junk values in profile may lead to deactivation of
                IRCTC account.
              </p>
            </div>

            <form>
              <div className="input-group">
                <input type="text" required placeholder="User Name" />
              </div>

              <div className="input-group">
                <input type="text" required placeholder="Full Name" />
              </div>

              <div className="input-group">
                <input type="password" required placeholder="Password" />
              </div>

              <div className="input-group">
                <input type="password" required placeholder="Confirm Password" />
              </div>

              <div className="input-group">
                <input type="email" required placeholder="Email" />
              </div>

              <div className="input-group">
                <input type="tel" required placeholder="Mobile" />
                <p className="mobile-instruction">
                  Please submit Mobile Number without ISD Code
                </p>
              </div>

              <div className="captcha-container">
                <div className="captcha-box">
                  <span>trDT</span>
                  <button type="button">🔄</button>
                </div>
                <input type="text" placeholder="Enter Captcha" required />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="right">
          <div className="register-image">
            <img
              src="https://contents.irctc.co.in/en/GPT_NWEB_REGISTRATION_RIGHT2.jpeg"
              alt="IRCTC Registration Info"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
