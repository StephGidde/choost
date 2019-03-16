import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import Player from "./Player";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  parameters that can be changed by the user
      q: false
    };
  }

  searchFunction = (query, languageFilter, durationFilter) => {

    this.setState({
      q: query,
      relevanceLanguage: languageFilter,
      videoDuration: durationFilter
    })
  }
  

  render() {
    if (this.state.q) {
      return <Player keyword={this.state.q} language={this.state.relevanceLanguage} duration={this.state.videoDuration} />
    }

    return (
      <div className="App">
        <div className=" app-name title">
          <h1>CHOOST</h1>
        </div>
        <SearchBar onSearch={this.searchFunction} />
        <div className="intro-container">
          <span>
            {" "}
            or <br /> choose a category:
          </span>
        </div>
        <Categories onSearch={this.searchFunction} />

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

export default Home;
