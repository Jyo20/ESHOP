import React, { useState } from "react";
import "./validation.css";
import { useNavigate ,useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom";
import loginImage from "../../Images/login.jpg";
const Login = () => {
  let [usernameState, setUsername] = useState("");
  let [passwordState, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let navigate = useNavigate();
  const location = useLocation();
  //getting data from signup component 
  const username = location.state && location.state.username;
  const password=location.state && location.state.password;
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
      if(usernameState===username && passwordState===password){
        alert("Successfully Login");
      navigate("/",{state:{username:usernameState}});
      }else{
        setUsernameError("*Not Valid Username");
      setPasswordError("*Not Valid Password");
      }
    }
  };
  return (
    <>
      <div className="login-container">
        <img src={loginImage} alt="" />
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div>
            {" "}
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username or Email"
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
          <div className="password-Container">
            <div className="password-Subcontainer">
            <input type="checkbox" name="passwordRemember" id="passwordRemember" />
            <label htmlFor="formCheckLabel">Remember me</label>
            </div>
            <div className="forgot-password">
              <NavLink to={"#"}>Forgot password ?</NavLink>
            </div>
          </div>
          
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};
export default Login;
