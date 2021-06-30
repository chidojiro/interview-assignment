import React from "react";
import t from "prop-types";
import withFieldGroup from "../hoc/withFormGroup";

const Checkbox = ({ id, label, ...props }) => {
  const fieldProps = {
    id,
    ...props,
  };

  return (
    <label htmlFor={id} className="selection-control selection-control--checkbox">
      <span className="selection-control__input">
        <input type="checkbox" {...fieldProps} />
        <span className="icon selection-control__control" aria-hidden="true">
          <svg viewBox="0 0 16 16">
            <polyline points="2.1,8.5 6.2,12.4 13.9,5.1"></polyline>
          </svg>
        </span>
      </span>
      <span className="selection-control__label">{label}</span>
    </label>
  );
};

Checkbox.type = "checkbox";

Checkbox.propTypes = {
  id: t.string,
  label: t.string,
};

export default withFieldGroup(Checkbox);
