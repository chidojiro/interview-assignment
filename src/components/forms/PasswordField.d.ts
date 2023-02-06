interface PasswordFieldProps {
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
  /** Refers to the aria-label attribute of the show button. */
  buttonLabel?: string;
  forgottenPasswordLink?: any;
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
declare const _default: (props: WithFieldProps | PasswordFieldProps) => JSX.Element;
export default _default;
