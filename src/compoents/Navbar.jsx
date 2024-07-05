import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../pages/Icons";
import logo from "../assets/frontCarousel/1.jpg";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <NavLink exact to="/" className="nav-logo">
          <span className="icon">
            <img src={logo} alt="logo"  /> 
          </span>
        </NavLink>

        {/* Navigation links */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/calorie-tracker"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Calorie Tracker
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/signup"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Signup
            </NavLink>
          </li>
        </ul>

        {/* Hamburger menu icon */}
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <HamburgetMenuOpen />
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuClose />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
