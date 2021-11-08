import React from "react";
import t from "prop-types";
import withFieldGroup from "@hoc/withFormGroup";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 */
const InputField = ({ type, ...props }) => {
  const fieldProps = {
    type: type || "text",
    ...props,
  };

  return <input {...fieldProps} />;
};

InputField.propTypes = {
  type: t.string,
};

export default withFieldGroup(InputField);
