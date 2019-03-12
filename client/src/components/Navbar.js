import React, { Component } from "react";
import "../App.css";
import AuthService from "./auth/auth-service";
import { Link, Switch, Route } from "react-router-dom";
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
          <nav class="navbar">
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/">
                    <img src={homeimg} alt="Home" width="30" height="30" />
                  </a>
                </div>
                <span class="navbar-item">
                  Hello {this.state.loggedInUser.username}
                </span>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a
                    class="button is-light "
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
          <nav class="navbar">
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/">
                    <img src={homeimg} alt="Home" width="30" height="30" />
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item ">
                <div class="buttons">
                  <a class="button is-primary " href="/signup">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light" href="/login">
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
