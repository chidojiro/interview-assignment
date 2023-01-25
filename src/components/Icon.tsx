import React from 'react';

interface IconProps {
  iconType: string;
  iconClassName?: string;
  svgProps?: object;
  rest?: object;
}

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
  if (iconClassName) {
    return (
      <span className={iconClassName} {...rest}>
        <svg {...svgProps}>
          <use xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${iconType}`} />
        </svg>
      </span>
    );
  }
  return (
    <svg {...svgProps}>
      <use xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${iconType}`} />
    </svg>
  );
}

export default Icon;
