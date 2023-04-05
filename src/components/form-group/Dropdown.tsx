import React from 'react';
import useLibrary from '../../hooks/useLibrary';
import Icon from '../Icon';
import cn from 'classnames';
import withField from '../../hoc/withField';
import FormGroup from '../form-group/FormGroup';

type OptionsProps = {
  value: string | number;
  title: string | number;
};

interface DropdownProps {
  id: string;
  name: string;
  options: Array<OptionsProps>;
  libs: [],
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: () => void;
  value?: string;
  className?: string;
  _formGroupProps?: object;
}

function Dropdown({ options, defaultValue, className, value, name, id, libs, onChange, _formGroupProps, ...props }: DropdownProps): JSX.Element {
  const [ref] = useLibrary(libs);
  return (
    <FormGroup {..._formGroupProps}>
      <select
        id={id}
        name={name}
        className={cn('untouched', className)}
        data-rs-untouched=""
        ref={ref as React.RefObject<HTMLSelectElement>}
        {...props}
        onChange={(event) => onChange(event as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)}
      >
        {defaultValue && <option value={defaultValue}>{defaultValue}</option>}
        {options &&
          options.map((item) => (
            <option key={options.indexOf(item)} value={item.value}>
              {item.title}
            </option>
          ))}
      </select>
      <Icon iconClassName="select-arrow icon" iconType="chevron-down" />
    </FormGroup>
  );
}

export default withField(Dropdown);
