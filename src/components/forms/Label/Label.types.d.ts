export interface LabelProps {
  label?: string;
  /** If not provided, will be generated from `name` */
  id?: string;
  capitalize?: boolean;
  optionalLabel?: string;
  /** @ignore Part of default HTML attributes. */
  required?: boolean;
}
