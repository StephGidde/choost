import React, { Component } from "react";
import _ from "lodash";
import "../App.css";
import axios from "axios";
import Spinner from "./Spinner";
import PlayerBar from "./PlayerBar";
require("dotenv").config();

let alreadyPlayedArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49"
];

let docuChannelsDE = [
  "UC53bIpnef1pwAx69ERmmOLA",
  "UCLLibJTCy3sXjHLVaDimnpQ",
  "UCW39zufHfsuGgpLviKh297Q"
];

let docuChannelsEN = [
  "UCcjoLhqu3nyOFmdqF17LeBQ",
  "UC88lvyJe7aHZmcvzvubDFRg",
  "UC16niRr50-MSBwiO3YDb3RA",
  "UCu4XcDBdnZkV6-5z2f16M0g"
];

let comedyChannelsDE = [
  "UCNNEMxGKV1LsKZRt4vaIbvw",
  "UCFqcNI0NaAA21NS9W3ExCRg",
  "UCa0Qo0fCynsqV9i7h1XSjGg"
];

let comedyChannelsEN = [
  "UCqq3PZwp8Ob8_jN0esCunIw",
  "UCUsN5ZwHx2kILm84-jPDeXw",
  "UCMtFAi84ehTSYSE9XoHefig",
  "UCi7GJNg51C3jgmYTUwqoUXA",
  "UCCHk0tqatZibFoCfx-1yxxw",
  " UCtw7q4SyOeoCwM1i_3x8lDg"
];

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // parameters for the search that can be changed by the user
      videoId: false,
      isloading: true,
      results: {}
    };
  }

  componentDidMount(props) {
    let randomchannel = undefined;
    if (this.props.language === "de" && this.props.categoryName === "docu") {
      randomchannel = _.shuffle(docuChannelsDE)[0];
    } else if (
      this.props.language === "en" &&
      this.props.categoryName === "docu"
    ) {
      randomchannel = _.shuffle(docuChannelsEN)[0];
    } else if (
      this.props.language === "de" &&
      this.props.categoryName === "comedy"
    ) {
      randomchannel = _.shuffle(comedyChannelsDE)[0];
    } else if (
      this.props.language === "en" &&
      this.props.categoryName === "comedy"
    ) {
      randomchannel = _.shuffle(comedyChannelsEN)[0];
    }

    console.log("ChannelId after if-statement:" + randomchannel);

    axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: "snippet", //by default
          q: this.props.keyword,
          videoDuration: this.props.duration,
          maxResults: "50",
          videoEmbeddable: true, // search to only videos that can be embedded into a webpage
          type: "video", //required by parameter "videoEmbeddable"
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          loading: true,
          relevanceLanguage: this.props.language,
          channelId: randomchannel
        }
      })

      .then(res => {
        console.log("LANGUANGE:" + this.props.language);
        console.log("The props channel ID:" + this.props.channelId);
        console.log(
          "The state category Name by props:" + this.props.categoryName
        );
        console.log("The state channel ID:" + this.state.channelId);
        const randomVideo = _.shuffle(alreadyPlayedArray)[0];
        alreadyPlayedArray = alreadyPlayedArray.filter(
          arrayItems => arrayItems !== randomVideo
        );
        // console.log(randomVideo);
        this.setState({ videoId: res.data.items[randomVideo].id.videoId });
        this.setState({ results: res.data });
        this.setState({ isloading: false });
        this.state.results.items.forEach(el =>
          console.log(el.snippet.channelId)
        );
        // console.log(this.state.results);
        // console.log(alreadyPlayedArray);
      });
  }

  getNextVideo = () => {
    const randomVideo = _.shuffle(alreadyPlayedArray)[0];
    alreadyPlayedArray = alreadyPlayedArray.filter(
      item => item !== randomVideo
    );
    if (alreadyPlayedArray.length === 0) {
      this.setState({
        videoId: this.state.results.items[
          alreadyPlayedArray.push(Math.floor(Math.random() * 51))
        ].id.videoId
      });
    }
    console.log(alreadyPlayedArray);
    console.log(randomVideo);
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
            <PlayerBar randomVideo={this.getNextVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
