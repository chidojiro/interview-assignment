import React from 'react';

interface LabelProps {
  label?: string;
  /** If not provided, will be generated from `name` */
  id?: string;
  capitalize?: boolean;
  optionalLabel?: string;
  /** @ignore Part of default HTML attributes. */
  required?: boolean;
}

// For internal issue. Should not be available for public.
const Label = ({ label, required = true, id, capitalize, optionalLabel = 'optional' }: LabelProps) => {
  if (!label) return null;

  let fieldLabel = label;

  if (capitalize) {
    fieldLabel = label.charAt(0).toUpperCase() + label.slice(1);
  }

  return (
    <label className="form-group__label" htmlFor={id}>
      {fieldLabel}
      {!required ? <span className="form-group__optional"> {optionalLabel}</span> : null}
    </label>
  );
};

export default Label;
