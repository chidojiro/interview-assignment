import React from 'react';
interface SelectField {
  /** Rendered Select Options */
  children: React.ReactNode;
  /** @ignore Part of input HTML props. */
  className?: string;
  name: string;
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: [];
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
}
/**
 * An input field with a list of options that can be selected from predefined data. See [here](https://randstad.design/components/core/forms/drop-down/).
 *
 * ---
 * *Every other passed prop will be added to `<select>`. Like "data-attribute" or "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */
declare const SelectField: ({ children, className, libs, _formGroupProps, ...props }: SelectField) => JSX.Element;
declare const _default: (props: WithFieldProps | SelectField) => JSX.Element;
export default _default;
