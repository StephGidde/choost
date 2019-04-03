import React, { Component } from "react";
import "../App.css";

class SearchBar extends Component {
  handleSearch = event => {
    event.preventDefault();
    let query = this.textInput.value;

    this.props.onSearch(query);
  };
  render() {
    return (
      <div className="searchBar-container">
        <form className="form-search" onSubmit={this.handleSearch}>
          <input
            ref={input => (this.textInput = input)}
            className=" input  is-warning "
            type="text"
            placeholder="Enter a keyword to get a random video"
          />
          <button className=" searchbutton button is-primary ">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
