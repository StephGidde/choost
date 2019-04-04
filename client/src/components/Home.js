import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import Player from "./Player";
import SearchFilter from "./SearchFilter";
import UserPlaylist from "./UserPlaylist";
import PlaylistPlayer from "./PlaylistPlayer";
import bulmaDivider from "bulma-divider";
import Footer from "./Footer";
import Header from "./Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  parameters that can be changed by the user
      q: false,
      relevanceLanguage: "en",
      videoDuration: "any",
      isRandom: false,
      isPlaylist: false,
      home: true
    };
  }

  searchFunction = (query, categoryName) => {
    this.setState({
      q: query,
      categoryName: categoryName,
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
      isRandom: false,
      home: false
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
          // channelId={this.state.channelId}
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
        <Header />

        <div>
          <SearchBar onSearch={this.searchFunction} />
        </div>
        <div className="intro-container">
          <div className="is-divider" data-content="OR" />
          <div className="category-title-container">Choose a category:</div>
        </div>
        <div className="filter-container-ontop-categories">
          <SearchFilter onFilter={this.filterFunction} />
        </div>
        {/* key makes sure component is completely rerendered once user is available */}
        <Categories
          onSearch={this.searchFunction}
          userInSession={this.props.userInSession}
          key={this.props.userInSession ? this.props.userInSession._id : "0"}
        />

        {this.props.userInSession && (
          <UserPlaylist
            userInSession={this.props.userInSession}
            playlisthandler={this.playlisthandler}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
