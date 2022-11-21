import React from "react";
import t from "prop-types";

// For internal issue. Should not be available for public.
const Label = ({ label, required, id, capitalize, optionalLabel = "optional" }) => {
  if (!label) return;

  let fieldLabel = label;

  if (capitalize) {
    fieldLabel = label.charAt(0).toUpperCase() + label.slice(1);
  }

  return (
    <label className="form-group__label" htmlFor={id}>
      {fieldLabel}
      {!required ? (
        <>
          <span className="form-group__optional"> {optionalLabel}</span>
        </>
      ) : (
        <sup className="form-group__required">*</sup>
      )}
    </label>
  );
};

Label.propTypes = {
  label: t.string,
  /** If not provided, will be generated from `name` */
  id: t.string,
  capitalize: t.bool,
  optionalLabel: t.string,
  /** @ignore Part of default HTML attributes. */
  required: t.bool,
};

export default Label;
