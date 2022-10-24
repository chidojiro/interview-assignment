import React from "react";
import t from "prop-types";
import withFieldGroup from "@hoc/withFormGroup";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * *Every other passed props will be added to `<select>`. Like "data-attribute" and "aria-label"*
 */
// Add unused props. Some of the props are comming from the withFieldGroup HOC.
/* eslint-disable no-unused-vars */
const InputField = ({ type = "text", ...props }) => {
  const fieldProps = {
    type,
    ...props,
  };

  return <input {...fieldProps} />;
};

InputField.propTypes = {
  type: t.string,
  // Comming from withFieldGroup HOC
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

InputField.defaultProps = {
  type: "text",
};

export default withFieldGroup(InputField);
