import React from "react";
import t from "prop-types";
import withField from "@hoc/withField";
import cn from "classnames";

/**
 * A box which enables the user to select one option out of multiple options. See [here](https://randstad.design/components/core/forms/radio-button/)
 *
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 */
// Add unused props. Some of the props are comming from the withFieldGroup HOC.
/* eslint-disable no-unused-vars */
const RadioButton = ({ id, label, ...props }) => {
  return (
    <label
      htmlFor={id}
      className={cn("selection-control", "selection-control--radio-button", {
        "selection-control--disabled": props?.disabled,
      })}>
      <span className="selection-control__input">
        <input id={id} type="radio" {...props} />
        <span className="icon selection-control__control" aria-hidden="true"></span>
      </span>
      <span className="selection-control__label">{label}</span>
    </label>
  );
};

RadioButton.propTypes = {
  name: t.string.isRequired,
  label: t.string.isRequired,
  /** @ignore Part of input HTML props */
  id: t.string,
  /** @ignore Part of input HTML props */
  disabled: t.any,
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support. Enabled by default */
  withFormGroup: t.bool,
};

export default withField(RadioButton);
