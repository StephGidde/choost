import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import Player from "./Player";
import SearchFilter from "./SearchFilter";
import UserPlaylist from "./UserPlaylist";
import PlaylistPlayer from "./PlaylistPlayer";
import bulmaDivider from "bulma-divider"


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  parameters that can be changed by the user
      q: false,
      relevanceLanguage: "en",
      videoDuration: "any",
      isRandom: false,
      isPlaylist: false
    };
  }

  searchFunction = (query, categoryName, channelId) => {
    this.setState({
      q: query,
      categoryName: categoryName,
      channelId: channelId,
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
          categoryName={this.state.categoryName}
          channelId={this.state.channelId}
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
        <SearchFilter onFilter={this.filterFunction} />
        <SearchBar onSearch={this.searchFunction} />
        <div className="intro-container">
          <div className="is-divider" data-content="OR" />
          <span> choose a category:</span>
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
