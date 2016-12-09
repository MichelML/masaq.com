import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import './styles/NavBar.css';
import './index.css';

ReactDOM.render( 
  <div className="demo-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <NavBar/>
  </div>,
  document.getElementById('root')
);
