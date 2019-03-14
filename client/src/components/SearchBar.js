import React, { Component } from "react";
import "../App.css";


class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (event) => {
    event.preventDefault();
    let query = this.textInput.value;
    this.props.onSearch(query);
    
  }
  render() {

    return (
      <div className="searchBar-container">
        <form onSubmit={this.handleChange}>
          <input
            ref={(input) => this.textInput = input}
            className="input is-large is-warning"
            type="text"
            placeholder="Enter a keyword to get a random video" ></input>
          <button className="searchbutton button is-large is-primary is-outlined">
            Search
        </button>
        </form>
      </div>

    )

  }
}


export default SearchBar;
