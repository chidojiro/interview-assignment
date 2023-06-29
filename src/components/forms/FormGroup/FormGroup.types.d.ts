export interface FormGroupProps {
  formGroupClass?: string;
  label?: string;
  /** Optional, 'name' used as a fallback id */
  id?: string;
  capitalize?: boolean;
  optionalLabel?: string;
  error?: string | string[];
  description?: string;
  afterContent?: JSX.Element;
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support. Enabled by default */
  withFormGroup?: boolean;
  /** @ignore */
  children?: JSX.Element | JSX.Element[];
  /** @ignore Part of default HTML attributes. */
  required?: boolean;
  /** @ignore Overide the default label component. Not available for public use. */
  _overrideLabel?: JSX.Element;
  /** @ignore Used to pass required classes for the field on setup. Not available for public use. */
  _configClasses?: string;
  /** @ignore Does not wrap field with 'form-group__input' div. Use for specific cases on field setup. Not available for public use. */
  _withoutWrapper?: boolean;
}
