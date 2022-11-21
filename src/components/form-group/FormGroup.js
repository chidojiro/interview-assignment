import React from "react";
import cn from "classnames";
import t from "prop-types";
import Label from "@components/form-group/Label";

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
  label,
  id,
  required,
  optionalLabel,
  children,
  capitalize,
  error,
  description,
  afterContent,
  _overrideLabel,
  _configClasses,
  _withoutWrapper,
  withFormGroup = true,
}) => {
  if (!withFormGroup) return children;

  return (
    <div
      className={cn("form-group", formGroupClass, _configClasses, {
        "form-group--error": error,
      })}>
      {_overrideLabel || (
        <Label
          label={label}
          id={id}
          required={required}
          capitalize={capitalize}
          optionalLabel={optionalLabel}
        />
      )}

      {_withoutWrapper ? children : <div className="form-group__input">{children}</div>}

      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
      {afterContent}
    </div>
  );
};

FormGroup.propTypes = {
  formGroupClass: t.string,
  label: t.string,
  /** If not provided, will be generated from `name` */
  id: t.string,
  capitalize: t.bool,
  optionalLabel: t.string,
  error: t.string,
  description: t.string,
  afterContent: t.any,
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support. Enabled by default */
  withFormGroup: t.bool,
  /** @ignore */
  children: t.any,
  /** @ignore Part of default HTML attributes. */
  required: t.bool,
  /** @ignore Overide the default label component. Not available for public use. */
  _overrideLabel: t.any,
  /** @ignore Used only to pass required classes for the field on setup. Not available for public use. */
  _configClasses: t.string,
  /** @ignore Does not wrap field with 'form-group__input' div. Use for specific cases on field setup. Not available for public use. */
  _withoutWrapper: t.bool,
};

export default FormGroup;
