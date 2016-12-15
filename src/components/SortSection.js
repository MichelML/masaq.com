import React from 'react';
import $ from 'jquery';
import Hash from '../utils/hash.js';
import SortCriteria from './SortCriteria.js';

const SortSection = (() => {
  let $sortTabs;
  function updateHashAndActiveTab(event) {
    // a ripple effect span is actually clicked
    // when a tab is clicked, therefore we need
    // to get the parent of the event to make sure
    // we catch a click on a tab
    event.preventDefault();
    let $target = $(event.target).parent();
    if (!$sortTabs) {
      $sortTabs = $('.mdl-layout__tab');
    }
    
    if (!$target.hasClass('is-active')) {
      $sortTabs.removeClass('is-active mdl-shadow--4dp');
      $target.addClass('is-active mdl-shadow--4dp');
    } 
    else if ($target.text() !== "Pertinence") {
      let $targetIcon = $target.find('.tab-icon');
      if ($targetIcon.text() === "keyboard_arrow_up") {
        $targetIcon.text("keyboard_arrow_down");
      } 
      else {
        $targetIcon.text("keyboard_arrow_up");
      }
    }
    
  }


  return (props) => {
    if (props.sortCriteriaList) {
      return (
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect wine-bg" onClick={(e) => {updateHashAndActiveTab(e);Hash.setNewHash(e);}}>
          {props.sortCriteriaList.map(criteria => {
                  return <SortCriteria key={criteria.name} isActive={criteria.isActive || false} name={criteria.name}/>
          })}
        </div>
      );
    } else {
      return null;
    }
  }
})();

export default SortSection; 
