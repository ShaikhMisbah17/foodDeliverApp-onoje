import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import foodbg from "../assets/foodbg.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__bg-img home__bg-text">
        <img className="home_bg" src={foodbg} alt="" />
      </div>

      <div className="home__bg-content">
        <div className="home__content-title">
          <p className="title">Food app</p>
        </div>
        <div className="home__content-description">
          <p className="title_description">
            Why stay hungry when you can order form Bella Onojie
          </p>
        </div>
        <div className="home__content-download">
          <p className="title_download">
            Download the bella onoje’s food app now on
          </p>
        </div>
        <div className="title__buttons">
          <button>Playstore</button>
          <button>App store</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
