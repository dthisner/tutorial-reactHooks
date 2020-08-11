import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(true);

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [count]);

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const incrementCount = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const toggleLight = () => {
    //setIsOn(!isOn)
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <>
      <div>Hello Functional Hooks!</div>
      <h2>Counter</h2>
      <button onClick={incrementCount}>Click Me nicley!</button>
      <div>
        <p>I was clicked: "{count}" times</p>
      </div>
      <h2>Toggle Light</h2>
      <div
        style={{
          height: "50px",
          width: "50px",
          background: isOn ? "yellow" : "grey",
        }}
        onClick={toggleLight}
      ></div>
      <h2>Mouse Position</h2>
      <p>{JSON.stringify(mousePosition, null, 2)} </p>
      <h2>Online</h2>
      <p>
        You are <strong>{status ? "online" : "false"}</strong>
      </p>
    </>
  );
};

export default App;
