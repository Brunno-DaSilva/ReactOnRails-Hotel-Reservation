import React, { Component } from "react";
import "../Modal/modal.css";

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <div className="main-modal-style">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
