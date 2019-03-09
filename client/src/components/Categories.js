import React, { Component } from "react";
import "../App.css";

class Categories extends Component {
  render() {
    return (
      <div>
        <div className=" columns is-mobile categorie-container ">
          <section className="box column " id="categorie-1">
            <i className="fas fa-book" /> <br />
            Documentary
          </section>
          <section className="box column" id="categorie-2">
            <i className="far fa-smile-beam" /> <br />
            Comedy
          </section>
          <section className="box column" id="categorie-3">
            <i className="fas fa-skull-crossbones" /> <br />
            Epic Fail
          </section>
          <section className="box column" id="categorie-4">
            {" "}
            <i className="fas fa-film" /> <br />
            Movie Trailer
          </section>
          <section className="box column" id="categorie-5">
            {" "}
            <i className="fas fa-cat" /> <br />
            Cat Content
          </section>
        </div>
      </div>
    );
  }
}

export default Categories;
