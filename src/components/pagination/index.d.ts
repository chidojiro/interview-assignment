import React from 'react';
import { LinkProps, Link } from 'react-router-dom';
export interface Item {
  text: string;
  url: string;
  attributes?: React.ComponentPropsWithoutRef<'a'> | LinkProps;
}
export interface PaginationBase {
  as?: typeof Link | 'a';
}
export interface Pagination extends PaginationBase {
  pages: Item[];
  currentPage: string;
  /** Define the tag of the link element. By default its `<a>`. Could be also `<Link>` */
  previousArrowLink?: Item;
  /** `attrubutes` are spread in the component. You can pass from `data-attributes` to events */
  nextArrowLink?: Item;
}
/**
 * A component to let the user navigate through different pages of results. See [here](https://randstad.design/components/core/pagination/)
 *
 */
declare const Pagination: ({ pages, currentPage, as, previousArrowLink, nextArrowLink }: Pagination) => JSX.Element | null;
export default Pagination;
