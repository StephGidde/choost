import React, { Component } from 'react';
import '../App.css';




class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
						</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;