import React, { Component } from 'react';
import Checkbox from './Checkbox';
import NumericTextField from './NumericTextField';

class FiltersForm extends Component {
  render() {
    return (
      <form id="filters" className="white-text">
        <div className="mdl-grid" id="filters-generic">
            <div className="mdl-cell mdl-cell--10-col">
              <span className="filter-title">Généraux</span>
            </div>
            <div className="mdl-cell mdl-cell--10-col">
              <Checkbox description="En spécial" id="specials-checkbox"/>
            </div>
            <div className="mdl-cell mdl-cell--10-col">
              <Checkbox description="En succursale" id="en-succursale-checkbox"/>
            </div>
            <div className="mdl-cell mdl-cell--10-col">
              <Checkbox description="En ligne" id="en-ligne-checkbox"/>
            </div>
            <div className="mdl-cell">
              <h6 className="filter-subtitle">Prix:</h6>
              <NumericTextField description="minimum" id="prix-minimum"/>
              <span className="price-interval-text">à</span>
              <NumericTextField description="maximum" id="prix-maximum"/>
            </div>
        </div>
      </form>
    );
  };
}

export default FiltersForm;
