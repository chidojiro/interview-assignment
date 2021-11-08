import React from "react";
import t from "prop-types";
import withFieldGroup from "@hoc/withFormGroup";

/**
 * A box which enables the user to select one or multiple options. See [here](https://randstad.design/components/core/forms/checkbox/)
 *
 */
const Checkbox = ({ id, label, capitalize, ...props }) => {
  const fieldProps = {
    id,
    ...props,
  };

  let fieldLabel = label;

  if (label && capitalize) {
    fieldLabel = label.charAt(0).toUpperCase() + label.slice(1);
  }

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
      <span className="selection-control__label">{fieldLabel}</span>
    </label>
  );
};

Checkbox.type = "checkbox";

Checkbox.propTypes = {
  id: t.string,
  label: t.string,
  capitalize: t.bool,
};

export default withFieldGroup(Checkbox);
