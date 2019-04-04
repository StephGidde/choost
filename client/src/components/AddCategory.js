import React, { Component } from "react";
import "../App.css";
import swal from "sweetalert";
import axios from "axios";

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      showIcon: false,
      icons: [
        "fas fa-dog",
        "fas fa-male",
        "fas fa-female",
        "fas fa-globe",
        "fas fa-tv",
        "fas fa-play",
        "fas fa-laptop",
        "fas fa-hand-scissors",
        "fas fa-music",
        "fas fa-drum",
        "fas fa-motorcycle",
        "fas fa-horse",
        "fas fa-chess",
        "fas fa-dice",
        "fas fa-ghost",
        "fas fa-baby",
        "fas fa-feather-alt",
        "fas fa-hippo",
        "fas fa-robot",
        "fas fa-cookie",
        "fas fa-ice-cream"
      ]
    };
  }

  addCategory = event => {
    event.preventDefault();
    let q = this.searchInput.value;
    // this.searchInput.value
    let categoryName = this.nameInput.value;
    let categoryIcon = this.state.selectedOption;

    let user = this.props.userInSession;

    if (q && categoryName) {
      this.props.makeFormAppear();
      axios
        .post(process.env.REACT_APP_API_URL || "http://localhost:5000/user-categories", {
          q,
          categoryName,
          categoryIcon,
          user
        })
        .then(res => {
          this.props.addCategory(q, categoryName, categoryIcon);
          swal({ title: "Added to Your Categories!", icon: "success" });
        });

      // this.closeWindow();
    } else {
      swal({ title: "Fields can not be empty!", icon: "warning" });
      this.setState({
        show: true
      });
    }
  };

  closeWindow = event => {
    this.setState({
      show: this.state.show ? false : true
    });
  };

  changeIconColor = event => {
    let mir = (event.target.style.color = "grey");
    this.setState({
      showIcon: this.state.showIcon ? false : true
    });
  };
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

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
            <p className="modal-card-title">Add Your Own Category</p>
          </header>
          <section className="modal-card-body">
            {/* Category Name */}
            <div className="field">
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
            </div>
            {/* Search */}
            <div className="field">
              <label className="label is-medium">Search</label>
              <div className="control">
                <input
                  value= {this.props.keyword? this.props.keyword:null}
                  ref={input => (this.searchInput = input)}
                  className="input is-medium is-warning"
                  type="text"
                  placeholder="Enter as many keywords as you like"
                />
              </div>
            </div>
            {/* Icon */}
            <div className="field">
              <label className="label is-medium">Choose an Icon</label>

              <div class="control" onChange={this.handleOptionChange}>
                {this.state.icons.map((icon, index) => (
                  <label key={index} className="select-icon radio" for={icon}>
                    <input
                      onChange={this.changeIconColor}
                      name="select-icon"
                      type="radio"
                      id={icon}
                      value={icon}
                    />
                    <i className={`${icon}`} onClick={this.changeIconColor} />
                    {/* {this.state.showIcon ? icon : `selectedIcon ${icon}`}/> */}
                  </label>
                ))}
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className=" searchbutton button is-primary is-outlined"
              onClick={e => {
                this.addCategory(e);
              }}
            >
              Save changes
            </button>
            <button
              className="button"
              onClick={e => {
                this.closeWindow(e);
                this.props.makeFormAppear(e);
              }}
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default AddCategory;
