import { WithFieldProps } from '../../../hoc/withField';

export type ToggleType = 'light' | 'dark';

export interface ToggleProps extends WithFieldProps {
  /** @ignore part of HTML props */
  name: string;
  type?: ToggleType;
  checked: boolean;
  onToggleChange?: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
