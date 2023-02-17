import React from 'react';
import withField, { WithFieldProps } from '../../hoc/withField';

type ToggleType = 'light' | 'dark';

interface ToggleProps extends WithFieldProps {
  /** @ignore part of HTML props */
  name: string,
  type?: ToggleType;
}

function Toggle({
  name,
  type = 'light' as ToggleType,
}: ToggleProps) {
  return (
    <div role="switch" aria-checked={false} className={`switch__${type}`} data-rs-switch={name}>
      <span className={`switch switch__${type}`}>
        <span className="icon">
          <svg className="checkmark">
            <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#check-16" />
          </svg>
        </span>
      </span>
    </div>
  );
}

export default withField(Toggle);
