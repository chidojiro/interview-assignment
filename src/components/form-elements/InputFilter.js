import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const InputFilter = ({type, placeholder, icon, ...props}) => {
  const fieldProps = {
    type: "text",
    placeholder: placeholder && placeholder.toLowerCase(),
    ...props,
  };
  const iconProps = {
    xlinkHref: "human-forward/assets/image/icons.svg#close"
  }
  return (
    <React.Fragment>
      <input {...fieldProps} />
      <button type="button" className="button--icon-only" data-rs-clearable-button="" aria-hidden="false">
        <span>clear</span>
        {icon && (
          <span className="icon fill-brand--blue">
            {icon}
          </span>
        )}
      </button>
    </React.Fragment>
  );
}

InputFilter.propTypes = {
  placeholder: PropTypes.string,
}

InputFilter.displayName = 'InputFilter'

export default withFieldGroup(InputFilter);