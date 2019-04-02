import React, { Component } from "react";
import "../App.css";
import _ from "lodash";
import Spinner from "./Spinner";
import PlayerBar from "./PlayerBar";
require("dotenv").config();

class PlaylistPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.videoID,
      isloading: true,
      user: this.props.userInSession
    };
  }

  componentDidMount(props) {
    this.setState({ isloading: false });
  }

  nextVideo = () => {
    let randomPlaylistVideo = _.shuffle(this.state.user.playlistvideoids);
    this.setState({
      videoId: randomPlaylistVideo
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
              userInSession={this.props.userInSession}
              nextVideo={this.nextVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistPlayer;
