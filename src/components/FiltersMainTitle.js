import React from 'react';

const FiltersMainTitle = (props) => {
  return (
      <span className="mdl-layout-title drawer-title">{props.name || "Filtres de recherche"}</span>
  );
}
export default FiltersMainTitle;