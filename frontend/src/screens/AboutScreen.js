import React from "react";
import video from "../Assets/Videos/video7.mp4";

import "./AboutScreen.css";

//components
import Footer from "../components/Footer";

const AboutScreen = () => {
  return (
    <div className="about__screen">
      <h1>About Us</h1>
      <br />
      <h2> Once upon a time... </h2>
      <h2> The stars were out of humanity's grasp </h2>
      <div className="about__video">
        <video autoPlay loop muted id="video__history">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="about__places">
        <h2>Places</h2>
        Ceres Mars Luna Belt
      </div>
      <div>
        <h2 className="about__ships">Ships</h2>
        Luxury
      </div>
      <div>
        <p>
          <h2>Credits:</h2>
          Based on the show, the Expanse
          <br />
          Protomolecule Font:
          https://www.reddit.com/r/TheExpanse/comments/o9yk1d/protomolecule_font_062021/{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
