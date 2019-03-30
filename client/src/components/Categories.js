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
          q: "workout"
        },
        {
          categoryNr: "7",
          categoryIcon: "fas fa-spa",
          categoryName: "Yoga",
          q: "yoga"
        },
        {
          categoryNr: "8",
          categoryIcon: "fas fa-carrot",
          categoryName: "Cooking",
          q: "a"
        }
      ]
    };
  }
  showAddCategory = event => {
    this.setState({
      showAddCategoryForm: this.state.show ? false : true
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
  render() {
    return (
      <div>
        {/* will show the add Category Form */}
        {this.state.showAddCategoryForm && (
          <AddCategory addCategory={this.addCategory} />
        )}

        {/* add category tile */}
        <div className="is-mobile categorie-container">
          <section
            className="box column category"
            // id="categorie-6"
            onClick={this.showAddCategory}
          >
            <i className="fas fa-plus" />
            <br />
            Add Category
          </section>

          {/* maps over section array and shows all sections */}
          {this.state.sections.map(section => (
            <section
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
        </div>
      </div>
    );
  }
}

export default Categories;
