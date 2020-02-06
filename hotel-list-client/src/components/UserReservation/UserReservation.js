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

  render() {
    console.log(this.state.userReservationData);
    return (
      <div>
        {this.state.userReservationData.map(data => {
          return (
            <div key={data.userName} className="data">
              <h2>{data.userName}</h2>
              <h3>{data.cvc}</h3>
              <p>{data.date}</p>
              <small>{data.roomName}</small>
              <div>
                <button
                  key={data.id}
                  onClick={() => {
                    this.deleteReservation(data.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserReservation;
