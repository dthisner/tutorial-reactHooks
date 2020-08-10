import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count++,
    });
  };

  render() {
    return (
      <div>
        <div>Hello Hooks!</div>
        <button onClick={this.incrementCount}>Click Me nicley!</button>
        <div>
          <p>I was clicked: "{this.state.count}" times</p>
        </div>
      </div>
    );
  }
}

export default App;
