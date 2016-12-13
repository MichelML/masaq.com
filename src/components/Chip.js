import React from 'react';

const Chip = (props) => {
    const shouldRender = (props.typeOfChips) ? true : false;

    if (!shouldRender) {
      return null;
    }

    const classes = `md-chip ${props.extraClasses || ""}`;
    return (
        <div className={classes}>
          <span className="md-chip-text">{props.chipText}</span>
        </div>
    );
}

export default Chip;
