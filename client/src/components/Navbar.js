import React, { Component } from "react";
// import "../App.css";
import "../Navbar.css";
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
    });
  };

  render() {
    return (
      <div>
        <div className="navbar">
          <div id="choost-name">
            <a href="/">
              <span id="logo">CHOOST</span>
            </a>
          </div>
          <div className="wrapper">
            {/* conditional rendering for logged in user */}
            {this.state.loggedInUser && (
              <div>
                {/* <div id="hello-username" className="navbar-item">
                  Hello, {this.state.loggedInUser.username}!
                </div> */}
                <div className="logout-button button is-light">
                  <a href="/" onClick={() => this.logoutUser()}>
                    Log out
                  </a>
                </div>
              </div>
            )}
            {!this.state.loggedInUser && (
              <div>
                <div className="button is-light login-button">
                  <a href="/login">Log in</a>
                </div>
                <div className="button is-primary signup-button">
                  <a href="/signup">Sign up</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
