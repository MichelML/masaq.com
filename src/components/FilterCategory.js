import React from 'react';
import Checkbox from './Checkbox';

const FilterCategory = (props) => {
    const values = (props.values) ? props.values : [];
    return (
        <fieldset className="mdl-grid" id={props.id}>
          <legend className="hide-legend">{props.categoryName}</legend>
          <div className="mdl-cell mdl-cell--10-col underline-border">
            <span className="filter-title">{props.categoryName}</span>
          </div>
          <div className="mdl-cell mdl-cell--10-col">
            {values.map(criteria => {
              const keyAndID = criteria.value.replace(/\s/g,'');
              return (
                <Checkbox key={keyAndID} id={keyAndID} name={criteria.value} value={criteria.value} description={criteria.value} count={criteria.NumberOfResults}/>
              ) 
            })}
          </div>
        </fieldset>
    );
};

export default FilterCategory;
