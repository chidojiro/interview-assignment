import React from "react";
import { Item, PaginationBase } from './index'

interface LinkElement extends PaginationBase, React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode,
  props:  Omit<Item, "text"> & Partial<Pick<Item, "text">>,
}

const LinkElement = ({ children, props, as, ...rest }: LinkElement) => {
  const { url, attributes } = props;
  const Element = as ? as : "a";

  // Append href if its A tag element.
  let elementAttributes = { ...attributes, ...(Element === "a" ? { href: url } : {})  };

  return (
    <Element {...elementAttributes} {...rest}>
      {children}
    </Element>
  );
};

export default LinkElement