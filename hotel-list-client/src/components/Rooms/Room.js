import React, { Component } from "react";

class Room extends Component {
  state = {
    roomInfo: []
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
  render() {
    return (
      <div>
        <h1></h1>
        {this.state.roomInfo.map(info => {
          return (
            <div>
              <h1>{info.name} </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Room;
