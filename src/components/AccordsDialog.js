import React from 'react';

const AccordsDialog = (props) => {
    if (!props.accords) {
      return null;
    }

    const accords = props.accords.split(';').map((accord, index) => 
             <li className="mdl-list__item" key={`${props.tpCodeSAQ}-${index}`}>
              <span className="mdl-list__item-primary-content">
                {accord}
              </span>
             </li>
    );
    return (
        <dialog className="mdl-dialog" id={props.id}>
          <h6 className="mdl-dialog__title">{props.productName}</h6>
          <h6 className="mdl-dialog__title mdl-color-text--pink-900"><small>accords</small></h6>
          <div className="mdl-dialog__content">
            <ul className="mdl-list">
              {accords}
            </ul>
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" onClick={() => {props.closeDialog(props.id)}} className="mdl-button close">Fermer</button>
          </div>
        </dialog>
    );
}

export default AccordsDialog;
