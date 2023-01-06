import React from "react";
import PropTypes from "prop-types";

import { FieldGroupBase, componentProps } from "@hoc/withFormGroup";

interface Single extends FieldGroupBase {
  classes: string[],
  // TODO: Remove any and implement Generic type.
  ChildComponent: any,
  componentProps: componentProps,
}

const Single = ({
  classes,
  ChildComponent,
  label,
  required,
  optionalLabel = "optional",
  componentProps,
  error,
  description,
} : Single ) => {
  const { fieldLabel, ...props } = componentProps;

  return (
    <div className={classes.join(" ")}>
      {label && (
        <div className="form-group__label">
          {label}
          {!required && <span className="form-group__optional"> {optionalLabel}</span>}
        </div>
      )}

      <div className="form-group__input">
        <ChildComponent label={fieldLabel} {...props} />
      </div>

      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
    </div>
  );
};

export default Single;
