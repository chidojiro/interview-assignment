export interface SelectFieldProps {
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
