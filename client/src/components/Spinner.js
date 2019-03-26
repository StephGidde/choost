import React from "react";
import "../App.css";
import catspinner from "../images/BlueCat.gif";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={catspinner} alt="Home" width="200" height="200" />
    </div>
  );
};

export default Spinner;
