import React from "react";
import t from "prop-types";
import Single from "./SelectionControl/Single";
import Multiple from "./SelectionControl/Multiple";

/**
 * Select from group markup.
 *
 * @private
 */
const SelectionControl = ({ wrapClass, ...props }) => {
  const classes = [...wrapClass];
  classes.push("form-group--selection-control");

  const { componentProps } = props;

  return componentProps && componentProps.children ? (
    <Multiple classes={classes} {...props}>
      {componentProps.children}
    </Multiple>
  ) : (
    <Single classes={classes} {...props} />
  );
};

SelectionControl.propTypes = {
  wrapClass: t.array,
  children: t.any,
  componentProps: t.any,
};

export default SelectionControl;
