export type OptionsProps = {
  value: string | number;
  title: string | number;
};

export interface DropdownProps {
  id: string;
  name: string;
  options: Array<OptionsProps>;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: () => void;
  value?: string;
  className?: string;
  _formGroupProps?: object;
}
