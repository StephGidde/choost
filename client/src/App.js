import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="app-name title">
          <h1>CHOOST</h1>
        </div>
        <SearchBar />
        <div className="intro-container">
          <span>
            {" "}
            or <br /> choose a category:
          </span>
        </div>
        <Categories />
        <div className="breadcrumb user-playlist">
          <p>Your Playlist</p>
          <ul>
            <li>
              <a href="#">Video 1</a>
            </li>
            <li>
              <a href="#">Video 2</a>
            </li>
            <li>
              <a href="#">Video 2</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
