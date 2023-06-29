export interface StackableProps {
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
