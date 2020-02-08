import React, { Component } from "react";
import "./contact/contact.css";

export default class Contact extends Component {
  render() {
    return (
      <section id="contactme">
        <div className="container-contact">
          <div className="contact-title">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-holder">
            <div>
              <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1581115848/imgs_starwars/imgs/undraw_contact_us_15o2_n0xtkk.png" />
            </div>

            <div className="wrapper-contact">
              <div className="contact">
                <div className="alert">Your Message has been sent</div>
                <form id="contactForm">
                  <p>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Full Name"
                      id="form-name"
                      required=""
                    />
                    <span className="error">
                      <i className="fa fa-circle"></i>
                    </span>
                  </p>
                  <br />
                  <p>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your E-mail Address"
                      id="form-email"
                      required=""
                    />
                    <span className="error">
                      <i className="fa fa-circle"></i>
                    </span>
                  </p>
                  <br />
                  <p>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      id="form-subject"
                    />
                  </p>
                  <p>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="4"
                      id="form-message"
                      required=""
                    ></textarea>
                    <span className="error">
                      <i className="fas fa-circle"></i>
                    </span>
                  </p>
                  <br />
                  <p id="btn-form">
                    <input type="submit" name="submit" />
                  </p>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
