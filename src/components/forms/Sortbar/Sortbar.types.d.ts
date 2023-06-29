import { Library } from '../../../hooks/useLibrary';

export interface SortbarProps extends Library {
  count: string;
  selectLabel: string;
  /** `attrubutes` are spread in the component. You can pass from `data-attributes` to events */
  selectAttributes?: React.ComponentPropsWithoutRef<'select'>;
  selectOptions?: { [key: string]: string };
  untouched?: boolean;
}
