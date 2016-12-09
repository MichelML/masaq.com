import React, { Component } from 'react';
import HeaderTitle from './HeaderTitle.js';
import Navigation from './Navigation.js';
import '../styles/NavBar.css';
class NavBar extends Component {
  render() {
    return (
      <header className="mdl-layout__header wine-bg">
        <div className="mdl-layout__header-row">
          <HeaderTitle/>
          <Navigation/>
        </div>
      </header>
    );
  }
}

export default NavBar;
