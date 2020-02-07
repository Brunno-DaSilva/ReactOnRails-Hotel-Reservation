import React, { Component } from "react";
import "./rooms.css";
import "font-awesome/css/font-awesome.min.css";
import Modal from "../Modal/Modal";
import Reservation from "../Reservation/Reservation";

class RoomCards extends Component {
  state = {
    roomInfo: [],
    show: false,
    currentModal: "",

    showReservation: false,
    userReservation: [],
    currentReservation: "",

    formInputs: {
      userName: "",
      phoneNumber: "",
      email: "",
      address: "",
      card: "",
      cvc: "",
      checkIn: "",
      checkOut: "",
      roomName: ""
    }
  };

  // Display and Close Room information
  onClose = e => {
    this.setState({
      show: false
    });
  };

  showModal = data => {
    this.setState({
      show: true,
      currentModal: data.id
    });
  };

  // Display and Close Reservation form

  showReservation = data => {
    this.setState({
      showReservation: true,
      currentReservation: data.id
    });
  };

  onCloseReservation = data => {
    this.setState({
      showReservation: true,
      currentReservation: data.id
    });
  };
  //Form information

  handleChange = event => {
    const updateInput = Object.assign(this.state.formInputs, {
      [event.target.id]: event.target.value
    });
    this.setState(updateInput);
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000/user_reservations", {
      body: JSON.stringify(this.state.formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdUserReservation => {
        return createdUserReservation.json();
      })
      .then(jsonedUserReservation => {
        this.setState({
          formInputs: {
            userName: "",
            phoneNumber: "",
            email: "",
            address: "",
            card: "",
            cvc: "",
            checkIn: "",
            checkOut: "",
            roomName: ""
          },
          userReservation: [
            jsonedUserReservation,
            ...this.state.userReservation
          ]
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <div className="rooms-title">
          <h1>Rooms</h1>
        </div>

        {this.props.content.map(info => {
          return (
            <div className="rooms-card">
              <div className="left-col">
                <div className="featured-position">
                  {info.featured ? (
                    <div className="lower-price">Featured</div>
                  ) : (
                    <div></div>
                  )}
                  <img src="https://source.unsplash.com/collection/3448800/" />
                </div>
              </div>
              <div className="center-col">
                <div>
                  <h2>{info.name}</h2>
                </div>
                <div className="room-additional-info">
                  <div>
                    <p>
                      <i className="fa fa-users"></i>
                      {info.capacity}
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa fa-bed"></i>
                      {info.roomType}
                    </p>
                  </div>
                  <div>
                    <p>
                      <i class="fa fa-expand"></i>
                      {info.size}m²
                    </p>
                  </div>

                  <div className="btn-more-info-holder">
                    <button
                      className="btn-more-info"
                      onClick={e => {
                        this.showModal(info);
                      }}
                    >
                      More Info
                    </button>
                  </div>

                  <Modal
                    onClose={this.showModal}
                    show={
                      this.state.show && this.state.currentModal === info.id
                    }
                  >
                    <div className="modal">
                      <div className="modal-container">
                        <div>
                          <h3>{info.name}</h3>
                        </div>
                        <div className="modal-header">
                          <div className="featured-position">
                            {info.featured ? (
                              <div className="lower-price">Featured</div>
                            ) : (
                              <div></div>
                            )}
                            <img src="https://source.unsplash.com/collection/3448800/" />
                          </div>
                        </div>
                        <div className="modal-body">
                          <div className="top-info">
                            <div>
                              <h4>Room Description:</h4>
                              <p>{info.description}</p>
                            </div>
                          </div>

                          <div className="extra-info">
                            <div>
                              <p>{info.extras1}</p>
                            </div>
                            <div>
                              <p>{info.extras2}</p>
                            </div>
                            <div>
                              <p>{info.extras3}</p>
                            </div>
                            <div>
                              <p>{info.extras4}</p>
                            </div>
                            <div>
                              <p>{info.extras5}</p>
                            </div>
                            <div>
                              <p>{info.extras6}</p>
                            </div>
                          </div>
                          <div className="bottom-info">
                            <div>
                              <p>
                                <i className="fa fa-users"></i>
                                {info.capacity}
                              </p>
                            </div>
                            <div>
                              <p>
                                <i className="fa fa-bed"></i>
                                {info.roomType}
                              </p>
                            </div>
                            <div>
                              <p>
                                <i class="fa fa-expand"></i>
                                {info.size}m²
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <div className="btn-close-container">
                            <button
                              className="btn-close"
                              onClick={this.onClose}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
              <div className="right-col">
                <div className="price-title">
                  <h3 className="price-bold">${info.price}</h3>
                  <p>per night</p>
                </div>
                <div>
                  <div>
                    {info.breakfast ? (
                      <p className="allowed">
                        <i class="fa fa-cutlery"></i> Breakfast
                      </p>
                    ) : (
                      <p className="not-allowed">
                        <i class="fa fa-ban"></i> Breakfast
                      </p>
                    )}
                  </div>
                  <div>
                    {info.pets ? (
                      <p className="allowed">
                        <i class="fa fa-paw"></i> Pets allowed
                      </p>
                    ) : (
                      <p className="not-allowed">
                        <i class="fa fa-ban" aria-hidden="true"></i> No P e t s
                      </p>
                    )}
                  </div>
                </div>
                <div className="btn-reserve-holder">
                  <button
                    className="btn-more-info"
                    onClick={e => {
                      this.showReservation(info);
                    }}
                  >
                    Reserve
                  </button>
                </div>

                <Reservation
                  onCloseReservation={this.showReservation}
                  showReservation={
                    this.state.showReservation &&
                    this.state.currentReservation === info.id
                  }
                >
                  <div className="modal">
                    <div className="modal-container">
                      <div className="title-form">
                        <h3>Reservation</h3>
                      </div>
                      <div className="modal-header">
                        <div className="featured-position">
                          {info.featured ? (
                            <div className="lower-price">Featured</div>
                          ) : (
                            <div></div>
                          )}
                          <img src="https://source.unsplash.com/collection/3448800/" />
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="top-info">
                          <div>
                            <form onSubmit={this.handleSubmit}>
                              <label htmlFor="userName">Full Name</label>
                              <input
                                type="text"
                                id="userName"
                                value={this.state.formInputs.userName}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="phoneNumber">Phone Number</label>
                              <input
                                type="text"
                                id="phoneNumber"
                                value={this.state.formInputs.phoneNumber}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="email">Email</label>
                              <input
                                type="text"
                                id="email"
                                value={this.state.formInputs.email}
                                onChange={this.handleChange}
                              />

                              <label htmlFor="address">Home Address</label>
                              <input
                                type="text"
                                id="address"
                                value={this.state.formInputs.address}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="card">Card Number</label>
                              <input
                                type="text"
                                id="card"
                                value={this.state.formInputs.card}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="cvc">CVC</label>
                              <input
                                type="text"
                                id="cvc"
                                value={this.state.formInputs.cvc}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="checkIn">CheckIn</label>
                              <input
                                type="text"
                                id="checkIn"
                                value={this.state.formInputs.checkIn}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="checkOut">checkOut</label>
                              <input
                                type="text"
                                id="checkOut"
                                value={this.state.formInputs.checkOut}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="roomName">roomName</label>
                              <input
                                type="text"
                                id="roomName"
                                value={this.state.formInputs.roomName}
                                onChange={this.handleChange}
                              />
                              <input type="submit" className="submit" />
                            </form>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="modal-footer">
                        <div className="btn-close-container">
                          <button
                            className="btn-close"
                            onClick={this.onCloseReservation}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reservation>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RoomCards;
