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
const LocationInputField = ({ libs, buttonLabel = "clear", ...props }) => {
  const [ref] = useLibrary(libs);

  return (
    <div
      ref={ref}
      className="form-group__input form-group__input--button form-group__input--icon-left clearable-input"
      data-rs-clearable=""
      data-scl="">
      <InputField {...props} />
      <span className="icon">
        <Svg icon="gps-filled" />
      </span>
      <button
        type="button"
        className="button--icon-only"
        aria-label={buttonLabel}
        data-rs-clearable-button=""
        aria-hidden="false">
        <span>{buttonLabel}</span>
        <span className="icon">
          <Svg icon="close" />
        </span>
      </button>
    </div>
  );
};

LocationInputField.withoutFormGroupMarkup = true;

LocationInputField.propTypes = {
  buttonLabel: t.string,
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: t.array,
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support. Enabled by default */
  withFormGroup: t.bool,
};

LocationInputField.defaultProps = {
  buttonLabel: "clear",
};

export default withField(LocationInputField);
