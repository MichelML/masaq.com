import React from 'react';
import Hash from '../utils/hash.js';

const Checkbox = (props) => {
    return (
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={props.id}>
          <input type="checkbox" id={props.id} name={props.name} value={props.value} onClick={Hash.setNewHash} className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label checkbox-text">{props.description}</span>
          <span className="mdl-checkbox__label checkbox-text">{` (${props.count || 0})`}</span>
        </label>
    );
}

export default Checkbox;
