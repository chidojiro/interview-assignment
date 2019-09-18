import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const Input = ({type, placeholder, required, ...props}) => {
  const fieldProps = {
    type: type || "text",
    placeholder: placeholder && placeholder.toLowerCase(),
    ...props,
  };
  return <input {...fieldProps} />;
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

Input.displayName = 'Input'

export default withFieldGroup(Input);