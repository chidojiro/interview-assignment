import React from "react";
import t from "prop-types";
import withFieldGroup from "@hoc/withFormGroup";

/**
 * A box which enables the user to select one or multiple options. See [here](https://randstad.design/components/core/forms/checkbox/)
 *
 */
// Add unused props. Some of the props are comming from the withFieldGroup HOC.
/* eslint-disable no-unused-vars */
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
  // Comming from withFieldGroup HOC
  /** Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label" */
  label: t.string,
  name: t.string,
  /** If not provided, will be generated from `name` */
  id: t.string,
  error: t.string,
  description: t.string,
  required: t.oneOfType([t.bool, t.string]),
  readOnly: t.bool,
  capitalize: t.bool,
  children: t.any,
  optionalLabel: t.string,
  formGroupClass: t.string,
};

export default withFieldGroup(Checkbox);
