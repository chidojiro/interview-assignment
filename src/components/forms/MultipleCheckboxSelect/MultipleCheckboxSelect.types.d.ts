import { WithFieldProps } from '../../../hoc/withField';

interface MultipleCheckboxSelectProps extends WithFieldProps {
  label: string;
  required: boolean;
  optionalLabel?: string | undefined;
  items: { id: string; name: string }[];
  value: string[];
  /** use  setFieldValue with formik filed state */
  setFieldValue?: ((name: string, value: string[]) => void) | undefined;
  /** use  setFieldValue with normal filed state */
  setValue?: ((value: string[]) => void) | undefined;
  /** @ignore part of HTML props */
  _formGroupProps: object;
  /** @ignore part of HTML props */
  disabled?: boolean;
}
