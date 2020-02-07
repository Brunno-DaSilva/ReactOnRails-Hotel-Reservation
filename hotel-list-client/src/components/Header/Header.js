import React, { Component } from "react";
import HotelServices from "../HotelServices/HotelServices";
import UserReservation from "../UserReservation/UserReservation";
import Navbar from "../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />

          <LandingPage />
        </header>
        <HotelServices />
        <UserReservation />
      </div>
    );
  }
}

export default Header;
