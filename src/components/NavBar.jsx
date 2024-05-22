import React from "react";
import "../CSS/Navbar.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const NavBar = ({ isLogged }) => {
  let User = () => {
    return (
      <>
        <div className="login-div">
          <NavLink to={"/user"} className={"NoLink"}>
            <FaUser />
            <span>Hello, User</span>
          </NavLink>
          <NavLink to={"/logout"}>Logout</NavLink>
        </div>
      </>
    );
  };
  let Guest = () => {
    return (
      <>
        <div className="login-div">
          <NavLink to={"/sign"}>Signup</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="left-nav">
        <NavLink to={"/"} className={"NoLink"}>
          ESHOP
        </NavLink>
      </div>
      <div className="middle-navBar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Products"}>Products</NavLink>
        <NavLink to={"/About"}> About Us</NavLink>
        <NavLink to={"/Contact"}> Contact US</NavLink>
      </div>
      <div className="right-nav">
        {isLogged === true ? <User /> : <Guest />}
        <NavLink to={"/Cart"} className={"NoLink"}>
          <FaShoppingCart />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
