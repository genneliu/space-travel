import React from "react";
import video from "../Assets/Videos/video7.mp4";

//screens
import "./AboutScreen.css";

//components
import Footer from "../components/Footer";
import HistoryVideo from "../components/HistoryVideo";
import Credits from "../components/Credits";
import { Link } from "react-router-dom";

const AboutScreen = () => {
  return (
    <div className="about__container">
      <div className="about__screen">
        <h1>About Us</h1>
        <br />
        <h2> Once upon a time... </h2>
        <h2> The stars were out of humanity's grasp </h2>
        <p> Thanks to the creation of the Epstein Drive... </p>
        <div className="about__video">
          <HistoryVideo />
        </div>
        <div className="about__places">
          {/* tabs for the places? */}
          <Link to="/places">
            <button className="about__button"> Places </button>
          </Link>
        </div>
        <div>
          <Link to="/ships">
            <button className="about__button"> Ships </button>
          </Link>
          {/* tabs for ships */}
        </div>
        <div className="about__credits">
          <Credits />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
