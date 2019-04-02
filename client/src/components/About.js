import React from "react";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-heading">About Choost</h1>
      <p className="about-descr">
        Choost is our final project in the Ironhack Web Development Part-time
        Course 2018/2019. <br />
        We are:
      </p>
      <ul className="about-names">
        <li>
          <a href="https://www.linkedin.com/in/axel-heinz-0389548/">
            Axel Heinz
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sarah-d-88013314b/">
            Sarah Dröse
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/stephaniegidde/">
            Stephanie Gidde
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
