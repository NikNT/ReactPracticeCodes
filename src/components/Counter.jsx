import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback Value", this.state.count);
    //   }
    // );
    // console.log(this.state.count);

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  incrementFive = () => {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.handleIncrement()}> Increment </button>
        <br />
        <button onClick={() => this.incrementFive()}> Increment 5 </button>
      </div>
    );
  }
}

export default Counter;
