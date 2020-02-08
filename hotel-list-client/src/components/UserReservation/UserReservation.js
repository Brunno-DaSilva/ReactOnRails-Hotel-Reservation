import React, { Component } from "react";
import "./userReservation.css";

class UserReservation extends Component {
  state = {
    userReservationData: [],
    formInput: {
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

  componentDidMount() {
    this.getUserReservation();
  }

  getUserReservation() {
    fetch("http://localhost:3000/user_reservations")
      .then(res => res.json())
      .then(jsonedUserReservation =>
        this.setState({ userReservationData: jsonedUserReservation })
      )
      .catch(error => console.error(error));
  }

  deleteReservation(id, index) {
    fetch(`http://localhost:3000/user_reservations/${id}`, {
      method: "DELETE"
    }).then(data => {
      this.setState({
        userReservationData: [
          ...this.state.userReservationData.slice(0, index),
          ...this.state.userReservationData.slice(index + 1)
        ]
      });
    });
  }

  handleChange = event => {
    const updateInput = Object.assign(this.state.formInputs, {
      [event.target.id]: event.target.value
    });
    this.setState(updateInput);
  };

  render() {
    console.log(this.state.userReservationData);
    return (
      <div className="user-reservation-wrapper">
        <div className="user-reservation-title">
          <h1>Reservation Details</h1>
        </div>
        <div className="col-container">
          <div className="user-reservation-container">
            {this.state.userReservationData.map((data, i) => {
              return (
                <div key={data.userName} className="user-reservation-details">
                  <div>
                    <h2>
                      Welcome, <span>{data.userName}</span>
                    </h2>
                  </div>
                  <div className="reservation-data">
                    <div className="reservation-left-colum">
                      <h3>
                        Address: <span>{data.address}</span>
                      </h3>
                      <h3>
                        Phone: <span>{data.phoneNumber}</span>
                      </h3>
                      <h3>
                        Email:<span> {data.email}</span>
                      </h3>
                    </div>
                    <div className="reservation-right-colum">
                      <h3>
                        Check In: <span>{data.checkIn}</span>
                      </h3>
                      <h3>
                        Check Out: <span>{data.checkOut}</span>
                      </h3>
                      <h3>
                        Room Name: <span>{data.roomName}</span>
                      </h3>
                    </div>
                  </div>
                  <div className="btns-holder-style">
                    {/* <div className="btn-close-container">
                      <button
                        className="btn-close"
                        key={data.id}
                        onClick={() => {
                          this.handleChange(data.id);
                        }}
                      >
                        Update
                      </button>
                    </div> */}
                    <div className="btn-close-container">
                      <button
                        className="btn-close"
                        key={data.id}
                        onClick={() => {
                          this.deleteReservation(data.id, i);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
          <div className="reservation-img">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1581112022/imgs_starwars/imgs/travel_vtuzfu.png"
              alt="Travel Info"
            />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default UserReservation;
