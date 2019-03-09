import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white is-inverted is-outlined">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-outlined is-warning">Log in</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
