import React, { Component } from "react";
import "../App.css";
import AuthService from "./auth/auth-service";
import { Link, Switch, Route } from "react-router-dom";

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
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <nav class="navbar ">
            <nav class="navbar-brand navbar-item">
              <strong>LOGO</strong>
            </nav>
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  Home
                </a>
              </div>
            </div>
            <div class="navbar-end">
              <div class="navbar-item ">
                <div class="buttons">
                  <a class="button is-light " href="/logout">
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
          <nav class="navbar ">
            <nav class="navbar-brand navbar-item">
              <strong>LOGO</strong>
            </nav>
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  Home
                </a>
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
