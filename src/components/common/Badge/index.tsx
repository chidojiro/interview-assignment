import React from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import { BadgeProps } from './Badge.types';

/**
 * Badges are labels which hold small amounts of information. See [here](https://randstad.design/components/core/badge/)
 *
 */
function Badge({
  children,
  color,
  icon,
  size,
}: BadgeProps) {
  const badgeClass = cn({
    badge: true,
    [`badge--${color}`]: color,
    [`badge--${size}`]: size,
  });

  return (
    <span className={badgeClass}>
      {icon && <Icon iconClassName="icon icon--s icon--inline mr-xs" iconType={icon} />}
      <span className="badge__text">{children}</span>
    </span>
  );
}

export default Badge;
