import React from 'react';
import $ from 'jquery';
import Hash from '../utils/hash.js';

const ErrorCard = (props) => {

      return (
        <div className="error-card mdl-card mdl-cell--12-col mdl-shadow--4dp">
          <div className="mdl-card__title mdl-card--expand">
            <h4>
              {props.description}
            </h4>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={(e) => {$('#search-bar').val('').focus();Hash.setNewHash(e);}}>
              Nouvelle recherche
            </a>
            <br/>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={(e) => {
              $('#search-bar').val('');
              document.getElementById("filters").reset();
              $('#filters label').removeClass('is-checked');
              window.location.hash= 'aq=%40tpenspecial%3D%3D(%22En%2520sp%25C3%25A9cial%22)!!sortCriteria=relevancy';
            }}>
              Voir spéciaux courants
            </a>
            <br/>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" 
            onClick={() => {window.history.back();}}>
              Voir résultats précédents
            </a>
            <br/>
          </div>
        </div>
      );
};

export default ErrorCard; 
