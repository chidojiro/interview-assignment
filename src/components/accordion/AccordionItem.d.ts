import React from 'react';
import { Library } from '../../hooks/useLibrary';
interface AccordionItem extends Library {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  expanded?: boolean;
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  HeadingTag?: keyof JSX.IntrinsicElements;
  ariaLabel: string;
}
/**
 * Expanding and collapsing sections of content. See [here](https://randstad.design/components/core/accordion/)
 *
 */
declare const AccordionItem: ({ children, title, subtitle, expanded, libs, HeadingTag, ariaLabel, ...attr }: AccordionItem) => JSX.Element;
export default AccordionItem;
