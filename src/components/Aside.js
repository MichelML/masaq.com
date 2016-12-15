import React, { Component } from 'react';
import $ from 'jquery';
import Hash from '../utils/hash.js';
import FiltersForm from './FiltersForm';

class Aside extends Component {
  render() {
    return (
        <aside className="mdl-layout__drawer mdl-color--blue-grey-800">
          <div className="mdl-grid">
            <button id="reset-filters" 
              className="mdl-color--pink-900 mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" 
              onClick={(e) => {
                document.getElementById("filters").reset();
                $('#filters label').removeClass('is-checked');
                Hash.setNewHash(e);
              }}>
              Réinitialiser Filtres
            </button>
          </div>
          <FiltersForm groupByResults={this.props.groupByResults}/>
        </aside>
    );
  };
}

export default Aside;
