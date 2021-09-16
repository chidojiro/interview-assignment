import React from "react";
import t from "prop-types";

const AccordionList = ({ children }) => {
  return <ul className="link-list link-list--single accordion">{children}</ul>;
};

AccordionList.propTypes = {
  children: t.any,
};

export default AccordionList;
