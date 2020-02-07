import React, { Component } from "react";
import "./rooms.css";
import "font-awesome/css/font-awesome.min.css";
import RoomsCard from "./RoomsCard";
import UserReservation from "../UserReservation/UserReservation";

class Room extends Component {
  state = {
    roomInfo: [],
    show: false,
    currentModal: "",

    showReservation: false,
    userReservation: [],
    currentReservation: "",

    formInput: {
      userName: "",
      phoneNumber: "",
      email: "",
      address: "",
      card: "",
      cvc: "",
      date: "",
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

  componentDidMount() {
    this.getRoomInfo();
  }

  getRoomInfo() {
    fetch("http://localhost:3000/hotel_rooms")
      .then(res => res.json())
      .then(jsonedRoomInfo => this.setState({ roomInfo: jsonedRoomInfo }))
      .catch(error => console.error(error));
  }

  //Form information

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
          userReservation: [jsonedUserReservation, ...this.state.notices]
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <RoomsCard content={this.state.roomInfo} />
      </div>
    );
  }
}

export default Room;
