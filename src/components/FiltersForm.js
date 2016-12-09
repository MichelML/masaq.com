import React, { Component } from 'react';
import Checkbox from './Checkbox';
import PriceSlider from './PriceSlider';

class FiltersForm extends Component {
  render() {
    return (
      <form id="filters" className="white-text">
        <div className="mdl-grid">
          <fieldset id="filters-generic">
            <div className="mdl-cell mdl-cell--offset-1 mdl-cell--10-col">
              <span className="mdl-layout-title"><small>Généraux</small></span>
            </div>
            <div className="mdl-cell mdl-cell--offset-1 mdl-cell--10-col">
              <Checkbox description="En spécial" id="specials-checkbox"/>
            </div>
            <div className="mdl-cell mdl-cell--offset-1 mdl-cell--10-col">
              <Checkbox description="En succursale" id="en-succursale-checkbox"/>
            </div>
            <div className="mdl-cell mdl-cell--offset-1 mdl-cell--10-col">
              <Checkbox description="En ligne" id="en-ligne-checkbox"/>
            </div>
            <div className="mdl-cell mdl-cell--offset-1 mdl-cell--10-col">
              <PriceSlider description="prix" id="price-slider"/>
            </div>
          </fieldset>
        </div>
      </form>
    );
  };
}

export default FiltersForm;
