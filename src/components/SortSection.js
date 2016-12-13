import React from 'react';
import SortCriteria from './SortCriteria.js';

const SortSection = (props) => {
  if (props.sortCriteriaList) {
    return (
      <div className="mdl-layout__tab-bar mdl-js-ripple-effect wine-bg">
        {props.sortCriteriaList.map(criteria => {
                return <SortCriteria key={criteria.name} name={criteria.name} isActive={criteria.isActive}/>
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default SortSection; 
