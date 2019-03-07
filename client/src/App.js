import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Categories from "./components/Categories"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class=" app-name title">CHOOST</div>
        <SearchBar />
        <div class="intro-container">
          <span> or <br /> choose a category:</span>
        </div>
        <Categories />
        <div class="breadcrumb user-playlist" >
          <p>Your Playlist</p>
          <ul>
            <li><a href="#">Video 1</a></li>
            <li><a href="#">Video 2</a></li>
            <li><a href="#">Video 2</a></li>
          </ul>
        </div>


      </div>
    );
  }
}

export default App;
