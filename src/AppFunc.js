import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  var incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Hello Functional Hooks!</div>
      <button onClick={incrementCount}>Click Me nicley!</button>
      <div>
        <p>I was clicked: "{count}" times</p>
      </div>
    </div>
  );
};

export default App;
