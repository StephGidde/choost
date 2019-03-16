import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import PlayerBar from "./PlayerBar";
require("dotenv").config();

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // parameters for the search that can be changed by the user
      videoDuration: "short",
      // relevanceLanguage:EN,
      videoId: false
      //loading:true
    };
  }

  // componentWillReceiveProps(newProps) ComponentDidUpdate better!

  componentDidMount(props) {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          //these parameters are definded by us, can't be changed by the user
          part: "snippet", //by default
          q: this.props.keyword,
          videoDuration: this.state.videoDuration,
          maxResults: "50",
          videoEmbeddable: true, // search to only videos that can be embedded into a webpage
          type: "video", //required by parameter "videoEmbeddable"
          key: process.env.REACT_APP_YOUTUBE_API_KEY
          // channelId: 'UCqmQ1b96-PNH4coqgHTuTlA',
          //loading:false
        }
      })
      .then(res => {
        this.setState({ videoId: res.data.items[0].id.videoId });
      });
  }

  render() {
    const src = `https://www.youtube.com/embed/${
      this.state.videoId
    }?modestbranding=1&color=white`;

    return (
      <div>
        <div className="wrapperVideo">
          <div className="video-player">
            {this.state.videoId && <iframe src={src} allowFullScreen />}
            <PlayerBar videoID={this.state.videoId} />
          </div>
        </div>
      </div>
    );
  }
}

// id="ytplayer" type="text/html" width="560" height="315"   frameBorder="0"

export default Player;
