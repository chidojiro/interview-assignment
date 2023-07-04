export interface TagCheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  className?: string | string[];
  handleChange: () => void;
}
