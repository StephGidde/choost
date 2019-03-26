import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/auth-service";
import { Switch, Route } from "react-router-dom";
import UserPlaylist from "./components/UserPlaylist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
    // console.log(this.state.loggedInUser);
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home userInSession={this.state.loggedInUser} />}
            />
          </Switch>
          {/* <UserPlaylist userInSession={this.state.loggedInUser} /> */}
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
