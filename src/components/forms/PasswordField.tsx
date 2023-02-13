import React from 'react';

import withField, { WithFieldProps } from '../../hoc/withField';
import useLibrary from '../../hooks/useLibrary';
import FormGroup from '../form-group/FormGroup';
import Label from '../form-group/Label';
import Svg from '../base/Svg';

interface PasswordFieldProps extends Partial<Pick<WithFieldProps, 'onBlur' | 'onChange'>> {
  name: string;
  minChars?: number;
  /** All supported validators.
   * Default validators
   * - minSign
   * - useChar
   * - useUpper
   * - useDigit
   */
  validationSchema?: {
    minSign: string;
    useUpper: string;
    useDigit: string;
    useChar: string;
    noSymbol: string;
  };
  hideValidationList?: boolean;
  /** Refers to the aria-label attribute of the show button. */
  buttonLabel?: string;
  forgottenPasswordLink?: React.ReactElement;
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs?: [];
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: {
    label?: string;
    id?: string;
    required?: boolean;
    capitalize?: boolean;
    optionalLabel?: string;
  };
}

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * ---
 * *Every other passed props will get added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and supports all the props from it.**
 */
function PasswordField({
  libs,
  forgottenPasswordLink,
  _formGroupProps = {},
  minChars = 8,
  validationSchema,
  buttonLabel = 'show password',
  hideValidationList = true,
  ...props
}: PasswordFieldProps): React.ReactElement {
  const [ref] = useLibrary(libs ?? []);

  const defaultValidationSchema = {
    minSign: `${minChars} characters`,
    useChar: '1 small letter',
    useUpper: '1 capital letter',
    useDigit: '1 number',
  };

  const currentValidationSchema = {
    ...defaultValidationSchema,
    ...validationSchema,
  };

  const forgottenPasswordWithClass = forgottenPasswordLink ? { ...forgottenPasswordLink } : null;

  if (forgottenPasswordWithClass) {
    forgottenPasswordWithClass.props = {
      ...forgottenPasswordWithClass.props,
      className: 'form-group__action-link',
    };
  }

  const labelWithForgottenPasswordLink = () => (
    <div className="flex justify-between">
      <Label
        label={_formGroupProps.label}
        id={_formGroupProps.id}
        required={_formGroupProps.required}
        capitalize={_formGroupProps.capitalize}
        optionalLabel={_formGroupProps.optionalLabel}
      />
      {forgottenPasswordWithClass}
    </div>
  );

  const forgottenPasswordLinkAttributes = forgottenPasswordLink
    ? {
      _overrideLabel: labelWithForgottenPasswordLink(),
    }
    : {};

  return (
    <FormGroup
      {..._formGroupProps}
      _configClasses="form-group--password"
      _withoutWrapper
      {...forgottenPasswordLinkAttributes}
    >
      <div
        className="form-group__input form-group__input--button password-validator"
        data-scl=""
        ref={ref as React.RefObject<HTMLDivElement>}
        data-rs-password-validator-min-chars={minChars}
        data-rs-password-validator=""
        data-rs-password-visibility=""
      >
        <input {...props} type="password" />
        <button
          type="button"
          data-rs-password-visibility-trigger=""
          className="button--icon-only show-password"
          aria-label={buttonLabel}
        >
          <span className="icon">
            <Svg icon="eye" />
          </span>
        </button>
      </div>
      <div
        className="password-validator__validate-list"
        data-rs-password-validator-checklist=""
        hidden={hideValidationList}
      >
        <ul>
          {Object.entries(currentValidationSchema).map(([type, schema]) => (
            <li data-rs-password-validator-validate={type} key={type}>
              {schema}
            </li>
          ))}
        </ul>
      </div>
    </FormGroup>
  );
}

export default withField(PasswordField);
