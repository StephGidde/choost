import React, { Component } from "react";
import "../App.css";
import nextVideoIMG from "../images/next.png";
import sharingIMG from "../images/sharing.png";
import addToPlaylistIMG from "../images/add.png";
import AuthService from "./auth/auth-service";

class PlayerBar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  addToPlaylist() {}

  shareVideo(social) {
    var social = "twitter";
    if (social != "fb" && social != "twitter") {
      console.log("Share not found");
      return false;
    }
    var videoURL = "https://www.youtube.com/watch?v=Eofta5EU5vg";
    var share_url = videoURL;

    switch (social) {
      case "fb":
        var sharer =
          "https://www.facebook.com/sharer/sharer.php?u=" + share_url;
        window.open(sharer, "sharer", "width=626,height=436");
        break;

      case "twitter":
        var sharer = "http://twitter.com/share?text=" + "&url=" + share_url;
        window.open(sharer, "sharer", "width=626,height=436");
        break;
    }
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
            src={sharingIMG}
            alt="sharing Button"
            id="sharingIMG"
            onClick={this.shareVideo}
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
