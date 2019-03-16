import React, { Component } from "react";
import "../App.css";
import nextVideoIMG from "../images/next.png";
import fbIMG from "../images/facebook.png";
import twitterIMG from "../images/twitter.png";
import addToPlaylistIMG from "../images/add.png";
import AuthService from "./auth/auth-service";

class PlayerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
  }

  addToPlaylist() {}

  shareVideoFB() {
    var shareURL = `https://www.youtube.com/watch?v=${this.props.videoID}`;
    var sharer = "https://www.facebook.com/sharer/sharer.php?u=" + shareURL;
    window.open(sharer, "sharer", "width=626,height=436");
  }

  shareVideoTwitter() {
    var shareURL = `https://www.youtube.com/watch?v=${this.props.videoId}`;
    var sharer = "http://twitter.com/share?text=" + "&url=" + shareURL;
    window.open(sharer, "sharer", "width=626,height=436");
  }

  nextVideo() {}

  render() {
    return (
      <div>
        <div id="PlayerBarContainer">
          <img
            src={addToPlaylistIMG}
            alt="add Button"
            id="addToPlaylistIMG" /*onClick={this.addToPlaylist} */
          />
          <img
            src={fbIMG}
            alt="sharing Button"
            id="sharingIMG"
            onClick={() => this.shareVideoFB()}
          />
          <img
            src={twitterIMG}
            alt="sharing Button"
            id="sharingIMGTwitter"
            onClick={() => this.shareVideoTwitter()}
          />
          <img
            src={nextVideoIMG}
            alt="next Video Button"
            id="nextVideoIMG" /* onClick={this.nextVideo} */
          />
        </div>
      </div>
    );
  }
}

export default PlayerBar;
