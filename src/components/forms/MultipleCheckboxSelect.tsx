import React from 'react';

import withField, { WithFieldProps } from '../../hoc/withField';
import Stackable from '../form-group/Stackable';
import Checkbox from './Checkbox';
import FormGroup from '../form-group/FormGroup';

interface MultipleCheckboxSelectProps extends WithFieldProps {
  label: string;
  required: boolean;
  optionalLabel?: string | undefined;
  items: { id: string; name: string; }[]
  value: string[];
  setFieldValue: (name: string, value: string[]) => void;
  /** @ignore part of HTML props */
  _formGroupProps: object ;
  /** @ignore part of HTML props */
  disabled?: boolean;
}

function MultipleCheckboxSelect({
  name,
  items,
  setFieldValue,
  value,
  label,
  required,
  optionalLabel,
  disabled,
  _formGroupProps,
}: MultipleCheckboxSelectProps) {
  const renderItems = () => items.map((item) => (
    <div key={item.id} id={item.id}>
      <Checkbox
        checkboxLabel={item.name}
        name={item.id}
        checked={value.includes(item.id)}
        onChange={() => {
          if (value.includes(item.id)) {
            setFieldValue(name, value.filter((sT) => sT !== item.id));
          } else {
            setFieldValue(name, [...value, item.id]);
          }
        }}
        disabled={disabled}
      />
    </div>
  ));

  return (
    <FormGroup {..._formGroupProps}>
      <Stackable label={label} required={required} optionalLabel={optionalLabel}>
        {renderItems()}
      </Stackable>
    </FormGroup>
  );
}

export default withField(MultipleCheckboxSelect);
