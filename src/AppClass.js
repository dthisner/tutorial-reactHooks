import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    mouseX: null,
    mouseY: null,
  };

  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times`;
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `You have clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.setState({
      mouseX: event.pageX,
      mouseY: event.pageY,
    });
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
        <h2>Mouse Position</h2>
        <p>X: {this.state.mouseX}</p>
        <p>Y: {this.state.mouseY}</p>
      </>
    );
  }
}

export default App;
