import { useState } from "react";
import {  register } from "../../redux/ApiCalls";
import {   useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "./Register.scss"

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {  error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register({ username, password });

  };
  return (
    <div className="Login">
      <div className="wrapper">
        <h1 className="title">SIGN UP</h1>
        <form className="loginForm">
          <input className="loginInput"
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input className="loginInput"
            placeholder="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginSubmitBtn" onClick={handleClick}>
            Sing Up
          </button>
          {error && <span className="error">Something went wrong...</span>}
          <Link className="loginLinks" to="/login">Log in</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
