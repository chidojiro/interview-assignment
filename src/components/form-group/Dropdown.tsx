import React from 'react';
import Icon from '../Icon';

type OptionsProps = {
  value: string | number;
  title: string | number;
}

interface DropdownProps {
  label?: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  touched?: boolean;
  id: string;
  options: Array<OptionsProps>;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: () => void;
  value?: string;
  name: string;
}

function Dropdown({ options, touched, defaultValue, error, label, required, disabled, value, name, id, onChange, ...rest }: DropdownProps): JSX.Element {
  return (
    <div className={`form-group form-group--selection-control mb-m ${touched && error && 'form-group--error'}`}>
      {label ? (
        <div className="form-group__label">
          {label}
          {!required && <sup className="form-group__optional">optional</sup>}
        </div>
      ) : null}
      <div className="form-group__input">
        <select id={id} name={name} required={required} value={value || defaultValue} className={!value ? 'untouched' : ''} data-rs-untouched="" onChange={(event) => onChange(event as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)} disabled={disabled} {...rest}>
          {defaultValue && <option value={defaultValue} disabled hidden>{defaultValue}</option>}
          {options &&
            options.map((item) => (
              <option key={options.indexOf(item)} value={item.value}>
                {item.title}
              </option>
            ))}
        </select>
        <Icon iconClassName="select-arrow icon" iconType="chevron-down" />
      </div>
      {touched && error ? <div className="form-group__feedback error">{error}</div> : null}
    </div>
  );
}

export default Dropdown;
