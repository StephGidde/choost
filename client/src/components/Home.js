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
import swal from "sweetalert";
import { Link, withRouter } from "react-router-dom"; // withRouter erlaubt, dass Route-Daten (zB browser history) mit-exportiert werden; das ist bei Choost zB wichtig für den redirect zu "/" nach signup und login mit this.props.history.push("/");



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

  // rename to videoError
  checkVideo = (videoID) => {


    swal({ title: "This is not a valid search", icon: "warning" })
    this.setState({ q: false })


  }



  // watch videos the choost way
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
          checkVideo={this.checkVideo}
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

    // key makes sure component is completely rerendered once user is available
    return (
      <div className="App">
       
        <Header />

        <div>
          <SearchBar onSearch={this.searchFunction} />
          <SearchFilter onFilter={this.filterFunction} />
        </div>
        <div className="intro-container">
          <div className="is-divider" data-content="OR" />
          <div className="category-title-container">Choose a category:</div>
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
