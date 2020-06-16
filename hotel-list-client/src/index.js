import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Room from "./components/Rooms/Room";
import UserReservation from "./components/UserReservation/UserReservation";
import AboutThisApp from "./components/About/AboutThisApp";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

class HotelRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar />
        <Route path="/home" component={App} />
        <Route path="/room" component={Room} />
        <Route path="/userReservation" component={UserReservation} />
        <Route path="/aboutThisApp" component={AboutThisApp} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </HashRouter>
    );
  }
}

ReactDOM.render(<HotelRouter />, document.getElementById("root"));
