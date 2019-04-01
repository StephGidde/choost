import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="app-footer">
      <Link to="/about" className="app-footer-link">
        <p>About Choost</p>
      </Link>
    </div>
  );
};

export default Footer;
