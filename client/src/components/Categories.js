import React, { Component } from "react";
import "../App.css";
import AddCategory from "./AddCategory";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      showAddCategoryForm: false,
      sections: [
        {
          categoryNr: "1",
          categoryIcon: "fas fa-book",
          categoryName: "Documentary",
          q: "a",
          showpopup: true
        },
        {
          categoryNr: "2",
          categoryIcon: "far fa-smile-beam",
          categoryName: "Comedy",
          q: "a",
          showpopup: false
        },
        {
          categoryNr: "3",
          categoryIcon: "fas fa-skull-crossbones",
          categoryName: "Epic Fail",
          q: "fail",
          showpopup: false
        },
        {
          categoryNr: "4",
          categoryIcon: "fas fa-film",
          categoryName: "Movie Trailer",
          q: "kinockeck trailer",
          showpopup: false
        },
        {
          categoryNr: "5",
          categoryIcon: "fas fa-cat",
          categoryName: "Cats",
          q: "cat fun",
          showpopup: false
        },
        {
          categoryNr: "6",
          categoryIcon: "fas fa-heartbeat",
          categoryName: "Workout",
          q: "workout",
          showpopup: false
        },
        {
          categoryNr: "7",
          categoryIcon: "fas fa-spa",
          categoryName: "Yoga",
          q: "yoga",
          showpopup: false
        },
        {
          categoryNr: "8",
          categoryIcon: "fas fa-carrot",
          categoryName: "Cooking",
          q: "a",
          showpopup: false
        }
      ]
    };
  }
  showAddCategory = event => {
    this.setState({
      showAddCategoryForm: this.state.showAddCategoryForm ? false : true
    });
  };

  addCategory = (q, categoryName, categoryIcon) => {
    this.setState({
      q: q,
      categoryName: categoryName,
      categoryIcon: categoryIcon,
      sections: this.state.sections.concat([{ categoryIcon, categoryName, q }]),
      showAddCategoryForm: false
    });
  };

  goToPlayer = event => {
    event.preventDefault();
    let section = this.state.sections.filter(el => {
      return el.categoryName === event.target.value;
    });
    return this.props.onSearch(section[0].q, event.target.value);
  };

  render() {
    return (
      <div>
        {/* will show the add Category Form */}
        {this.state.showAddCategoryForm && (
          <AddCategory
            closeWindow={this.showAddCategory}
            addCategory={this.addCategory}
          />
        )}

        {/* add category tile */}
        <div className="is-mobile categorie-container">
          <button
            className="box column category"
            // id="categorie-6"
            onClick={this.showAddCategory}
          >
            <i className="fas fa-plus" />
            <br />
            Add Category
          </button>

          {/* maps over section array and shows all sections */}
          {this.state.sections.map((section, i) => (
            <button
              key={i}
              value={section.categoryName}
              className={`box column category category-${section.categoryNr}`}
              onClick={this.goToPlayer}
            >
              <i
                className={section.categoryIcon}
                style={{ pointerEvents: "none", cursor: "default" }}
              />
              <br />
              {section.categoryName}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
