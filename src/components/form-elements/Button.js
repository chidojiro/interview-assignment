import React from "react";
import PropTypes from "prop-types";

const Button = ({children, filled, icon, className, ...props}) => {
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

export default Button;