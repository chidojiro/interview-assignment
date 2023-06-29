import React, { useRef, useEffect } from 'react';

import withField, { WithFieldProps } from '../../hoc/withField';
import FormGroup from '../form-group/FormGroup';

interface InputFieldProps extends WithFieldProps {
  name: string;
  type: string;
  value?: string;
  disabled?: boolean;
  currency?: string;
  placeholder?: string;
  _formGroupProps?: object;
}

/**
 * A field to enter data in a pre-defined format. See [here](https://randstad.design/components/core/forms/input-field/)
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
  currency,
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
    const currentRef = inputRef.current;
    const ignoreScroll = (e: globalThis.WheelEvent): void => {
      if (e.target && inputRef.current?.type === 'number') {
        e.preventDefault();
      }
    };
    if (currentRef) {
      currentRef.addEventListener('wheel', ignoreScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', ignoreScroll);
      }
    };
  }, [inputRef]);

  return (
    <FormGroup {..._formGroupProps}>
      {currency ? (
        <span className="text-ellipsis">
          {currency}
        </span>
      ) : null as never}
      <input {...otherFieldProps} ref={inputRef} />
    </FormGroup>
  );
}

export default withField(InputField);
