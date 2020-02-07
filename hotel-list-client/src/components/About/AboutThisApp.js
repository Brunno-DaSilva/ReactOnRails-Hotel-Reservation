import React, { Component } from "react";
import "./aboutThisApp.css";

export default class AboutThisApp extends Component {
  render() {
    return (
      <section id="aboutMe" classNameName="container-about" tabindex="-1">
        <div className="overlay-about-this"></div>
        <div className="title-about-this">
          <h1>
            About
            <span className="span-one">
              <span className="span-two">This App</span>
            </span>
          </h1>
        </div>
        <div className="intro-container-about">
          <div className="left-content-this">
            <div className="left-container-title-this">
              <h3>
                React on Rails
                <br />
                Hotel Reservation System
              </h3>
            </div>
            <div className="left-container-text">
              <p>
                Full-stack Application featuring Ruby, Rails, Postgress, and
                React.
              </p>
              <p>
                Fully functional and interactive, this web application allows
                users to see a list of hotel's rooms, inspect information and
                reserve the room. Additionally, the user can see, update, and
                delete reservations.
              </p>
            </div>
          </div>
          <div className="right-content">
            <img
              id="img2"
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1581091889/imgs_starwars/imgs/Zilnai-logo2_xazqwf.png"
              alt="Zilnai Reservations"
            />
          </div>
        </div>
        <div className="sub-title-this">
          <h1>
            Development
            <span className="span-one-this">
              <span className="span-two-this">Phase</span>
            </span>
          </h1>
        </div>
        <div className="text-area">
          <div className="text-one">
            <p className="icon-holder">
              <i className="fa fa-heart"></i>
            </p>
            <p className="text-holder">
              I am particularly passionate about my family, well designed, clean
              coded-front-to-back-web applications, to serve poor communities in
              my spare time, and to drink coffee
              <i className="fa fa-coffee"></i>
            </p>
          </div>

          <div className="text-two">
            <p className="text-holder">
              A perfectly accomplished day for me is when I spend some time with
              my son and wife, I learn something new, and when I debug/develop
              something awesome, all of this accompanied with a nice warm cup of
              coffee <i className="fa fa-mug-hot"></i>
            </p>
            <p className="icon-holder">
              <i className="fa fa-check-circle"></i>
            </p>
          </div>
          <div className="text-three">
            <p className="icon-holder">
              <i className="fa fa-handshake-o"></i>
            </p>
            <p className="text-holder">
              My previous experiences as a full-time missionary and 6+ years in
              IT application support, not only reflects my passions for
              technology and care for people but taught me how to approach every
              situation and individual as unique and how to develop a
              well-organized strategy to problem solve.
            </p>
          </div>

          <div className="text-four">
            <p className="icon-holder">
              <i className="fa fa-laptop"></i>
            </p>
            <p className="text-holder">
              I am always searching for self-improvement. So, I completed a
              <span>
                24-week, 500-hour full-stack Software Engeneering bootcamp at
                General Assembly
              </span>
              . It was conducted in a remote setting, providing experience with
              the latest front- and back-end programming languages, tools, and
              methodologies.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
