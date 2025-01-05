import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img className='logo' src={assets.logo} alt="" /> */}
      <div className="logo-admin">
        <h4>Zomato</h4> <p>Admin Panel</p>{" "}
      </div>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
