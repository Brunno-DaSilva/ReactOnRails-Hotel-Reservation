import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Modal extends Component {
  state = {
    roomInfo: []
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return <div>{this.props.children}</div>;
  }
}

export default Modal;
