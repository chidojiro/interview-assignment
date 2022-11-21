import React from "react";
import t from "prop-types";

import withField from "@hoc/withField";
import useLibrary from "@hooks/useLibrary";
import FormGroup from "@components/form-group/FormGroup";
import Label from "@components/form-group/Label";
import Svg from "@components/base/Svg";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */
const PasswordInputField = ({
  libs,
  forgottenPasswordLink,
  _formGroupProps,
  minChars = 8,
  validationSchema = {},
  buttonLabel = "show password",
  ...props
}) => {
  const [ref] = useLibrary(libs);

  const defaultValidationSchema = {
    minSign: `${minChars} characters`,
    useChar: "1 small letter",
    useUpper: "1 capital letter",
    useDigit: "1 number",
  };

  const currentValidationSchema = {
    ...defaultValidationSchema,
    ...validationSchema,
  };

  let forgottenPasswordWithClass = forgottenPasswordLink ? { ...forgottenPasswordLink } : null;

  if (forgottenPasswordWithClass) {
    forgottenPasswordWithClass.props = {
      ...forgottenPasswordWithClass.props,
      className: "form-group__action-link",
    };
  }

  const labelWithForgottenPasswordLink = () => {
    return (
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
  };

  const forgottenPasswordLinkAttributes = forgottenPasswordLink
    ? {
        _overrideLabel: labelWithForgottenPasswordLink(),
      }
    : {};

  return (
    <FormGroup
      {..._formGroupProps}
      _configClasses="form-group--password"
      _withoutWrapper={true}
      {...forgottenPasswordLinkAttributes}>
      <div
        className="form-group__input form-group__input--button password-validator"
        data-scl=""
        ref={ref}
        data-rs-password-validator-min-chars={minChars}
        data-rs-password-validator=""
        data-rs-password-visibility="">
        <input {...props} type="password" />
        <button
          type="button"
          data-rs-password-visibility-trigger=""
          className="button--icon-only show-password"
          aria-label={buttonLabel}>
          <span className="icon">
            <Svg icon="eye" />
          </span>
        </button>
      </div>
      <div
        className="password-validator__validate-list"
        data-rs-password-validator-checklist=""
        hidden>
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
};

PasswordInputField.propTypes = {
  name: t.string.isRequired,
  /** Change default minimin characters in the validation schema. */
  minChars: t.number,
  /** All supported validators.
   * Default validators
   * - minSign
   * - useChar
   * - useUpper
   * - useDigit
   */
  validationSchema: t.shape({
    minSign: t.string,
    useUpper: t.string,
    useDigit: t.string,
    useChar: t.string,
    noSymbol: t.string,
  }),
  buttonLabel: t.string,
  forgottenPasswordLink: t.node,
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: t.array,
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps: t.object,
};

export default withField(PasswordInputField);
