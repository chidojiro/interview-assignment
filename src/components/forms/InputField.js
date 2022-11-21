import React from "react";
import t from "prop-types";
import withField from "@hoc/withField";
import FormGroup from "@components/form-group/FormGroup";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */

export const InputField = ({ _formGroupProps, type = "text", ...props }) => {
  const fieldProps = {
    type,
    ...props,
  };

  return (
    <FormGroup {..._formGroupProps}>
      <input {...fieldProps} />
    </FormGroup>
  );
};

InputField.propTypes = {
  name: t.string.isRequired,
  type: t.string,
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps: t.object,
};

export default withField(InputField);
