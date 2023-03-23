import React from 'react';
import cn from 'classnames';

import FormGroup from '../form-group/FormGroup';
import withField, { WithFieldProps } from '../../hoc/withField';

interface CheckboxProps extends WithFieldProps {
  checked?: boolean | undefined;
  checkboxLabel: React.ReactElement | string;
  /** @ignore part of HTML props */
  disabled?: boolean;
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
}

/**
 * A box which enables the user to select one or more options. See [here](https://randstad.design/components/core/forms/checkbox/)
 *
 * ---
 * *Every other passed props will get added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all props.**
 */
function Checkbox({
  id,
  checked = false,
  checkboxLabel,
  disabled,
  _formGroupProps,
  ...props
}: CheckboxProps) {
  return (
    <FormGroup
      {..._formGroupProps}
      _configClasses="form-group--selection-control"
    >
      <label
        htmlFor={id}
        className={cn('selection-control', 'selection-control--checkbox', {
          'selection-control--disabled': disabled,
        })}
      >
        <input id={id} type="checkbox" checked={checked} {...props} />
        <span className="selection-control__input">
          <input id={id} type="checkbox" checked={checked} {...props} />
          <span className="icon selection-control__control" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <polyline points="2.1,8.5 6.2,12.4 13.9,5.1" />
            </svg>
          </span>
        </span>
        <span className="selection-control__label">{checkboxLabel}</span>
      </label>
    </FormGroup>
  );
}

export default withField(Checkbox);
