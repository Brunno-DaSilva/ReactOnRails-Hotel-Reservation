import React, { Component } from "react";
import "../Nav/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="navbar">
          <div className="navbar-items">
            <div className="logo btn-match btn-effect">
              <h1>
                Z<span>I</span>
              </h1>
            </div>
            <div>
              <a className="btn-match btn-effect" href="#">
                Home
              </a>
            </div>
            <div>
              <a className="btn-match btn-effect" href="#">
                Rooms
              </a>
            </div>
            <div>
              <a className="btn-match btn-effect" href="#">
                About
              </a>
            </div>
            <div>
              <a className="btn-match btn-effect" href="#">
                Contact
              </a>
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

export default Navbar;
