import React from 'react';
import { Library } from '../hooks/useLibrary';
interface Filter extends Library {
  title: string;
  mobileTitle: string;
  children: any;
  footer: React.ReactElement;
  clearLink: React.ReactNode;
  closeMobileOnSubmit: boolean;
}
/**
 * A bundle of different form elements and manipulating the page of search results. See [here](https://randstad.design/components/core/filters/blog/)
 *
 */
declare const Filter: ({ title, mobileTitle, children, footer, clearLink, closeMobileOnSubmit, libs }: Filter) => JSX.Element;
export default Filter;
