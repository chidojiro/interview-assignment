import React from 'react';
import { Switch } from '@ffw/randstad-local-orbit/js/components/switch';
import withField, { WithFieldProps } from '../../hoc/withField';
import Icon from '../Icon';

type ToggleType = 'light' | 'dark';

interface ToggleProps extends WithFieldProps {
  /** @ignore part of HTML props */
  name: string,
  type?: ToggleType;
  checked: boolean;
  onToggleChange?: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

function Toggle({
  name,
  type = 'light' as ToggleType,
  checked,
  onToggleChange,
}: ToggleProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.dataset.rendered) {
      ref.current.dataset.rendered = 'rendered';
      new Switch(ref.current);
    }
  }, []);

  const onClick = () => {
    if (onToggleChange && name) onToggleChange(name, !checked);
  };

  return (
    <div ref={ref} role="switch" aria-checked={checked} className={`switch__${type}`} data-rs-switch={name} onClick={onClick}>
      <span className={`switch switch__${type}`}>
        <Icon iconClassName="icon" svgProps={{ className: 'checkmark' }} iconType="check-16" />
      </span>
    </div>
  );
}

export default withField(Toggle);
