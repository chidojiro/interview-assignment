import React from 'react';

import withField, { WithFieldProps } from '../../hoc/withField';
import Checkbox from './Checkbox';
import FormGroup from '../form-group/FormGroup';

interface MultipleCheckboxSelectProps extends WithFieldProps {
  label: string;
  required: boolean;
  optionalLabel?: string | undefined;
  items: { id: string; name: string; }[]
  value: string[];
  /** use  setFieldValue with formik filed state */
  setFieldValue?: ((name: string, value: string[]) => void) | undefined;
  /** use  setFieldValue with normal filed state */
  setValue?: ((value: string[]) => void) | undefined;
  /** @ignore part of HTML props */
  _formGroupProps: object ;
  /** @ignore part of HTML props */
  disabled?: boolean;
}

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
