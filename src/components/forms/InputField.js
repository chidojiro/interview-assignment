import React from "react";
import t from "prop-types";
import withFieldGroup from "@hoc/withFormGroup";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 */
const InputField = ({ type, required, ...props }) => {
  const fieldProps = {
    type: type || "text",
    ...props,
  };

  if (required) {
    fieldProps["required"] = "required";
  }

  return <input {...fieldProps} />;
};

InputField.propTypes = {
  /** Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label" */
  type: t.string,
  wrapClass: t.array,
  label: t.string,
  id: t.string,
  required: t.bool,
  optionalLabel: t.string,
  ChildComponent: t.any,
  componentProps: t.object,
  error: t.string,
  description: t.string,
  children: t.any,
};

export default withFieldGroup(InputField);
