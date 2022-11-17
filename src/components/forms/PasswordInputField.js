import React from "react";
import t from "prop-types";

import withField from "@hoc/withField";
import useLibrary from "@hooks/useLibrary";
import { InputField } from "./InputField";
import Svg from "@components/base/Svg";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * ---
 * *Extend InputField component with location functionality. Support all InputField props.*
 */
const PasswordInputField = ({
  libs,
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

  const minCharsAttr = minChars ? { "data-rs-password-validator-min-chars": minChars } : {};

  return (
    <>
      <div
        className="form-group__input form-group__input--button password-validator"
        data-scl=""
        ref={ref}
        {...minCharsAttr}
        data-rs-password-validator=""
        data-rs-password-visibility="">
        <InputField {...props} type="password" />
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
    </>
  );
};

PasswordInputField.withoutFormGroupMarkup = true;
PasswordInputField.isPassword = true;

PasswordInputField.propTypes = {
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
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: t.array,
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support. Enabled by default */
  withFormGroup: t.bool,
};

export default withField(PasswordInputField);
