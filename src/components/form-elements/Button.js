import React from "react";
import PropTypes from "prop-types";

const Button = ({children, filled, icon, plain, fullWidth, medium, className, ...props}) => {
  const classes = ['button', className];
  if (filled) classes.push('button--filled');
  if (icon) classes.push('button--icon button--full-width-to-icon');
  if (plain) classes.push('button--plain');
  if (fullWidth) classes.push('button--full-width');
  if (medium) classes.push('button--m');

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

export default Button;