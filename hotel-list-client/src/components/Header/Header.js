import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navbar">
          <div className="navbar-items">
            <div className="logo">
              <NavLink to="/">
                <h1>
                  Z<span>I</span>
                </h1>
              </NavLink>
            </div>

            <div>
              <NavLink to="/" className="btn-match btn-effect">
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/room" className="btn-match btn-effect">
                Rooms
              </NavLink>
            </div>
            <div>
              <NavLink to="/about" className="btn-match btn-effect">
                About
              </NavLink>
            </div>
            <div>
              <NavLink to="/contact" className="btn-match btn-effect">
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        <div className="landing-page-container">
          <div className="overlay"></div>
          <div className="landing-page-info">
            <div className="title">
              <h1>
                Z<span>I</span>
              </h1>
              <h3>ZILNAI</h3>
              <p>Luxury Suites</p>
            </div>
            <div className="btn-match btn-effect bold">Reserve</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
