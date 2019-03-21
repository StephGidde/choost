import React, { Component } from "react";
import "../App.css";

class Categories extends Component {
  handleCat = event => {
    event.preventDefault();
    let query = "cat fun";

    this.props.onSearch(query);
  };

  handleMovie = event => {
    event.preventDefault();
    let query = "kinockeck trailer";

    this.props.onSearch(query);
  };

  handleFail = event => {
    event.preventDefault();
    let query = "fail";

    this.props.onSearch(query);
  };

  handleComedy = event => {
    event.preventDefault();
    let query = "heute show böhmermann comedy";

    this.props.onSearch(query);
  };

  handleDocu = event => {
    event.preventDefault();
    let query = "documentation bbc";

    this.props.onSearch(query);
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
