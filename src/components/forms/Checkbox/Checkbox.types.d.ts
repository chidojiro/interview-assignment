import { WithFieldProps } from '../../../hoc/withField';

export interface CheckboxProps extends WithFieldProps {
  checked?: boolean | undefined;
  checkboxLabel: React.ReactElement | string;
  /** @ignore part of HTML props */
  disabled?: boolean;
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
