import React from "react";

import withField from "@hoc/withField";
import FormGroup from "@components/form-group/FormGroup";

interface InputField extends WithFieldProps {
  name: string;
  type: string;
  disabled?: boolean;
  placeholder?: string;
  _formGroupProps?: object;
}

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */

export const InputField: React.FC<InputField> = ({
  type = "text",
  disabled,
  placeholder,
  _formGroupProps,
  ...props
}: InputField) => {
  const otherFieldProps = {
    type,
    ...(disabled && { readonly: "readonly" }),
    ...(placeholder && { placeholder: placeholder }),
    ...props,
  };

  return (
    <FormGroup {..._formGroupProps}>
      <input {...otherFieldProps} />
    </FormGroup>
  );
};

export default withField(InputField);
