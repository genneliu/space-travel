import React from "react";

import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1> Welcome </h1>
      <Link to="/shop">
        {" "}
        <button> Shop </button>{" "}
      </Link>
      <Link to="/contact">
        <button> Contact Us </button>{" "}
      </Link>
    </div>
  );
};

export default HomeScreen;
