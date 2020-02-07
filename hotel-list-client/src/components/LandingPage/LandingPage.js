import React, { Component } from "react";
import "./landingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
