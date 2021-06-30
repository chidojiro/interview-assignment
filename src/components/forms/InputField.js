import React from "react";
import t from "prop-types";
import withFieldGroup from "../hoc/withFormGroup";

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
