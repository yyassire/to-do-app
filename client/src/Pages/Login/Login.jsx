import { useState } from "react";
import { login } from "../../redux/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import "./Login.scss"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="Login">
      <div className="wrapper">
        <h1 className="title">SIGN IN</h1>
        <form className="loginForm">
          <input className="loginInput"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input className="loginInput"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginSubmitBtn" onClick={handleClick} disabled={isFetching}>
            LOGIN
          </button>
          {error && <span className="error">Something went wrong...</span>}
          <Link className="loginLinks" to="/register">CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
