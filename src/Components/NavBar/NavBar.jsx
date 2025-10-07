import React, { useState } from "react";
import "./NavBarStyle.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBar">
      <h2 className="logo">UzOPay</h2>

      {/* Hamburger button (only visible on mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      {/* Nav Links */}
      <div className={`navLinks ${isOpen ? "active" : ""}`}>
        <h6>Products</h6>
        <h6>Ai Banking</h6>
        <h6>Payments</h6>
        <h6>Payouts</h6>
        <h6>Contact us</h6>
      </div>

      {/* Auth Buttons */}
      <div className="authButtons">
        <button className="loginBtn">Log in</button>
        <button className="signupBtn">Sign up</button>
      </div>
    </nav>
  );
};

export default NavBar;
