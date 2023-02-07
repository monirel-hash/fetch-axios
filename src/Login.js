import React, { useState, useEffect } from "react";
import users from "./users";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate("/admin");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <>
      <header className="Login-header">Admin Portal</header>
      <div className="Login">
        <form onSubmit={handleSubmit} className="Login-form">
          <span>Username :</span>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Password :</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
      <footer className="Login-footer">Copyright © 2022 RealMunir</footer>
    </>
  );
};

export default Login;
