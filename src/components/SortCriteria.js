import React from 'react';

const SortCriteria = (props) => {
  const className = (props.isActive) ? "mdl-layout__tab is-active mdl-shadow--4dp" : "mdl-layout__tab";

 return (
  <a onClick={() => {/*to be defined*/}} className={className}>
  {props.name}
  </a>
 );
};

export default SortCriteria; 
