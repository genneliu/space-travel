import video from "../Assets/Videos/video7.mp4";
import React from "react";

const HistoryVideo = () => {
  return (
    <div className="about__video">
      <video autoPlay loop muted id="video__history">
        <source src={video} type="video/mp4" />
      </video>
      ;
    </div>
  );
};

export default HistoryVideo;
