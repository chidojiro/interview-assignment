interface StackableProps {
  className?: string;
  label: string;
  error?: string;
  description?: string;
  required?: boolean;
  optionalLabel?: string;
  capitalize?: boolean;
  /** Visually will hide the label, but it will remain in the markup. For a11y reasons. */
  hideLabel?: boolean;
  /** @ignore */
  children?: any;
}
/**
 * Stackable form group component.
 *
 * Groups form component with same name. It provides functionality like label, errors, descriptions and etc. Same as FormGroup, but for stacked components. See example in form components.
 *
 * ---
 * ### Cannot be used as a standalone component.
 */
declare const Stackable: ({
  children,
  error,
  description,
  label,
  className,
  capitalize,
  hideLabel,
  optionalLabel,
  required,
}: StackableProps) => JSX.Element;
export default Stackable;
