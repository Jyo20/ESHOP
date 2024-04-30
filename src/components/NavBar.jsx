import React from "react";
import "../CSS/Navbar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container">
      <div className="nav-container">
        <NavLink to={"/"}>ESHOP</NavLink>
      </div>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Products"}>Products</NavLink>
        <NavLink to={"/About"}> About Us</NavLink>
        <NavLink to={"/Contact"}> Contact US</NavLink>
        <NavLink to={"/Cart"}>Cart</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
