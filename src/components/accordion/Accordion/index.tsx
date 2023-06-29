import React from 'react';
import { AccordionProps } from './Accordion.types';

/**
 * Expanding and collapsing sections of content. See [here](https://randstad.design/components/core/accordion/)
 *
 */
function Accordion({ children }: AccordionProps) {
  return <ul className="link-list link-list--single accordion">{children}</ul>;
}

export default Accordion;
