import React, { useEffect, useRef } from 'react';

import withField, { WithFieldProps } from '../../hoc/withField';
import FormGroup from '../form-group/FormGroup';

interface InputFieldProps extends WithFieldProps {
  name: string;
  type: string;
  value?: string;
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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current?.type === 'number') {
      const ignoreScroll = (e: WheelEvent) => {
        if (e.target) {
          (e.target as HTMLInputElement)?.blur();
          e.stopPropagation();
          setTimeout(() => {
            (e.target as HTMLInputElement)?.focus();
          }, 0);
        }
      };

      if (inputRef.current) {
        inputRef.current.addEventListener('wheel', ignoreScroll);
      }
    }
  }, [inputRef]);

  return (
    <FormGroup {..._formGroupProps}>
      <input {...otherFieldProps} ref={inputRef} />
    </FormGroup>
  );
}

export default withField(InputField);
