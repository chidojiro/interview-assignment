import React from 'react';
interface Checkbox extends WithFieldProps {
  checkboxLabel: React.ReactElement | string;
  /** @ignore part of HTML props */
  disabled?: boolean;
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
}
/**
 * A box which enables the user to select one or multiple options. See [here](https://randstad.design/components/core/forms/checkbox/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all props.**
 */
declare function Checkbox({ id, checkboxLabel, disabled, _formGroupProps, ...props }: Checkbox): JSX.Element;
declare const _default: (props: Checkbox | WithFieldProps) => JSX.Element;
export default _default;
