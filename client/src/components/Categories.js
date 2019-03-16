import React, { Component } from "react";
import "../App.css";
import Player from "./Player";

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  handleCat = event => {
    event.preventDefault();
    let query = "cat fun";
    let languageFilter = "en"
    let durationFilter = "any"
    this.props.onSearch(query, languageFilter, durationFilter);
  };

  handleMovie = event => {
    event.preventDefault();
    let query = "kinockeck trailer";
    let languageFilter = "en"
    let durationFilter = "any"
    this.props.onSearch(query, languageFilter, durationFilter);
  };

  handleFail = event => {
    event.preventDefault();
    let query = "fail";
    let languageFilter = "en"
    let durationFilter = "any"
    this.props.onSearch(query, languageFilter, durationFilter);
  };

  handleComedy = event => {
    event.preventDefault();
    let query = "heute show böhmermann comedy";
    let languageFilter = "en"
    let durationFilter = "any"
    this.props.onSearch(query, languageFilter, durationFilter);
  };

  handleDocu = event => {
    event.preventDefault();
    let query = "documentation bbc";
    let languageFilter = "en"
    let durationFilter = "any"
    this.props.onSearch(query, languageFilter, durationFilter);
  };

  render() {

    return (
      <div>
        <div className=" columns is-mobile categorie-container">
          <section
            className="box column "
            id="categorie-1"
            onClick={this.handleDocu}
          >
            <i className="fas fa-book" /> <br />
            Documentary
          </section>
          <section
            className="box column"
            id="categorie-2"
            onClick={this.handleComedy}
          >
            <i className="far fa-smile-beam" /> <br />
            Comedy
          </section>
          <section
            className="box column"
            id="categorie-3"
            onClick={this.handleFail}
          >
            <i className="fas fa-skull-crossbones" /> <br />
            Epic Fail
          </section>
          <section
            className="box column"
            id="categorie-4"
            onClick={this.handleMovie}
          >
            <i className="fas fa-film" /> <br />
            Movie Trailer
          </section>

          <section
            className="box column"
            id="categorie-5"
            onClick={this.handleCat}
          >
            <i className="fas fa-cat" /> <br />
            Cat Content
          </section>
        </div>
      </div>
    );
  }
}

export default Categories;
