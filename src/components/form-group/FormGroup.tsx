import React from 'react';
import cn from 'classnames';
import Label from './Label';
import FieldError from './FieldError/FieldError';

interface FormGroupProps {
  formGroupClass?: string;
  label?: string;
  /** Optional, 'name' used as a fallback id */
  id?: string;
  capitalize?: boolean;
  optionalLabel?: string;
  error?: string | string[];
  description?: string;
  afterContent?: JSX.Element;
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support. Enabled by default */
  withFormGroup?: boolean;
  /** @ignore */
  children?: JSX.Element | JSX.Element[];
  /** @ignore Part of default HTML attributes. */
  required?: boolean;
  /** @ignore Overide the default label component. Not available for public use. */
  _overrideLabel?: JSX.Element;
  /** @ignore Used to pass required classes for the field on setup. Not available for public use. */
  _configClasses?: string;
  /** @ignore Does not wrap field with 'form-group__input' div. Use for specific cases on field setup. Not available for public use. */
  _withoutWrapper?: boolean;
}

/**
 * Basic form group component.
 *
 * Wrapper for form component. Provides component with form group functionality. Like labels, errors, descriptions and etc.
 *
 * ---
 * ### Cannot use as a standalone component.
 */
function FormGroup({
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
}: FormGroupProps): JSX.Element {
  if (!withFormGroup && children) return <>children</>;

  const errorMessagesArray = error && ((Array.isArray(error) && error) || [error]);

  return (
    <div
      className={cn('form-group', formGroupClass, _configClasses, {
        'form-group--error': error,
      })}
    >
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

      {(errorMessagesArray || []).map((item: string) => <FieldError key={item}>{item}</FieldError>)}
      {description && <div className="form-group__message">{description}</div>}
      {afterContent}
    </div>
  );
}

export default FormGroup;
