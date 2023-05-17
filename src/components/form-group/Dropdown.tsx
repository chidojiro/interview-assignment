import React from 'react';
import cn from 'classnames';
import { Untouched } from '@ffw/randstad-local-orbit/original/js/components/untouched';
import withField from '../../hoc/withField';
import FormGroup from './FormGroup';
import Icon from '../Icon';

type OptionsProps = {
  value: string | number;
  title: string | number;
};

interface DropdownProps {
  id: string;
  name: string;
  options: Array<OptionsProps>;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: () => void;
  value?: string;
  className?: string;
  _formGroupProps?: object;
}

function Dropdown({
  options,
  defaultValue,
  className,
  value,
  name,
  id,
  onChange,
  _formGroupProps,
  ...props
}: DropdownProps): JSX.Element {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    new Untouched(ref.current);
  }, []);

  const selectClassnames = cn(className, {
    untouched: !defaultValue || defaultValue === '',
  });

  return (
    <FormGroup {..._formGroupProps}>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className={selectClassnames}
        data-rs-untouched=""
        ref={ref as React.RefObject<HTMLSelectElement>}
        {...props}
        onChange={(event) => onChange?.(event as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)}
      >
        {options
          && options.map((item) => (
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
