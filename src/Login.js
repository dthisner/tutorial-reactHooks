import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username,
      password,
    };
    setUser(userData);
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        ></input>
        <button type="submit">Login</button>
      </form>
      <h3>{user && JSON.stringify(user, null, 2)}</h3>
    </div>
  );
}
