import React, { Component } from "react";
import "../../App.css";
import AuthService from "./auth-service";
import { Link, withRouter } from "react-router-dom"; // withRouter erlaubt, dass Route-Daten (zB browser history) mit-exportiert werden; das ist bei Choost zB wichtig für den redirect zu "/" nach signup und login mit this.props.history.push("/");

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
    console.log("mmmm", this.props);
    return (
      <div className="signup-container">
        <form onSubmit={this.handleFormSubmit}>
          <input
            className="input is-primary is-normal"
            placeholder="Chose a username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            className="input is-primary is-normal"
            type="email"
            placeholder="Enter email address"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            className="input is-primary is-normal"
            name="password"
            placeholder="Enter password"
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            className="button is-normal is-primary "
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

export default withRouter(Signup);
