import React, { Component } from "react";
import _ from "lodash";
import "../App.css";
import axios from "axios";
import Spinner from "./Spinner";
import PlayerBar from "./PlayerBar";
import alreadyPlayedArray from "../categorydata/alreadyPlayedArray.json";
import docuChannelsDE from "../categorydata/docuChannelsDE.json";
import docuChannelsEN from "../categorydata/docuChannelsEN.json";
import comedyChannelsDE from "../categorydata/comedyChannelsDE.json";
import comedyChannelsEN from "../categorydata/comedyChannelsEN.json";
import fitnessChannels from "../categorydata/fitnessChannels.json";
import yogaChannelsEN from "../categorydata/yogaChannelsEN.json";
import yogaChannelsDE from "../categorydata/yogaChannelsDE.json";
import cookingChannels from "../categorydata/cookingChannels.json";

require("dotenv").config();

let alreadyPlayedCopy = alreadyPlayedArray;

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

  componentDidMount(props) {
    let randomchannel = undefined;
    let setDuration = this.props.duration;
    let setLanguage = this.props.language;
    if (
      this.props.language === "de" &&
      this.props.categoryName === "Documentary"
    ) {
      randomchannel = _.shuffle(docuChannelsDE)[0];
    } else if (
      this.props.language === "en" &&
      this.props.categoryName === "Documentary"
    ) {
      randomchannel = _.shuffle(docuChannelsEN)[0];
    } else if (
      this.props.language === "de" &&
      this.props.categoryName === "Comedy"
    ) {
      randomchannel = _.shuffle(comedyChannelsDE)[0];
    } else if (
      this.props.language === "en" &&
      this.props.categoryName === "Comedy"
    ) {
      randomchannel = _.shuffle(comedyChannelsEN)[0];
    } else if (this.props.categoryName === "Workout") {
      randomchannel = _.shuffle(fitnessChannels)[0];
      setDuration = "any";
    } else if (
      this.props.language === "de" &&
      this.props.categoryName === "Yoga"
    ) {
      randomchannel = _.shuffle(yogaChannelsDE)[0];
      setDuration = "any";
      setLanguage = "de";
    } else if (
      this.props.language === "en" &&
      this.props.categoryName === "Yoga"
    ) {
      randomchannel = _.shuffle(yogaChannelsEN)[0];
      setDuration = "any";
      setLanguage = "de";
    } else if (this.props.categoryName === "Cooking") {
      randomchannel = _.shuffle(cookingChannels)[0];
      setDuration = "any";
      setLanguage = "";
    }
    console.log("RANDOM CHANNEL", randomchannel);
    axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: "snippet", //by default
          q: this.props.keyword,
          videoDuration: setDuration,
          maxResults: "50",
          videoEmbeddable: true, // search to only videos that can be embedded into a webpage
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
        this.setState({ isloading: false });
        this.setState({ channelId: randomchannel });
      });
  }

  getNextVideo = () => {
    const randomVideo = _.shuffle(alreadyPlayedCopy)[0];
    alreadyPlayedCopy = alreadyPlayedCopy.filter(item => item !== randomVideo);
    if (alreadyPlayedCopy.length === 0) {
      this.setState({
        videoId: this.state.results.items[
          alreadyPlayedCopy.push(Math.floor(Math.random() * 51))
        ].id.videoId
      });
    }
    this.setState({
      videoId: this.state.results.items[randomVideo].id.videoId
    });
  };

  render() {
    const src = `https://www.youtube.com/embed/${
      this.state.videoId
    }?modestbranding=1&color=white`;
    return (
      <div>
        {this.state.isloading === true && <Spinner />}
        <div className="wrapperVideo">
          <div className="video-player">
            {this.state.videoId && (
              <iframe title="Video-Player" src={src} allowFullScreen />
            )}
            <PlayerBar
              videoID={this.state.videoId}
              randomVideo={this.getNextVideo}
              userInSession={this.props.userInSession}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
