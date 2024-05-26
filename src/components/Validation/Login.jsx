import React, { useState } from "react";
import "./validation.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import loginImage from "../../Images/login.jpg";
const Login = () => {
  let [usernameState, setUsername] = useState("");
  let [passwordState, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let navigate = useNavigate();
  let validateInput = () => {
    let valid = true;
    if (usernameState === "" && passwordState === "") {
      setUsernameError("*Username is Required");
      setPasswordError("*Password is Required");
      valid = false;
    } else {
      setUsernameError("");
      setPasswordError("");
    }

    if (usernameState === "") {
      setUsernameError("*Username is Required");
      valid = false;
    } else {
      setUsernameError("");
    }
    if (passwordState === "") {
      setPasswordError("*Password is Required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      alert("Successfully Login");
      navigate("/",{state:{username:usernameState}});
    }
  };
  return (
    <>
      <div className="login-container">
        <img src={loginImage} alt="" />
        <form onSubmit={handleSubmit}>
          <div className="logo">
            <span>Welcome to</span>
            <NavLink to={"/"} className={"NoLink"}>
              ESHOP
            </NavLink>
          </div>
          <div>
            {" "}
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={usernameState}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError("");
              }}
            />
          </div>
          <span className="error">{usernameError}</span>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={passwordState}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
            />
          </div>
          <span className="error">{passwordError}</span>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
export default Login;
