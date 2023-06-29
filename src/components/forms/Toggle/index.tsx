import React from 'react';
import { Switch } from '@ffw/randstad-local-orbit/js/components/switch';
import withField from '../../../hoc/withField';
import Icon from '../../common/Icon';
import { ToggleProps, ToggleType } from './Toggle.types';

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
    <div
      ref={ref}
      role="switch"
      aria-checked={checked}
      className={`switch__${type}`}
      tabIndex={0}
      data-rs-switch={name}
      onClick={onClick}
      onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space' ? onClick() : null)}
    >
      <span className={`switch switch__${type}`}>
        <Icon iconClassName="icon" svgProps={{ className: 'checkmark' }} iconType="check-16" />
      </span>
    </div>
  );
}

export default withField(Toggle);
