import React from "react";
import video from "../Assets/Videos/video7.mp4";

import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div className="about__screen">
      About Us
      <h1> Once upon a time... </h1>
      <h2> The stars were out of humanity's grasp </h2>
      <video autoPlay loop muted id="video__history">
        <source src={video} type="video/mp4" />
      </video>
      <div>
        <h2>Places</h2>
        Ceres Mars Luna Belt
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
    </div>
  );
};

export default AboutScreen;
