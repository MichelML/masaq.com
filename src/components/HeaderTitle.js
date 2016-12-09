import React from 'react';

const HeaderTitle = (props) => (
        <span className="mdl-layout-title hide-mobile">
          {props.name || "maSAQ"}
        </span>
);

export default HeaderTitle; 
