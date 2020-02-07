import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import App from "./";
import "../Nav/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="navbar">
          <div className="navbar-items">
            <Router>
              <div className="logo btn-match btn-effect">
                <Link to="/">
                  <h1>
                    Z<span>I</span>
                  </h1>
                </Link>
              </div>

              <div>
                <Link to="/" className="btn-match btn-effect" href="#">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/rooms" className="btn-match btn-effect" href="#">
                  Rooms
                </Link>
              </div>
              <div>
                <Link to="/about" className="btn-match btn-effect" href="#">
                  About
                </Link>
              </div>
              <div>
                <Link to="/contact" className="btn-match btn-effect" href="#">
                  Contact
                </Link>
              </div>
              {/* <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </Switch> */}
            </Router>
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
