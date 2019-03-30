import React, { Component } from "react";
import "../App.css";
import nextVideoIMG from "../images/next.png";
import fbIMG from "../images/facebook.png";
import twitterIMG from "../images/twitter.png";
import addToPlaylistIMG from "../images/add.png";
import axios from "axios";
import swal from "sweetalert";

class PlayerBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  addToPlaylist = event => {
    event.preventDefault();
    swal({ title: "Added to playlist!", icon: "success" });
    const videoToAdd = this.props.videoID;
    const user = this.props.userInSession;
    axios
      .post(process.env.REACT_APP_API_URL || "http://localhost:5000/", {
        videoToAdd,
        user
      })
      .then(res => console.log("i am response from frontend", res));
    // axios.post("http://localhost:5000/api/user_playlist", { videoToAdd });
    // .then(res => console.log("i am response from frontend", res));
  };

  shareVideoFB() {
    var shareURL = `https://www.youtube.com/watch?v=${this.props.videoID}`;
    var sharer = "https://www.facebook.com/sharer/sharer.php?u=" + shareURL;
    window.open(sharer, "sharer", "width=626,height=436");
  }

  shareVideoTwitter() {
    var shareURL = `https://www.youtube.com/watch?v=${this.props.videoId}`;
    var sharer = "http://twitter.com/share?&url=" + shareURL;
    window.open(sharer, "sharer", "width=626,height=436");
  }

  render() {
    return (
      <div>
        <div id="PlayerBarContainer">
          <img
            src={addToPlaylistIMG}
            alt="add Button"
            id="addToPlaylistIMG"
            className="pointer"
            onClick={this.addToPlaylist}
          />
          <img
            src={fbIMG}
            alt="sharing Button"
            id="sharingIMG"
            className="pointer"
            onClick={() => this.shareVideoFB()}
          />
          <img
            src={twitterIMG}
            alt="sharing Button"
            id="sharingIMGTwitter"
            className="pointer"
            onClick={() => this.shareVideoTwitter()}
          />
          <img
            src={nextVideoIMG}
            alt="next Video Button"
            id="nextVideoIMG"
            className="pointer"
            onClick={this.props.randomVideo}
          />
        </div>
      </div>
    );
  }
}

export default PlayerBar;
