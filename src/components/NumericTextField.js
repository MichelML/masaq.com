import React from 'react';

const NumericTextField = (props) => {
  return (
        <div className="mdl-textfield mdl-js-textfield filter-text-field">
          <input className="mdl-textfield__input" type="text" pattern="^[0-9]*(\.[0-9]+)?" id={props.id}/>
          <label className="mdl-textfield__label" htmlFor={props.id}>{props.description}</label>
          <span className="mdl-textfield__error">entrer un nombre positif sans espaces</span>
        </div>
  );
}

export default NumericTextField;
