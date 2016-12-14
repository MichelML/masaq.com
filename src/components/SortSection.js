import React from 'react';
import $ from 'jquery';
import SortCriteria from './SortCriteria.js';

const SortSection = (() => {
  let $sortTabs;
  function updateHashAndActiveTab(event) {
    let $target = $(event.target);
    if (!$sortTabs) {
      $sortTabs = $('.mdl-layout__tab');
    }
    
    if (!$(event.target).hasClass('is-active')) {
      $sortTabs.removeClass('is-active mdl-shadow--4dp');
      $target.parent().addClass('is-active mdl-shadow--4dp');
    }
    
  }


  return (props) => {
    if (props.sortCriteriaList) {
      return (
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect wine-bg" onClick={updateHashAndActiveTab}>
          {props.sortCriteriaList.map(criteria => {
                  return <SortCriteria key={criteria.name} id={criteria.name} name={criteria.name} isActive={criteria.isActive}/>
          })}
        </div>
      );
    } else {
      return null;
    }
  }
})();

export default SortSection; 
