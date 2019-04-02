import React, { Component } from "react";
import "../Header.css";

class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 80,
      headerEl = document.getElementById("app-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.resizeHeaderOnScroll);
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <header id="app-header">
            <div className="container clearfix">
              <h1 id="logo">CHOOST</h1>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
