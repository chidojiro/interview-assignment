import React from "react";
import cn from "classnames";
import t from "prop-types";

/**
 * Basic form group component.
 *
 * Wrapper for form component. Provides component with form group functionality. Like labels, errors, descriptions and etc.
 *
 * ---
 * ### Cannot be used as a standalone component.
 */
const FormGroup = ({
  formGroupClass,
  formGroupLabel,
  id,
  required,
  optionalLabel,
  children,
  capitalize,
  error,
  description,
  afterContent,
  isSelectionControl,
}) => {
  let fieldLabel = formGroupLabel;

  if (formGroupLabel && capitalize) {
    fieldLabel = formGroupLabel.charAt(0).toUpperCase() + formGroupLabel.slice(1);
  }

  return (
    <div
      className={cn("form-group", formGroupClass, {
        "form-group--error": error,
        "form-group--selection-control": isSelectionControl,
      })}>
      {fieldLabel && (
        <label className="form-group__label" htmlFor={id}>
          {fieldLabel}
          {!required ? (
            <span className="form-group__optional"> {optionalLabel || "optional"}</span>
          ) : (
            <sup className="form-group__required">*</sup>
          )}
        </label>
      )}
      <div className="form-group__input">{children}</div>
      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
      {afterContent}
    </div>
  );
};

FormGroup.propTypes = {
  formGroupClass: t.string,
  formGroupLabel: t.string,
  /** If not provided, will be generated from `name` */
  id: t.string,
  /** @ignore Part of default HTML attributes. */
  required: t.bool,
  capitalize: t.bool,
  optionalLabel: t.string,
  /** @ignore */
  children: t.any,
  error: t.string,
  description: t.string,
  afterContent: t.any,
  /** @ignore */
  isSelectionControl: t.bool,
};

export default FormGroup;
