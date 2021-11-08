import React from "react";
import t from "prop-types";

/**
 * Expanding and collapsing sections of content. See [here](https://randstad.design/components/core/accordion/)
 *
 */
const Accordion = ({ children }) => {
  return <ul className="link-list link-list--single accordion">{children}</ul>;
};

Accordion.propTypes = {
  children: t.any,
};

export default Accordion;
