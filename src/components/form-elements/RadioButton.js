import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({name, value, label, required, ...props}) => {
  return (
    <div className="form-group__input">
      <label htmlFor={`${name}-${value}`} className="selection-control selection-control--radio-button">
        <span className="selection-control__input">
          <input {...props} id={`${name}-${value}`} value={value} name={name} type="radio" />
          <span className="icon selection-control__control" aria-hidden="true"></span>
        </span>
        <span className="selection-control__label">
          {label && label.toLowerCase()}
        </span>
      </label>
    </div>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default RadioButton;