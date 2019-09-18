import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";
import CheckboxBase from "./CheckboxBase";

const Checkbox = ({option, required, ...props}) => {

  return (
    <CheckboxBase {...props} label={option && option.label}  />
  );
}

Checkbox.propTypes = {
  option: PropTypes.object,
}

Checkbox.displayName = 'checkbox'

export default withFieldGroup(Checkbox);