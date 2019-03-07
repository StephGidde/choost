
import React, { Component } from 'react';
import '../App.css';


class SearchBar extends Component {
    render() {
        return (
            <div class="searchBar-container">
				<input class="input is-large is-warning" type="text" placeholder="Enter a keyword to get a random video"></input> 
			<a class="button is-large  is-outlined">Search</a>
		</div>
        );
    }
}

export default SearchBar;



