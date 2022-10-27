import React from "react";
import t from "prop-types";
import withField from "@hoc/withField";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
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
  name: t.string.isRequired,
  type: t.string,
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support. Enabled by default */
  withFormGroup: t.bool,
};

InputField.defaultProps = {
  type: "text",
};

export default withField(InputField);
