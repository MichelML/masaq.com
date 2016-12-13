import React from 'react';

const MaterialButton = (props) => {
  return (
    <button id={props.id} onClick={props.doOnClick} className="mdl-button mdl-button--icon mdl-button--colored" disabled={props.accord}>
      <i className="material-icons">{props.icon}</i>
    </button>
  );
}

export default MaterialButton;
