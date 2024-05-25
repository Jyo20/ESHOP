import React from "react";
import "./validation.css";
import { NavLink } from "react-router-dom";
import loginImage from "../../Images/login.jpg";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <img src={loginImage} alt="" />
        <form>
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
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
export default Login;
