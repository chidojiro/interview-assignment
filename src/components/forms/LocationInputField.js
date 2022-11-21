import React from "react";
import t from "prop-types";

import withField from "@hoc/withField";
import useLibrary from "@hooks/useLibrary";
import Svg from "@components/base/Svg";
import FormGroup from "@components/form-group/FormGroup";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */
const LocationInputField = ({ libs, _formGroupProps, buttonLabel = "clear", ...props }) => {
  const [ref] = useLibrary(libs);

  return (
    <FormGroup {..._formGroupProps} _withoutWrapper={true}>
      <div
        ref={ref}
        className="form-group__input form-group__input--button form-group__input--icon-left clearable-input"
        data-rs-clearable=""
        data-scl="">
        <input {...props} type="text" />
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
    </FormGroup>
  );
};

LocationInputField.propTypes = {
  name: t.string.isRequired,
  buttonLabel: t.string,
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: t.array,
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps: t.object,
};

export default withField(LocationInputField);
