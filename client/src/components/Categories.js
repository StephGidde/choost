import React, { Component } from "react";
import "../App.css";
import AddCategory from "./AddCategory";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      show: false,
      sections: [
        {
          categoryNr: "1",
          categoryIcon: "fas fa-book",
          categoryName: "Documentary",
          q: "documentation bbc"
        },
        {
          categoryNr: "2",
          categoryIcon: "far fa-smile-beam",
          categoryName: "Comedy",
          q: "heute show böhmermann comedy"
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
        }
      ]
    };
  }
  showAddCategory = event => {
    this.setState({
      show: this.state.show ? false : true
    });
  };

  addCategory = (q, categoryName, categoryIcon) => {
    this.setState({
      q: q,
      categoryName: categoryName,
      categoryIcon: categoryIcon,
      sections:this.state.sections.concat([{categoryIcon,categoryName,q}])
    });
  };
  render() {

    return (
      <div>
        {/* will show the add Category Form */}
        {this.state.show && <AddCategory addCategory={this.addCategory} />}

        {/* add category tile */}
        <div className=" columns is-mobile categorie-container">
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
              className="box column category" 
              // id = "categorie-1"
              // `categorie- ${section.categoryNr}`
              onClick={event => {
                this.props.onSearch(section.q);
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
