import React, { Component } from "react";
import "../../App.css";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;

    this.service
      .signup(username, email, password)
      .then(response => {
        this.setState({
          username: "",
          email: "",
          password: ""
        });
        this.props.getUser(response);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div class="signup-container">
        <form onSubmit={this.handleFormSubmit}>
          <input
            class="input is-primary is-normal"
            placeholder="Chose a username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            class="input is-primary is-normal"
            type="email"
            placeholder="Enter email address"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            class="input is-primary is-normal"
            name="password"
            placeholder="Enter password"
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            class="button is-normal is-primary "
            type="submit"
            value="Signup"
          />
        </form>
        <br />
        <p>
          Do you already have an account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
