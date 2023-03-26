import React from 'react';
import withField, { WithFieldProps } from '../../hoc/withField';
import Icon from '../Icon';

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
        <Icon iconClassName="icon" svgProps={{className: 'checkmark'}} iconType="check-16" />
      </span>
    </div>
  );
}

export default withField(Toggle);
