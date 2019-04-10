import React from "react";
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
            <a
              href="https://www.linkedin.com/in/axel-heinz-0389548/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AXEL HEINZ
              <br />
              <img className="linkedin" src={linkedin} alt="linkedin-logo" />
            </a>
          </p>
        </div>
        <div className="team-member sarah">
          <p className="team-name">
            <a
              href="https://www.linkedin.com/in/sarah-d-88013314b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SARAH DRÖSE
              <br />
              <img className="linkedin" src={linkedin} alt="linkedin-logo" />
            </a>
          </p>
        </div>
        <div className="team-member steph">
          <p className="team-name">
            <a
              href="https://www.linkedin.com/in/stephaniegidde/"
              target="_blank"
              rel="noopener noreferrer"
            >
              STEPHANIE GIDDE
              <br />
              <img className="linkedin" src={linkedin} alt="linkedin-logo" />
            </a>
          </p>
        </div>
      </div>
      <div>
        <h1 className="about-heading">Our Techstack</h1>
        <div className="wrapper-about">
          <i id="technology" className="devicon-react-original-wordmark" />
          <i id="technology" className="devicon-html5-plain-wordmark" />
          <i id="technology" className="devicon-css3-plain-wordmark" />
          <i id="technology" className="devicon-javascript-plain" />
          <i id="technology" className="devicon-nodejs-plain-wordmark" />
          <i id="technology" className="devicon-mongodb-plain-wordmark" />
          <i id="technology" className="fab fa-youtube-square" />
        </div>
      </div>
    </div>
  );
};

export default About;
