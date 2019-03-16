import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import Spinner from "./Spinner";
require("dotenv").config();

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // parameters for the search that can be changed by the user
      // q: "dog",
      videoDuration: "short",
      // relevanceLanguage:EN,
      videoId: false,
      isloading: true
    };
  }

  // componentWillReceiveProps(newProps)

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
        }
      })
      .then(res => {
        this.setState({ videoId: res.data.items[0].id.videoId });
        this.setState({ isloading: false });
      });
  }

  render() {
    const src = `https://www.youtube.com/embed/${
      this.state.videoId
    }?modestbranding=1&color=white`;

    return (
      <div>
        {this.state.isloading === true && <Spinner />}
        <div id="video-container">
          {this.state.videoId && (
            <iframe
              id="ytplayer"
              type="text/html"
              width="560"
              height="315"
              src={src}
              frameBorder="0"
              allowFullScreen
            />
          )}
        </div>
      </div>
    );
  }
}

export default Player;
