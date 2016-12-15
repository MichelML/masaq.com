import React from 'react';
import $ from 'jquery';
import Hash from '../utils/hash.js';

const SearchBar = (props) => (
          <form className="offset-search-bar" onSubmit={(e) => {e.preventDefault();return false;}}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
                 <i className="material-icons" onClick={
                    () => {
                      let searchBar = document.getElementById('search-bar');
                      if (searchBar.innerHTML) {
                        document.getElementById('search-bar').focus();
                      } else {
                        searchBar.focus();
                      }
                    }
                  }>search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" placeholder="Chercher tous les produits"  type="text" id="search-bar" 
                       onKeyUp={(e) => {
                                  Hash.setNewHash(e);
                                  if (e.keyCode === 13) {
                                    $(e.target).blur();
                                  }
                                }} autoFocus autoComplete/>
                <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
              </div>
            </div>
          </form>

);

export default SearchBar; 
