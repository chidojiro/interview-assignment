import React, { useState } from 'react';

import FormGroup from '../form-group/FormGroup';
import withField, { WithFieldProps } from '../../hoc/withField';

type ToggleType = 'light' | 'dark';

interface ToggleProps extends WithFieldProps {
  /** @ignore part of HTML props */
  type?: ToggleType;
  toggled?: boolean | undefined;
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
}

function Toggle({
  id,
  type = 'light',
  toggled = false,
  _formGroupProps,
  ...props
}: ToggleProps) {

  return (
    <FormGroup
      {..._formGroupProps}
      _configClasses="form-group--selection-control"
    >
      <div role="switch" aria-checked={toggled} className={`switch__${type}`} data-rs-switch="">
        <span className="switch switch__light">
          <span className="icon">
            <svg className="checkmark">
              <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#check-16"></use>
            </svg>
          </span>
        </span>
      </div>
    </FormGroup>
  );
}

export default withField(Toggle);
