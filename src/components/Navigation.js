import React, { Component } from 'react';
import SearchBar from './SearchBar.js';

class Navigation extends Component {
  render() {
    return (
        <nav className="mdl-navigation">
          <SearchBar/>
        </nav>
    );
  }
}

export default Navigation;
