import React from "react";
import PropTypes from "prop-types";

const CheckboxBase = ({name, label, id, required, ...props}) => {
  return (
    <div className="form-group__input">
      <label htmlFor={id || name} className="selection-control selection-control--checkbox">
        <span className="selection-control__input">
          <input {...props} id={id || name} name={name} type="checkbox" />
          <span className="icon selection-control__control" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <polyline points="2.1,8.5 6.2,12.4 13.9,5.1"></polyline>
            </svg>
          </span>
        </span>
        <span className="selection-control__label">{label}</span>
      </label>
    </div>
  );
}

CheckboxBase.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default CheckboxBase;