import React from 'react';
import { LabelProps } from './Label.types';

// For internal issue. Should not be available for public.
function Label({
  label,
  required = true,
  id,
  capitalize,
  optionalLabel = 'optional',
}: LabelProps) {
  if (!label) return null;

  let fieldLabel = label;

  if (capitalize) {
    fieldLabel = label.charAt(0)
      .toUpperCase() + label.slice(1);
  }

  return (
    <label className="form-group__label" htmlFor={id}>
      {fieldLabel}
      {!required ? (
        <span className="form-group__optional">
          {' '}
          {optionalLabel}
        </span>
      ) : null}
    </label>
  );
}

export default Label;
