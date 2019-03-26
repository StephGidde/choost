import React, { Component } from "react";
import "../App.css";
import AuthService from "./auth/auth-service";
import Player from "./Player";
import PlaylistPlayer from "./PlaylistPlayer";
import axios from "axios";
import swal from "sweetalert";

class UserPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userInSession,
      playlistvideos: this.props.userInSession.playlistvideoids,
      q: false
    };
    this.service = new AuthService();
  }

  loadPlaylistvideo = event => {
    this.setState({
      q: event.target.id
    });
  };

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.userInSession.playlistvideoids !==
  //     prevProps.userInSession.playlistvideoids
  //   ) {
  //     this.setState({
  //       user: this.props.userInSession
  //     });
  //   }
  // }

  deletePlaylistVideo = event => {
    const user = this.props.userInSession;
    let videoToDelete = event.target.id;
    let filteredVideos = this.state.playlistvideos.filter(
      e => e !== videoToDelete
    );
    axios.post("http://localhost:5000/user_playlist", {
      videoToDelete,
      user
    });
    this.setState({
      playlistvideos: filteredVideos
    });
    swal({ title: "Deleted Video from Playlist!", icon: "success" });
  };

  render() {
    if (this.state.q) {
      // return <Player videoId={this.state.q} />;
      return (
        <PlaylistPlayer
          videoID={this.state.q}
          userInSession={this.state.user}
        />
      );
    }

    if (this.state.user) {
      return (
        <div>
          <div className="playlistHeading">
            <h4>This is your playlist</h4>
          </div>
          {this.state.playlistvideos.map((video, index) => (
            <div key={index} className="playlistVideo">
              <p>{index + 1}</p>
              <img
                alt="thumbnail"
                id={video}
                src={`https://i.ytimg.com/vi/${video}/default.jpg`}
                // onClick={this.loadPlaylistvideo}
                onClick={() => this.props.playlisthandler(video)}
              />
              <button
                id={video}
                className="button is-light"
                onClick={this.deletePlaylistVideo}
              >
                Delete Video
              </button>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default UserPlaylist;
