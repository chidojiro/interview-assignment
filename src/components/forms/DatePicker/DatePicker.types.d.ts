import { WithFieldProps } from '../../../hoc/withField';

export interface DatePickerProps extends WithFieldProps {
  name: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  altFormat: string;
  dateFormat: string;
  defaultDate?: string;
  defaultDateIsCurrentDate?: true | '';
  firstWeekDay?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  longMonths?: string;
  shortMonths?: string;
  shortWeeks?: string;
  clearText?: string;
  showWeekNumbers?: true | '';
  minDate?: string;
  maxDate?: string;
  language?: string;
  _formGroupProps?: object;
  ariaLabel: string;
}
