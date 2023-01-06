import React from "react";
import t from "prop-types";
import Single from "./SelectionControl/Single";
import Multiple from "./SelectionControl/Multiple";
import { componentProps, FieldGroupBase } from "@hoc/withFormGroup";

interface SelectionControl extends FieldGroupBase {
  wrapClass: string[],
  componentProps: componentProps,
  // TODO: Remove any and implement Generic type.
  ChildComponent: any,
}

/**
 * Select from group markup.
 *
 * @private
 */
const SelectionControl = ({ wrapClass, children, ...props }: SelectionControl) => {
  const classes = [...wrapClass];
  classes.push("");

  return children ? (
    <Multiple classes={classes} children={children} {...props} />
  ) : (
    <Single classes={classes} {...props} />
  );
};

SelectionControl.propTypes = {
  wrapClass: t.array,
  children: t.any,
};

export default SelectionControl;
