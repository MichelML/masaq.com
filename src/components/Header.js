import React, { Component } from 'react';
import HeaderTitle from './HeaderTitle.js';
import SearchBar from './SearchBar.js';
import SortSection from './SortSection.js';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="mdl-layout__header wine-bg">
        <div className="mdl-layout__header-row">
          <HeaderTitle/>
          <nav className="mdl-navigation">
            <SearchBar/>
          </nav>
        </div>
        <SortSection sortCriteriaList={[{name:"Alphabétique"},{name:"Pertinence", isActive:true}, {name:"Prix"}, ]}/>
      </header>
    );
  }
}

export default Header;
