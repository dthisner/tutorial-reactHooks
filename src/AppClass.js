import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isOn: false,
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count++,
    }));
  };

  toggleLight = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };

  render() {
    return (
      <>
        <h1>Hello Class Hooks!</h1>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>Click Me nicley!</button>
        <div>
          <p>I was clicked: "{this.state.count}" times</p>
        </div>
        <h2>Toggle Light</h2>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: this.state.isOn ? "yellow" : "grey",
          }}
          onClick={this.toggleLight}
        ></div>
      </>
    );
  }
}

export default App;
