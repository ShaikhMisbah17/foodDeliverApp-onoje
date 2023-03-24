import React from "react";
import Bella from "../assets/Bella Olonje logo.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="food__footer">
      <div className="footer_img">
        <img className="bella_img" src={Bella} alt="" />
      </div>
      <div className="socialmedia">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
      </div>
      <div className="copyright">
        <p>Copywright 2020 Bella Onojie.com</p>
      </div>
    </div>
  );
}

export default Footer;
