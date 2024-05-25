import React from 'react'
import "./validation.css";
export default function Signup() {
  return (
    <>
    
    <div className="signup-container">
          <h2>SignUp Form</h2>
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
        ]</>
  )
}
