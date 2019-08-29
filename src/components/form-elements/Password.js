import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const Password = ({type, placeholder, suggestions, ...props}) => {
  const fieldProps = {
    type: "password",
    placeholder: placeholder && placeholder.toLowerCase(),
    ...props,
  };
  const iconProps = {
    xlinkHref: "human-forward/assets/image/icons.svg#eye"
  }
  return (
    <React.Fragment>
      <input {...fieldProps} />
      <button type="button" data-rs-password-visibility-trigger="" className="button--icon-only show-password">
        <span className="icon">
          <svg>
            <use {...iconProps} />
          </svg>
        </span>
      </button>
    </React.Fragment>
  );
}

Password.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

Password.displayName = 'Password'

export default withFieldGroup(Password);