import { WithFieldProps } from '../../../hoc/withField';

export interface InputFieldProps extends WithFieldProps {
  name: string;
  type: string;
  value?: string;
  disabled?: boolean;
  currency?: string;
  placeholder?: string;
  _formGroupProps?: object;
}
