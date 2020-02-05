import React, { Component } from "react";

class Reservation extends Component {
  render() {
    if (!this.props.showReservation) {
      return null;
    }

    return (
      <div>
        <div className="main-modal-style">{this.props.children}</div>
      </div>
    );
  }
}

export default Reservation;
