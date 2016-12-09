import React, { Component } from 'react';
import NavBar from './NavBar';
import Drawer from './Drawer';

class Main extends Component {
  render() {
    return (
      <div className="demo-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <NavBar/>
        <Drawer/>
      </div>
    )
  }
} 

export default Main;
