import React from "react";
import t from "prop-types";
import withFieldGroup from "@hoc/withFormGroup";

/**
 * A box which enables the user to select one or multiple options. See [here](https://randstad.design/components/core/forms/checkbox/)
 *
 */
const Checkbox = ({ id, label, capitalize, required, ...props }) => {
  const fieldProps = {
    id,
    ...props,
  };

  let fieldLabel = label;

  if (label && capitalize) {
    fieldLabel = label.charAt(0).toUpperCase() + label.slice(1);
  }

  if (required) {
    fieldProps["required"] = "required";
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
  /** Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label" */
  wrapClass: t.array,
  label: t.string,
  id: t.string,
  required: t.bool,
  capitalize: t.bool,
  optionalLabel: t.string,
  ChildComponent: t.any,
  componentProps: t.object,
  error: t.string,
  description: t.string,
  children: t.any,
};

export default withFieldGroup(Checkbox);
