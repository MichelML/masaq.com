import React from 'react';

const SortCriteria = (props) => {
  const className = (props.isActive) ? "mdl-layout__tab is-active mdl-shadow--4dp" : "mdl-layout__tab";
  const arrowUp = props.name !== "Pertinence" ? (<i className="material-icons tab-icon">keyboard_arrow_up</i>) : null;

 return (
  <a id={props.name} className={className}>
  {props.name}{arrowUp}
  </a>
 );
};

export default SortCriteria; 
