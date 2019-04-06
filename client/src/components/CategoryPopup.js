import React, { Component } from "react";
import "../App.css";

class CategoryPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  addCategoryDetails = event => {
    event.preventDefault();
    let q = this.nameInput.value;
    let categoryName = this.searchInput.value;
    let categoryIcon = this.state.selectedOption;
    this.props.addCategory(q, categoryName, categoryIcon);
    this.closeWindow();
  };

  closeWindow = event => {
    this.setState({
      show: this.state.show ? false : true
    });
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };
  submitSearch = () => {};
  render() {
    return (
      <div
        className={
          this.state.show ? "modal is-clipped is-active" : "modal is-clipped"
        }
      >
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">CATEGORY POPUP</p>
          </header>
          <form onChange={this.handleSearch}>
            <section className="modal-card-body">
              <div className="field">
                <label className="label is-medium">Select language</label>
                <div className="control">
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
                </div>
              </div>
            </section>
            {/* <section className="modal-card-body">
            {/* Category Name */}
            {/* <div className="field">
              <label className="label is-medium">Category Name</label>
              <div className="control">
              <input
              ref={input => (this.nameInput = input)}
              className="input is-medium is-warning"
              type="text"
              placeholder="Enter a Category Name"
              required
              />
              </div>
            </div> */}
            {/* Search */}
            {/* <div className="field">
              <label className="label is-medium">Search</label>
              <div className="control">
              <input
              ref={input => (this.searchInput = input)}
              className="input is-medium is-warning"
              type="text"
              placeholder="Enter as many keywords as you like"
              required
              />
              </div>
              </div>
              
            </section>  */}
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onSubmit={this.submitSearch}
              >
                Search
              </button>
              <button className="button" onClick={this.closeWindow}>
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

export default CategoryPopup;
