import React from 'react';
interface InputField extends WithFieldProps {
  name: string;
  type: string;
  disabled?: boolean;
  placeholder?: string;
  _formGroupProps?: object;
}
/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */
declare const InputField: React.FC<InputField>;
declare const _default: (props: WithFieldProps | InputField) => JSX.Element;
export default _default;
