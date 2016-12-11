import React from 'react';

const FiltersMainTitle = (props) => {
  return (
        <span className="mdl-layout-title mdl-color-text--blue-grey-50">
          {props.name || "Critères de recherche"}
        </span>
  );
}
export default FiltersMainTitle;
