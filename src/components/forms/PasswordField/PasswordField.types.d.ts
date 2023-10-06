import { WithFieldProps } from '../../../hoc/withField';

export interface PasswordFieldProps extends Partial<Pick<WithFieldProps, 'onBlur' | 'onChange'>> {
  name: string;
  minChars?: number;
  /** All supported validators.
   * Default validators
   * - minSign
   * - useChar
   * - useUpper
   * - useDigit
   */
  validationSchema?: {
    minSign: string;
    useUpper: string;
    useDigit: string;
    useChar: string;
    noSymbol: string;
  };
  hideValidationList?: boolean;
  disableValidationRules?: boolean;
  newPassword?: boolean,
  /** Refers to the aria-label attribute of the show button. */
  buttonLabel?: string;
  forgottenPasswordLink?: React.ReactElement;
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs?: [];
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: {
    label?: string;
    id?: string;
    required?: boolean;
    capitalize?: boolean;
    optionalLabel?: string;
  };
}
