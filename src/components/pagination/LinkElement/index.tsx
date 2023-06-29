import React from 'react';
import { LinkElementProps } from './LinkElement.types';

function LinkElement({
  children, props, as, ...rest
}: LinkElementProps) {
  const { url, attributes } = props;
  const Element = as || 'a';

  // Append href if its A tag element.
  const elementAttributes = { ...attributes, ...(Element === 'a' ? { href: url } : {}) };

  return (
    <Element {...elementAttributes} {...rest}>
      {children}
    </Element>
  );
}

export default LinkElement;
