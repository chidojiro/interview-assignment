import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const Password = ({type, placeholder, suggestions, icon, ...props}) => {
  const fieldProps = {
    type: "password",
    placeholder: placeholder && placeholder.toLowerCase(),
    ...props,
  };

  // useEffect(() => {
  //   const PasswordVisibility = require('../../orbit/password-visibility');

  // })

  const addOrbitJS = element => {
    const parent = element.parentElement;
    console.log('element', element);
    console.log('parent', parent);
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