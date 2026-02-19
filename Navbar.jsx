import React from "react";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">ShopEZ</h2>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="login-btn">Login</button>
        <button className="cart-btn">Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
