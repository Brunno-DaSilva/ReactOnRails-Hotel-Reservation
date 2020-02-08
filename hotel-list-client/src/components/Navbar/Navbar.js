import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="navbar-items">
            <div className="logo">
              <NavLink to="/home">
                <h1>
                  Z<span>I</span>
                </h1>
              </NavLink>
            </div>

            <div>
              <NavLink
                to="/home"
                className="btn-match btn-effect"
                activeClassName="main-nav-active"
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/room"
                className="btn-match btn-effect"
                activeClassName="main-nav-active"
              >
                Rooms
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/userReservation"
                className="btn-match btn-effect"
                activeClassName="main-nav-active"
              >
                User Reservation
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/about"
                className="btn-match btn-effect"
                activeClassName="main-nav-active"
              >
                About
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/contact"
                className="btn-match btn-effect"
                activeClassName="main-nav-active"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
