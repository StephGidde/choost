// auth/Login.js

import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link, withRouter } from "react-router-dom"; // withRouter erlaubt, dass Route-Daten (zB browser history) mit-exportiert werden; das ist bei Choost zB wichtig für den redirect zu "/" nach signup und login mit this.props.history.push("/");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.service
      .login(email, password)
      .then(response => {
        this.setState({ email: "", password: "" });
        this.props.getUser(response);
        this.props.history.push("/");
      })
      .catch(error =>
        this.setState({
          errormessage: error.response.data.message
        })
      );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signup-container">
        <p className="login-signup-title">Welcome back!</p>

        <form onSubmit={this.handleFormSubmit}>
          <input
            className="input is-primary is-normal is-warning"
            placeholder="Enter your email address"
            type="email"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            className="input is-primary is-normal is-warning"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <div className="has-text-danger less-margin-top ">
            {this.state.errormessage}
          </div>
          <input
            className="button is-normal is-primary "
            type="submit"
            value="Login"
          />
        </form>
        <br />
        <p className="p-have-account-message">
          Don't have an account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Login);
