import React from 'react';

const SearchBar = (props) => (
          <form className="offset-search-bar">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
                 <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" id="search-bar" autoFocus />
                <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
              </div>
            </div>
          </form>

);

export default SearchBar; 
