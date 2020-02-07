import React from "react";
import Room from "./components/Rooms/Room";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HotelServices from "./components/HotelServices/HotelServices";
import UserReservation from "./components/UserReservation/UserReservation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HotelServices />
      <UserReservation />
    </div>
  );
}

export default App;
