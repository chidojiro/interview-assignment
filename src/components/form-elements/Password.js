import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const Password = ({type, placeholder, ...props}) => {
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

Password.suffix = () => (
  <div className="password-validator__validate-list" data-rs-password-validator-checklist="" hidden="">
		<ul>
			<li data-rs-password-validator-validate="minSign">8 characters</li>
			<li data-rs-password-validator-validate="useChar">1 small letter</li>
			<li data-rs-password-validator-validate="useUpper">1 capital letter</li>
			<li data-rs-password-validator-validate="useDigit">1 number</li>
		</ul>
	</div>
);

Password.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

Password.displayName = 'Password'

export default withFieldGroup(Password);