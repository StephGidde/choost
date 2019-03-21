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

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // parameters for the search that can be changed by the user
      videoDuration: "any", //short / medium / long / any
      videoId: false,
      relevanceLanguage: "de",
      isloading: true,
      results: {}
    };
  }

  // componentWillReceiveProps(newProps) ComponentDidUpdate better!

  componentDidMount(props) {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: "snippet", //by default
          q: this.props.keyword,
          videoDuration: this.state.videoDuration,
          maxResults: "50",
          videoEmbeddable: true, // search to only videos that can be embedded into a webpage
          type: "video", //required by parameter "videoEmbeddable"
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          loading: true
        }
      })

      .then(res => {
        const randomVideo = _.shuffle(alreadyPlayedArray)[0];
        alreadyPlayedArray = alreadyPlayedArray.filter(
          item => item !== randomVideo
        );
        console.log(randomVideo);
        this.setState({ videoId: res.data.items[randomVideo].id.videoId });
        this.setState({ results: res.data });
        this.setState({ isloading: false });
        console.log(this.state.results);
        console.log(alreadyPlayedArray);
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
          <div class="video-player">
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
