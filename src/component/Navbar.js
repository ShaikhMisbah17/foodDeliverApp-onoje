import React from "react";
import "./Navbar.css";
import Bella from "../assets/Bella Olonje logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="food__navbar">
      <div className="navbar_img">
        <img classname="bella_img" src={Bella} alt="" />
      </div>
      <div className="navbar_listItems">
        <ul className="navbar__ul">
          <Link to="/Home" className="link__style">
            <li className="navbar_home list">Home</li>
          </Link>
          <Link to="/Product" className="link__style">
            <li className="list">Product</li>
          </Link>
          <Link to="/FAQ" className="link__style">
            <li className="list">FAQ</li>
          </Link>
          <Link to="/Contact" className="link__style">
            <li className="list">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
