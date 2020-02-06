import React, { Component } from "react";

class UserReservation extends Component {
  state = {
    userReservationData: []
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

  render() {
    console.log(this.state.userReservationData);
    return (
      <div>
        {this.state.userReservationData.map(data => {
          return (
            <div key={data.userName} className="data">
              <h3>{data.cvc}</h3>
              <p>{data.date}</p>
              <small>{data.roomName}</small>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserReservation;
