import React from "react";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.png";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-heading">About Choost</h1>
      <p className="about-descr">
        Choost is our final project in the Ironhack Web Development Part-time
        Course 2018/2019. <br />
        We are:
      </p>
      <div className="wrapper-about">
        <div className="team-member axel">
          <p className="team-name">
            <a href="https://www.linkedin.com/in/axel-heinz-0389548/">
              AXEL HEINZ
              <br />
              <img className="linkedin" src={linkedin} alt="linkedin-logo" />
            </a>
          </p>
        </div>
        <div className="team-member sarah">
          <p className="team-name">
            <a href="https://www.linkedin.com/in/sarah-d-88013314b/">
              SARAH DRÖSE
              <br />
              <img className="linkedin" src={linkedin} alt="linkedin-logo" />
            </a>
          </p>
        </div>
        <div className="team-member steph">
          <p className="team-name">
            <a href="https://www.linkedin.com/in/stephaniegidde/">
              STEPHANIE GIDDE
              <br />
              <img className="linkedin" src={linkedin} alt="linkedin-logo" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
