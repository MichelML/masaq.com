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
          <button id="to-top-aside" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" onClick={() => {
            $('aside').scrollTop(0);
          }}>
            <i className="material-icons">keyboard_arrow_up</i>
          </button>
        </aside>
    );
  };
}

export default Aside;
