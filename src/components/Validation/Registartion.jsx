import React from "react";
import "./registration.css";
import { NavLink ,Outlet} from "react-router-dom";


function Registartion() {
  return (
    <>
      <div className="registration-container">
        <div className="logo">
        <NavLink to={"/"} className={"NoLink"}>
          ESHOP
        </NavLink>
        </div>
       <div className="registration-btn">
      <NavLink to={"login"}>Login</NavLink>
      <NavLink to={"signup"}>Signup</NavLink>
      </div>
      <Outlet/>
     
      </div>
    </>
  );
}

export default Registartion;
