import React from "react";

import { FieldGroupBase, componentProps } from '@hoc/withFormGroup'

interface Basic extends FieldGroupBase {
  wrapClass: string[],
  id: string,
  // TODO: Remove any and implement Generic type.
  ChildComponent: any,
  componentProps: componentProps,
}

/**
 * Basic form group markup.
 *
 * @ignore
 */
const Basic = ({
  wrapClass,
  label,
  id,
  required,
  optionalLabel,
  ChildComponent,
  componentProps,
  error,
  description,
  children,
}: Basic) => {

  return (
    <div className={wrapClass.join(" ")}>
      {label && (
        <label className="form-group__label" htmlFor={id}>
          {label}
          {!required && (
            <span className="form-group__optional"> {optionalLabel || "optional"}</span>
          )}
        </label>
      )}
      <div className="form-group__input">
        {componentProps.capitalize}
        <ChildComponent />
      </div>
      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
      {children}
    </div>
  );
};

export default Basic;
