import React from 'react';
import { Library } from '../hooks/useLibrary';
interface Sortbar extends Library {
  count: string;
  selectLabel: string;
  /** `attrubutes` are spread in the component. You can pass from `data-attributes` to events */
  selectAttributes?: React.ComponentPropsWithoutRef<'select'>;
  selectOptions?: {
    [key: string]: string;
  };
  untouched?: boolean;
}
/**
 * Enables to filter and sort content on the page. See [here](https://randstad.design/components/core/filters/blog/)
 *
 */
declare const Sortbar: ({ count, selectLabel, selectAttributes, selectOptions, untouched, libs }: Sortbar) => JSX.Element;
export default Sortbar;
