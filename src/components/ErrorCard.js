import React from 'react';

const ErrorCard = (props) => {

      return (
        <div className="error-card mdl-card mdl-cell--12-col mdl-shadow--4dp">
          <div className="mdl-card__title mdl-card--expand">
            <h4>
              {props.description}
            </h4>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Nouvelle recherche
            </a>
            <br/>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Accéder aux filtres
            </a>
            <br/>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Voir spéciaux courants
            </a>
            <br/>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Voir résultats précédents
            </a>
            <br/>
          </div>
        </div>
      );
};

export default ErrorCard; 
