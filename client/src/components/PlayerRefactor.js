import React, { Component } from "react";
import _ from "lodash";
import "../App.css";
import axios from "axios";
import Spinner from "./Spinner";
import PlayerBar from "./PlayerBar";
import channels from "./categorydata/channels.json";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // parameters for the search that can be changed by the user
      videoId: false,
      isloading: true,
      results: {},
      isRandom: false,
      isPlaylist: false
    };
  }

  componentDidMount() {
    this.getNewVideos();
    window.scrollTo(0, 0);
  }

  shuffleVideos = () => {
    let alreadyPlayed = [];
    let channelObj = JSON.parse(channels);
    for (let ch in channelObj) {
      console.log(ch);
    }
    //JSON object and then parse it
  };

  fetchNewVideo = () => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: "snippet", //by default
          q: this.props.keyword,
          videoDuration: setDuration,
          maxResults: maxResults,
          videoEmbeddable: true, // search only videos that can be embedded into a webpage
          type: "video", //required by parameter "videoEmbeddable"
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          loading: true,
          relevanceLanguage: setLanguage,
          channelId: randomchannel
        }
      })
      .then(res => {
        const randomVideo = _.shuffle(alreadyPlayedCopy)[0];
        alreadyPlayedCopy = alreadyPlayedCopy.filter(
          arrayItems => arrayItems !== randomVideo
        );
        this.setState({ videoId: res.data.items[randomVideo].id.videoId });
        this.setState({ results: res.data });
        this.setState({ channelId: randomchannel });
        this.setState({ isloading: false });

        // else {this.props.checkVideo(this.state.videoId)}
      })
      .catch(error => {
        this.props.checkVideo(this.state.videoId);
      });
  };
}

export default Player;
