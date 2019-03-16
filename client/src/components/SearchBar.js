import React, { Component } from "react";
import "../App.css";


class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (event) => {
    event.preventDefault();
    let query = this.textInput.value;
    let languageFilter = this.dropLanguage.value
    let durationFilter = this.dropDuration.value

    this.props.onSearch(query, languageFilter, durationFilter);

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

          {/* Language */}
          <div className="field">
            <div className="control has-icons-left">
              <div className="select is-warning">
                <select ref={(select) => this.dropLanguage = select}>
                  <option value="eng">English</option>
                  <option value="de">German</option>
                </select>
                <div className="icon is-small is-left">
                  <i className="fas fa-globe"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Video Length */}
          <div className="field">
            <div className="control has-icons-left">
              <div className="select is-warning">
              <select ref={(select) => this.dropDuration = select}>

                  <option value = "any">Any</option>
                  <option value = "short">Short  4 Minutes</option>
                  <option value = "medium">Medium 4 to 20 Minutes</option>
                  <option value = "long">Long > 20 Minutes</option>
                </select>
                <div className="icon is-small is-left">
                  <i className="far fa-clock"></i>
                </div>
              </div>

            </div>
          </div>

        </form>
      </div>

    )

  }
}


export default SearchBar;
