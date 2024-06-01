import React, { useState } from "react";
import "./validation.css";
import loginImage from "../../Images/login.jpg";
import { useNavigate,useLocation } from "react-router-dom";

export default function Signup() {
  const location = useLocation();
  let history = useNavigate();
  const newPath = location.pathname.replace("/registration/signup", "/registration/login");
  let [userInput, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let [userNameError, setUsernameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [confirmPasswordError, setConfirmPasswordError] = useState("");
  let handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...userInput, [name]: value });
  };
  let isValidInput = () => {
    let valid = true;
    if (
      userInput.username === "" &&
      userInput.email === "" &&
      userInput.password === "" &&
      userInput.confirmPassword === ""
    ) {
      setUsernameError("*Username is required");
      setEmailError("*Email is required");
      setPasswordError("*Password is required");
      setConfirmPasswordError("*Confirm Password is required");
      valid = false;
    } else {
      setUsernameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
    }
    if (userInput.username === "") {
      setUsernameError("*Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }
    if (userInput.email === "") {
      setEmailError("*Email is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (userInput.password === "") {
      setPasswordError("*Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (userInput.confirmPassword === "") {
      setConfirmPasswordError("*Confirm Password is required");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }
    if (userInput.password !== userInput.confirmPassword) {
      setConfirmPasswordError("*Password and Confirm Password do not match");
      valid = false;
    }else{
      setConfirmPasswordError("");
    }
    return valid;
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (isValidInput()) {
      alert("Registration Successfully!");
      history(newPath,{state:{username:userInput.username,password:userInput.password}});
    }
  };
  return (
    <>
      <div className="signup-container">
        <img src={loginImage} alt="" />
        <form onSubmit={handleSubmit}>
          <h2>Create a Account</h2>
          <div>
            {" "}
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={userInput.username}
              onChange={handleChange}
            />
          </div>
          <span className="error">{userNameError}</span>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={userInput.email}
              onChange={handleChange}
            />
          </div>
          <span className="error">{emailError}</span>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={userInput.password}
              onChange={handleChange}
            />
          </div>
          <span className="error">{passwordError}</span>
          <div>
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Re-enter password"
              onChange={handleChange}
              value={userInput.confirmPassword}
            />
          </div>
          <span className="error">{confirmPasswordError}</span>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}
