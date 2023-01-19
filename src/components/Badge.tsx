import React from "react";
import cn from "classnames";
import Icon from "@components/Icon";

interface BadgeProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "positive"
    | "negative"
    | "senary"
    | "primary-tint-7"
    | "tertiary-shade-110";
  icon?: any;
  size?: "s" | "l" | "xl";
}

/**
 * Badges are labels which hold small amounts of information. See [here](https://randstad.design/components/core/badge/)
 *
 */
function Badge({ children, color, icon, size }: BadgeProps) {
  let badgeClass = cn({
    'badge': true,
    [`badge--${color}`]: color,
    [`badge--${size}`]: size
  });

  return (
    <span className={badgeClass}>
      {icon && <Icon className="icon icon--s icon--inline mr-xs" type={icon} />}
      <span className="badge__text">{children}</span>
    </span>
  );
};

export default Badge;
