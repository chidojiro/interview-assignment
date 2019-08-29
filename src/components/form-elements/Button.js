import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const Button = ({children, filled, className, ...props}) => {
  const classes = ['button', className];
  if (filled) classes.push('button--filled');
  if (icon) classes.push('button--icon button--full-width-to-icon');

  const fieldProps = {
    ...props,
    className: classes.join(' ')
  };
  return (
    <button {...fieldProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

Button.displayName = 'Button'

export default withFieldGroup(Button);