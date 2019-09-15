import React from "react";
import PropTypes from "prop-types";

const withFieldGroup = ChildComponent => {
  const FieldGroup = ({
    label,
    name,
    id,
    required,
    disabled,
    description,
    error,
    suffix,
    wrapClassName,
    ...props
  }) => {
    const wrapClass = ['form-group'];
    if (error) wrapClass.push('form-group--error');
    if (disabled) wrapClass.push('form-group--disabled');
    if (ChildComponent.displayName) wrapClass.push(`form-group--${ChildComponent.displayName.toLowerCase()}`)
    return (
      <div className={wrapClass.join(" ")}>
        <label className="form-group__label" htmlFor={id || name}>
          {label && label.toLowerCase()}
          {!required && <span className="form-group__optional">optional</span>}
        </label>
        <div className={`form-group__input ${wrapClassName || ''}`}>
          <ChildComponent label={label} name={name} id={id || name} disabled={disabled} required={required} {...props} />
        </div>
        {typeof suffix !== 'undefined' && suffix}
        {error && <div className="form-group__feedback">{error}</div>}
        {description && <div className="form-group__message">{description}</div>}
      </div>
    )
  };

  FieldGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    error: PropTypes.string,
    description: PropTypes.string,
    required: PropTypes.bool
  }

  return FieldGroup;
}

export default withFieldGroup;