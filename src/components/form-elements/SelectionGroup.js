import React from "react";
import PropTypes from "prop-types";

const withSelectionGroup = ChildComponent => {
  const SelectionGroup = ({
    label,
    name,
    id,
    required,
    disabled,
    description,
    error,
    ...props
  }) => {
    const wrapClass = ['form-group', 'form-group--selection-control'];
    if (error) wrapClass.push('form-group--error');
    if (disabled) wrapClass.push('form-group--disabled');
    if (ChildComponent.displayName) wrapClass.push(`form-group--${ChildComponent.displayName.toLowerCase()}`)
    return (
      <fieldset className={wrapClass.join(" ")}>
        <legend className="form-group__label">
          {label && label.toLowerCase()}
          {!required && <span className="form-group__optional">optional</span>}
        </legend>
        <ChildComponent label={label} name={name} id={id || `field--${ChildComponent.displayName.toLowerCase()}--${name}`} disabled={disabled} required={required} {...props} />
        {typeof suffix !== 'undefined' && suffix}
        {error && <div className="form-group__feedback">{error}</div>}
        {description && <div className="form-group__message">{description}</div>}
      </fieldset>
    )
  };

  SelectionGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    error: PropTypes.string,
    description: PropTypes.string,
    required: PropTypes.bool
  }

  return SelectionGroup;
}

export default withSelectionGroup;