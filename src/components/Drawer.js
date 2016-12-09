import React, { Component } from 'react';
import FiltersMainTitle from './FiltersMainTitle';
import FiltersForm from './FiltersForm';

class Drawer extends Component {
  render() {
    return (
        <aside className="mdl-layout__drawer mdl-color--pink-900">
          <FiltersMainTitle/>
          <FiltersForm/>
        </aside>
    );
  };
}

export default Drawer;
