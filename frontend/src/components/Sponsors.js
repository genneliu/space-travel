import React from "react";
import "./Sponsors.css";

//images
import MCRN from "../Assets/Images/MCRN.jpg";
import OPA from "../Assets/Images/OPA.webp";
import UN from "../Assets/Images/UN.webp";

const Sponsors = () => {
  return (
    <div className="sponsor__logos">
      <image src={MCRN} alt="MCRN Logo"></image>
      <image src={OPA} alt="OPA"></image>
      <image src={UN} alt="UN"></image>
    </div>
  );
};

export default Sponsors;

// add css
