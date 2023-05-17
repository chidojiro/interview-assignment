import React from 'react';
import cn from 'classnames';
import withField from '../../hoc/withField';

interface RadioButtonProps {
  name: string;
  label: string;
  id: string;
  disabled: boolean
  _formGroupProps?: object,
}

/**
 * A box which enables the user to select one option out of multiple options. See [here](https://randstad.design/components/core/forms/radio-button/)
 *
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
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
