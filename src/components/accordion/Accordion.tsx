import React from "react";

interface Accordion {
  children: React.ReactNode
}

/**
 * Expanding and collapsing sections of content. See [here](https://randstad.design/components/core/accordion/)
 *
 */
const Accordion = ({ children }: Accordion) => {
  return <ul className="link-list link-list--single accordion">{children}</ul>;
};

export default Accordion;
