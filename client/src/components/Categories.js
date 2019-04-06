import React, { Component } from "react";
import "../App.css";
import AddCategory from "./AddCategory";
import AuthService from "./auth/auth-service";
import axios from "axios";
import swal from "sweetalert";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userInSession,
      q: "",
      showAddCategoryForm: false,
      userCategories: this.props.userInSession
        ? this.props.userInSession.categories
        : [],
      loading: true,
      sections: [
        {
          categoryNr: "1",
          categoryIcon: "fas fa-book",
          categoryName: "Documentary",
          q: "a",
          // q: "documentation bbc",
          image: "../images/docu1.jpg"
        },
        {
          categoryNr: "2",
          categoryIcon: "far fa-smile-beam",
          categoryName: "Comedy",
          q: "a"
        },
        {
          categoryNr: "3",
          categoryIcon: "fas fa-skull-crossbones",
          categoryName: "Epic Fail",
          q: "fail"
        },
        {
          categoryNr: "4",
          categoryIcon: "fas fa-film",
          categoryName: "Movie Trailer",
          q: "kinockeck trailer"
        },
        {
          categoryNr: "5",
          categoryIcon: "fas fa-cat",
          categoryName: "Cats",
          q: "cat fun"
        },
        {
          categoryNr: "6",
          categoryIcon: "fas fa-heartbeat",
          categoryName: "Workout",
          q: "workout sport"
        },
        {
          categoryNr: "7",
          categoryIcon: "fas fa-spa",
          categoryName: "Yoga",
          q: "a"
        },
        {
          categoryNr: "8",
          categoryIcon: "fas fa-carrot",
          categoryName: "Cooking",
          q: "a",
          showpopup: false
        },
        {
          categoryNr: "9",
          categoryIcon: "fas fa-car",
          categoryName: "Cars",
          q: "a",
          showpopup: false
        },
        {
          categoryNr: "10",
          categoryIcon: "fas fa-cogs",
          categoryName: "Tech",
          q: "a",
          showpopup: false
        },
        {
          categoryNr: "11",
          categoryIcon: "fas fa-headphones",
          categoryName: "Music",
          q: "BBCMusic npr bbcradio1",
          showpopup: false
        },
        {
          categoryNr: "12",
          categoryIcon: "far fa-gem",
          categoryName: "Beauty",
          q: "make up tutorial",
          showpopup: false
        },
        {
          categoryNr: "13",
          categoryIcon: "fas fa-cut",
          categoryName: "DIY",
          q: "makerist DIY-eule pattydoo",
          showpopup: false
        }
      ]
    };
    this.service = new AuthService();
  }

  // componentDidMount()
  // {this.setState((props)=>({
  //   userCategories:this.props.userInSession.categories
  // })
  // )}

  showAddCategory = event => {
    if (this.props.userInSession) {
      this.setState({
        showAddCategoryForm: this.state.showAddCategoryForm ? false : true
      });
    } else {
      swal({
        title: "You need to have a user account to do that.",
        text: "Would you like to sign up?",
        icon: "warning",
        button: "Yes, sign me up!"
      }).then(function() {
        window.location.href = "/signup";
      });
    }
  };

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

  deleteCategory = event => {
    event.stopPropagation();
    console.log(event.currentTarget.id);

    const user = this.props.userInSession;
    let categoryToDelete = event.currentTarget.id;
    let filteredCategories = this.state.userCategories.filter(
      e => e.q !== categoryToDelete
    );
    axios.post(
      process.env.REACT_APP_API_URL || "http://localhost:5000/user-categories",
      {
        categoryToDelete,
        user
      }
    );
    this.setState({
      userCategories: filteredCategories
    });
    swal({ title: "Category Removed", icon: "success" });
  };

  render() {
    return (
      <div>
        {/* will show the add Category Form */}
        {this.state.showAddCategoryForm && (
          <AddCategory
            addCategory={this.addCategory}
            makeFormAppear={this.showAddCategory}
            userInSession={this.props.userInSession}
          />
        )}

        {/* add category tile */}
        <div className="is-mobile categorie-container">
          <section
            className="box column category"
            // id="categorie-6"
            onClick={this.showAddCategory}
            disabled
          >
            <i className="fas fa-plus" />
            <br />
            Add Category
          </section>
          {/* Categories that come from us */}

          {/* maps over section array and shows all sections */}
          {this.state.sections.map((section, index) => (
            <section
              key={index}
              className={`box column category category-${section.categoryNr}`}
              onClick={event => {
                this.props.onSearch(section.q, section.categoryName);
              }}
            >
              <i className={section.categoryIcon} />
              <br />
              {section.categoryName}
            </section>
          ))}
          {/* Categories that come from the user */}
          {this.props.userInSession &&
            this.state.userCategories.map((section, index) => (
              // <div className= "user-category">
              <section
                key={index}
                className="box column category"
                onClick={event => {
                  // console.log(section._id);
                  this.props.onSearch(section.q, section.categoryName);
                }}
              >
                <button
                  id={section.q}
                  className="button is-light is-small delete-button"
                  onClick={this.deleteCategory}
                >
                  <i className="fas fa-trash-alt" />
                </button>
                <i className={section.categoryIcon} />
                <br />
                {section.categoryName}
              </section>
              // </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Categories;
