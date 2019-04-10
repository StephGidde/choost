import React, { Component } from "react";
import "../App.css";
import nextVideoIMG from "../images/next.png";
import fbIMG from "../images/facebook.png";
import twitterIMG from "../images/twitter.png";
import addToPlaylistIMG from "../images/add.png";
import axios from "axios";
import swal from "sweetalert";
import AddCategory from "./AddCategory";
import { Link, withRouter } from "react-router-dom"; // withRouter erlaubt, dass Route-Daten (zB browser history) mit-exportiert werden; das ist bei Choost zB wichtig für den redirect zu "/" nach signup und login mit this.props.history.push("/");


class PlayerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddCategoryForm: false,
      userCategories: this.props.userInSession
        ? this.props.userInSession.categories
        : []
    };
  }

  errorUserAcc = () => {
    swal({
      title: "You need to have a user account to do that.",
      text: "Would you like to sign up?",
      icon: "warning",
      button: "Yes, sign me up!"
    }).then(function() {
      window.location.href = "/signup";
    });
  };

  showAddCategory = event => {
    if (this.props.userInSession) {
      this.setState({
        showAddCategoryForm: this.state.showAddCategoryForm ? false : true
      });
    } else {
      this.errorUserAcc();
    }
  };

  addToPlaylist = event => {
    if (this.props.userInSession) {
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
    } else {
      this.errorUserAcc();
    }
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
  addCategory = (q, categoryName, categoryIcon) => {
    this.setState({
      q: q,
      categoryName: categoryName,
      categoryIcon: categoryIcon,
      userCategories: this.state.userCategories.concat([
        { categoryIcon, categoryName, q }
      ]),
      showAddCategoryForm: false
    });
  };

  render() {
    return (
      <div>
        {this.state.showAddCategoryForm && (
          <AddCategory
            keyword={this.props.keyword}
            addCategory={this.addCategory}
            userInSession={this.props.userInSession}
           makeFormAppear={this.showAddCategory}
            />
            )
        
        }
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

{this.props.keyword!=="a"&& (<button
            id="saveSearch"
            className=" pointer button is-rounded"
            onClick={this.showAddCategory}
          >
            Save Search
          </button>)}

          <button
            id="goBack"
            className=" pointer button is-rounded"
            onClick={this.props.goBackFunction}
          >
            Go back
          </button>
          
          <img
            src={nextVideoIMG}
            alt="next Video Button"
            id="nextVideoIMG"
            className="pointer"
            onClick={
              this.props.keyword === "a"
                ? this.props.newVideo
                : this.props.randomVideo
            }
          />
        </div>
      </div>
    );
  }
}

export default PlayerBar;
