import React, { Component } from "react";
import "../App.css";
import AuthService from "./auth/auth-service";
// import { Link, Switch, Route } from "react-router-dom";
import homeimg from "../images/Home-icon.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
      console.log("STILL LOGGED IN: " + this.state.loggedInUser.username);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <nav className="navbar">
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-brand">
                  <a className="navbar-item" href="/">
                    <img src={homeimg} alt="Home" width="30" height="30" />
                  </a>
                </div>
                <span className="navbar-item">
                  Hello {this.state.loggedInUser.username}
                </span>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    className="button is-light "
                    href="/"
                    onClick={() => this.logoutUser()}
                  >
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar">
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-brand">
                  <a className="navbar-item" href="/">
                    <img src={homeimg} alt="Home" width="30" height="30" />
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item ">
                <div className="buttons">
                  <a className="button is-primary " href="/signup">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" href="/login">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
