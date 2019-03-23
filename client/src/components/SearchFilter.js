import React, { Component } from "react";
import "../App.css";

class SearchFilter extends Component {
  handleSearch = event => {
    event.preventDefault();
    let languageFilter = this.dropLanguage.value;
    let durationFilter = this.dropDuration.value;

    this.props.onFilter(languageFilter, durationFilter);
  };
  render() {
    return (
      <div className="searchBar-container">
        <form onChange={this.handleSearch}>
          {/* Language */}
          <div className="field">
            <div className="control has-icons-left">
              <div className="select is-warning">
                <select ref={select => (this.dropLanguage = select)}>
                  <option value="en">English</option>
                  <option value="de">German</option>
                </select>
                <div className="icon is-small is-left">
                  <i className="fas fa-globe" />
                </div>
              </div>
            </div>
          </div>
          {/* Video Length */}
          <div className="field">
            <div className="control has-icons-left">
              <div className="select is-warning">
                <select ref={select => (this.dropDuration = select)}>
                  <option value="any">Any</option>
                  <option value="short">Short 4 Minutes</option>
                  <option value="medium">Medium 4 to 20 Minutes</option>
                  <option value="long">Long > 20 Minutes</option>
                </select>
                <div className="icon is-small is-left">
                  <i className="far fa-clock" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchFilter;
