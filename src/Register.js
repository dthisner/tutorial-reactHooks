import React, { useState } from "react";

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>
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
          onChange={handleChange}
          value={form.username}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
          value={form.email}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={form.password}
        ></input>
        <button type="submit">Login</button>
      </form>
      <p>{user && JSON.stringify(user, null, 2)}</p>
    </div>
  );
}
