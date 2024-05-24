import React from "react";
import "./validation.css";
import { useState } from "react";
const Login = () => {
  let { visible, setVisible } = useState(false);
  return (
    <>
      <div className="main-container">
        <button>Login</button>
        <button onClick={()=>{
            return setVisible(!visible)
        }} >Signup</button>
        <div className="login-container">
          <form>
            <h2>Login</h2>
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
        {/****************signup***************************/}

        <div className="signup-container">
          <form>
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
              <label htmlFor="">Email Id</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
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
            <div>
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-enter password"
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
