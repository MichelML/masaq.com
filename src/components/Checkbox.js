import React from 'react';

const Checkbox = (props) => {
    return (
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={props.id}>
          <input type="checkbox" id={props.id} className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">{props.description}</span>
        </label>
    );
}

export default Checkbox;
