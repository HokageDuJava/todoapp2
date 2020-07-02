import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <NavLink className="brand-logo" to="/">
            To-Do's App
          </NavLink>

          <ul id="nav-mobile" className="right hide-on-med">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
