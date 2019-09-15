import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const Password = ({type, placeholder, suggestions, icon, ...props}) => {
  const fieldProps = {
    type: "password",
    placeholder: placeholder && placeholder.toLowerCase(),
    ...props,
  };
  return (
    <React.Fragment>
      <input {...fieldProps} />
      {icon && (
        <button type="button" data-rs-password-visibility-trigger="" className="button--icon-only show-password">
          <span className="icon">
            {icon}
          </span>
        </button>
      )}
    </React.Fragment>
  );
}

Password.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

Password.displayName = 'Password'

export default withFieldGroup(Password);