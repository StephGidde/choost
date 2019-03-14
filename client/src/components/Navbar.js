import React, { Component } from "react";
import "../App.css";
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
    if (this.state.loggedInUser) {
      return (
        <div>
          <nav className="navbar">
            <div className="navbar-brand">
              <p>
                <strong>LOGO</strong>
              </p>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/">
                  Home
                </a>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-light " href="/logout">
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
            <div className="navbar-brand navbar-item">
              <strong>LOGO</strong>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/">
                  Home
                </a>
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
