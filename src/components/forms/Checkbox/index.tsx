import React from 'react';
import cn from 'classnames';
import FormGroup from '../FormGroup';
import withField from '../../../hoc/withField';
import { CheckboxProps } from './Checkbox.types';

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
  loader = false,
  checkboxLabel,
  disabled,
  _formGroupProps,
  onChange,
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
          'selection-control--disabled': disabled || loader,
        })}
      >
        <span className="selection-control__input">
          <input id={id} type="checkbox" checked={checked} onChange={(event) => onChange?.(event)} {...props} />
          <span className="icon selection-control__control" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <polyline points="2.1,8.5 6.2,12.4 13.9,5.1" />
            </svg>
          </span>
        </span>
        <span className="selection-control__label">{checkboxLabel}</span>
        {loader && <span className="loader__wrapper pt-xxs pl-xs pb-none"><span className="loader" /></span>}
      </label>
    </FormGroup>
  );
}

export default withField(Checkbox);
