import React from "react";
import cn from "classnames";

import FormGroup from "@components/form-group/FormGroup";
import withField from "@hoc/withField";

interface Checkbox extends WithFieldProps {
  label: string;
  name: string;
  id?: string;
  /** @ignore part of HTML props */
  disabled?: boolean;
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
}

/**
 * A box which enables the user to select one or multiple options. See [here](https://randstad.design/components/core/forms/checkbox/)
 *
 * ---
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */
const Checkbox = ({
  id,
  label,
  disabled,
  _formGroupProps,
  ...props
}: Checkbox) => {

  return (
    <FormGroup
      {..._formGroupProps}
      _configClasses="form-group--selection-control">
      <label
        htmlFor={id}
        className={cn("selection-control", "selection-control--checkbox", {
          "selection-control--disabled": disabled,
        })}>
        <span className="selection-control__input">
          <input id={id} type="checkbox" {...props} />
          <span className="icon selection-control__control" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <polyline points="2.1,8.5 6.2,12.4 13.9,5.1"></polyline>
            </svg>
          </span>
        </span>
        <span className="selection-control__label">{label}</span>
      </label>
    </FormGroup>
  );
};

export default withField(Checkbox);
