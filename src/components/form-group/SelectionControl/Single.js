import React from "react";
import PropTypes from "prop-types";

const Single = ({
  classes,
  ChildComponent,
  label,
  required,
  optionalLabel = "optional",
  componentProps,
  error,
  description,
}) => {
  const { fieldLabel, ...props } = componentProps;

  return (
    <div className={classes.join(" ")}>
      {label && (
        <div className="form-group__label">
          {label}
          {!required && <span className="form-group__optional"> {optionalLabel}</span>}
        </div>
      )}

      <div className="form-group__input">
        <ChildComponent label={fieldLabel} {...props} />
      </div>

      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
    </div>
  );
};

Single.propTypes = {
  classes: PropTypes.array,
  ChildComponent: PropTypes.func.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  optionalLabel: PropTypes.string,
  componentProps: PropTypes.object,
  error: PropTypes.string,
  description: PropTypes.string,
};

Single.defaultProps = {
  optionalLabel: "optional",
};

export default Single;
