import React, { Component } from "react";
import "../App.css";
import "../Header.css";
import AuthService from "./auth/auth-service";
// import { Link, Switch, Route } from "react-router-dom";

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
                    <span id="choost-name">CHOOST</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div class="field is-grouped">
                  <span id="hello-username" className="navbar-item">
                    Hello, {this.state.loggedInUser.username}!
                  </span>
                  <div className="buttons">
                    <a
                      className="button is-light logout-button"
                      href="/"
                      onClick={() => this.logoutUser()}
                    >
                      Log out
                    </a>
                  </div>
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
                    <span id="choost-name">CHOOST</span>
                  </a>
                </div>
                <span id="hello-username" className="navbar-item" />
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary signup-button" href="/signup">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light login-button" href="/login">
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
