import React from "react";
import t from "prop-types";
import withField from "@hoc/withField";
import cn from "classnames";

/**
 * A box which enables the user to select one option out of multiple options. See [here](https://randstad.design/components/core/forms/radio-button/)
 *
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 */
// Some of the props are comming from the withFieldGroup HOC. _formGroupProps is used for the form group. In this component form group is not used and we exclude _formGroupProps from props to prevent passing on the input.
/* eslint-disable no-unused-vars */
const RadioButton = ({ id, label, _formGroupProps, ...props }) => {
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
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps: t.object,
};

export default withField(RadioButton);
