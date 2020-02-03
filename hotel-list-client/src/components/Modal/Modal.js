import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
