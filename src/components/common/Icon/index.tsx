import React from 'react';
import { IconProps } from './Icon.types';

/**
 * Used for displaying icons.
 * @returns SVG icon
 */
function Icon({
  iconType,
  iconClassName = 'icon',
  svgProps,
  ...rest
}: IconProps) {
  const svgPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? <use xlinkHref={`/img/icons.svg#${iconType}`} /> : <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#${iconType}`} />;

  if (iconClassName) {
    return (
      <span className={iconClassName} {...rest}>
        <svg {...svgProps}>
          {svgPath}
        </svg>
      </span>
    );
  }
  return (
    <svg {...svgProps}>
      {svgPath}
    </svg>
  );
}

export default Icon;
