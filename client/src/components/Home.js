import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Categories from "./Categories";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div class=" app-name title">
          <h1>CHOOST</h1>
        </div>
        <SearchBar />
        <div class="intro-container">
          <span>
            {" "}
            or <br /> choose a category:
          </span>
        </div>
        <Categories />
        <div class="breadcrumb user-playlist">
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

export default Home;
