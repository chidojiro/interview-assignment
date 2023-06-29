import React from 'react';

import withField from '../../../hoc/withField';
import Checkbox from '../Checkbox';
import FormGroup from '../FormGroup';
import { MultipleCheckboxSelectProps } from './MultipleCheckboxSelect.types';

function MultipleCheckboxSelect({
  name,
  items,
  setFieldValue,
  setValue,
  value,
  label,
  required,
  optionalLabel,
  disabled,
  _formGroupProps,
}: MultipleCheckboxSelectProps) {
  function onChange(updatedValue: string[]) {
    if (setFieldValue) {
      setFieldValue(name, updatedValue);
    }
    if (setValue) {
      setValue(updatedValue);
    }
  }

  const renderItems = () => items.map((item) => (
    <div key={item.id} id={item.id} className="mb-xs">
      <Checkbox
        checkboxLabel={item.name}
        name={item.id}
        checked={value.includes(item.id)}
        onChange={() => {
          if (setFieldValue || setValue) {
            const updatedValue = value.includes(item.id)
              ? value.filter((sT) => sT !== item.id)
              : [...value, item.id];

            onChange(updatedValue);
          }
        }}
        disabled={disabled}
      />
    </div>
  ));

  return (
    <FormGroup {..._formGroupProps} label={label} required={required} optionalLabel={optionalLabel}>
      {renderItems()}
    </FormGroup>
  );
}

export default withField(MultipleCheckboxSelect);
