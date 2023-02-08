import React from 'react';

import withField, { WithFieldProps } from '../../hoc/withField';
import FormGroup from '../form-group/FormGroup';

interface InputFieldProps extends WithFieldProps {
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
 * *Every other passed props will get added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and supports all the props from it.**
 */

function InputField({
  type = 'text',
  disabled,
  placeholder,
  _formGroupProps,
  ...props
}: InputFieldProps): React.ReactElement {
  const otherFieldProps = {
    type,
    ...(disabled && { readonly: 'readonly' }),
    ...(placeholder && { placeholder }),
    ...props,
  };

  return (
    <FormGroup {..._formGroupProps}>
      <input {...otherFieldProps} />
    </FormGroup>
  );
}

export default withField(InputField);
