import React, { Component } from "react";
import "./rooms.css";
import "font-awesome/css/font-awesome.min.css";

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
      <div className="container">
        <div className="rooms-title">
          <h1>Rooms</h1>
        </div>

        {this.state.roomInfo.map(info => {
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

                  <div className="btn-reserve-holder">
                    <a className="btn-reserve" href="#">
                      More info
                    </a>
                  </div>
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
                  <a className="btn-reserve" href="#">
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Room;
