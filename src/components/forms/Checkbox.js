import React from "react";
import t from "prop-types";
import cn from "classnames";

import withField from "@hoc/withField";

/**
 * A box which enables the user to select one or multiple options. See [here](https://randstad.design/components/core/forms/checkbox/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 */
// Add unused props. Some of the props are comming from the withFieldGroup HOC.
/* eslint-disable no-unused-vars */
const Checkbox = ({ id, label, ...props }) => {
  return (
    <label
      htmlFor={id}
      className={cn("selection-control", "selection-control--checkbox", {
        "selection-control--disabled": props.disabled,
      })}>
      <span className="selection-control__input">
        <input id={id} type="checkbox" {...props} />
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

Checkbox.isSelectionControl = true;

Checkbox.propTypes = {
  name: t.string.isRequired,
  label: t.string.isRequired,
  id: t.string,
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support. Enabled by default */
  withFormGroup: t.bool,
  /** Label for form group. */
  formGroupLabel: t.string,
  /** @ignore part of HTML props */
  disabled: t.bool,
};

export default withField(Checkbox);
