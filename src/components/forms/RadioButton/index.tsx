import React from 'react';
import cn from 'classnames';
import withField from '../../../hoc/withField';
import { RadioButtonProps } from './RadioButton.types';

/**
 * A box which enables the user to select one option out of options. See [here](https://randstad.design/components/core/forms/radio-button/)
 *
 * *Every other passed props will appear on `<input>`. Like "data-attribute" and "aria-label"*
 */
function RadioButton({
  id, label, _formGroupProps, ...props
}: RadioButtonProps) {
  return (
    <label
      htmlFor={id}
      className={cn('selection-control', 'selection-control--radio-button', {
        'selection-control--disabled': props?.disabled,
      })}
    >
      <span className="selection-control__input">
        <input id={id} type="radio" {...props} />
        <span className="icon selection-control__control" aria-hidden="true" />
      </span>
      <span className="selection-control__label">{label}</span>
    </label>
  );
}

export default withField(RadioButton);
