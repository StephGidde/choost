import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import Player from "./Player";
import SearchFilter from "./SearchFilter";
import UserPlaylist from "./UserPlaylist";
import PlaylistPlayer from "./PlaylistPlayer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  parameters that can be changed by the user
      q: false,
      isRandom: false,
      isPlaylist: false
    };
  }

  searchFunction = query => {
    this.setState({
      q: query,
      isRandom: true
    });
  };
  filterFunction = (languageFilter, durationFilter) => {
    this.setState({
      relevanceLanguage: languageFilter,
      videoDuration: durationFilter
    });
  };

  playlisthandler = video => {
    this.setState({
      q: video,
      isPlaylist: true,
      isRandom: false
    });
  };

  render() {
    if (this.state.q && this.state.isRandom) {
      return (
        <Player
          keyword={this.state.q}
          language={this.state.relevanceLanguage}
          duration={this.state.videoDuration}
          userInSession={this.props.userInSession}
        />
      );
    }

    if (this.state.q && this.state.isPlaylist) {
      return (
        <PlaylistPlayer
          videoID={this.state.q}
          userInSession={this.state.user}
        />
      );
    }

    return (
      <div className="App">
        <div className=" app-name title">
          <h1>CHOOST</h1>
        </div>
        <SearchBar onSearch={this.searchFunction} />
        <SearchFilter onFilter={this.filterFunction} />
        <div className="intro-container">
          <span>
            {" "}
            or <br /> choose a category:
          </span>
        </div>
        <Categories onSearch={this.searchFunction} />

        {this.props.userInSession && (
          <UserPlaylist
            userInSession={this.props.userInSession}
            playlisthandler={this.playlisthandler}
          />
        )}
      </div>
    );
  }
}

export default Home;
