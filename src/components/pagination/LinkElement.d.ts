import React from 'react';
import { Item, PaginationBase } from './index';
interface LinkElement extends PaginationBase, React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode;
  props: Omit<Item, 'text'> & Partial<Pick<Item, 'text'>>;
}
declare const LinkElement: ({ children, props, as, ...rest }: LinkElement) => JSX.Element;
export default LinkElement;
