import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

import {PasswordVisibility} from '../../orbit/password-visibility';
import {PasswordValidator} from '../../orbit/password-validator';

const Password = ({type, placeholder, suggestions, validate, preview, icon, ...props}) => {
  const fieldProps = {
    type: "password",
    placeholder: placeholder && placeholder.toLowerCase(),
    ...props,
  };

  const addOrbitJS = element => {
    const parent = element.parentElement;
    if (parent && preview) {
      new PasswordVisibility(parent);
    }
    if (parent && validate) {
      new PasswordValidator(parent);
    }
  }

  return (
    <React.Fragment>
      <input {...fieldProps} ref={addOrbitJS} />
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