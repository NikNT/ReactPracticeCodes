import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  handleClick = () => {
    this.setState({
      message: "Thankyou for Sub!",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleClick()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
