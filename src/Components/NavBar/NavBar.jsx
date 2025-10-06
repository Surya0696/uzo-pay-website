import React from "react";
import "./NavBarStyle.css"; 

const NavBar = () => {
  return (
    <nav className="navBar">
      <h2 className="logo">UzOPay</h2>

      <div className="navLinks">
        <h4>Products</h4>
        <h4>Ai Banking</h4>
        <h4>Payments</h4>
        <h4>Payouts</h4>
        <h4>Contact us</h4>
      </div>

      <div className="authButtons">
        <button className="loginBtn">Log in</button>
        <button className="signupBtn">Sign up</button>
      </div>
    </nav>
  );
};

export default NavBar;
