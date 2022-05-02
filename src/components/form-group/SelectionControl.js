import React from "react";
import t from "prop-types";
import Single from "./SelectionControl/Single";
import Multiple from "./SelectionControl/Multiple";

/**
 * Select from group markup.
 *
 * @private
 */
const SelectionControl = ({ wrapClass, children, ...props }) => {
  const classes = [...wrapClass];
  classes.push("form-group--selection-control");

  return children ? (
    <Multiple classes={classes} {...props}>
      {children}
    </Multiple>
  ) : (
    <Single classes={classes} {...props} />
  );
};

SelectionControl.propTypes = {
  wrapClass: t.array,
  children: t.any,
};

export default SelectionControl;
