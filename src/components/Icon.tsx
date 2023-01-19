import React from "react";

interface IconProps {
  type: string;
  className?: string;
  svgProps?: object;
  rest?: object;
}

/**
 * Used for displaying icons.
 * @returns SVG icon
 */
function Icon({type, className = "icon", svgProps, ...rest}: IconProps) {
  if (className) {
    return (
      <span className={className} {...rest}>
        <svg {...svgProps}>
          <use xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${type}`}/>
        </svg>
      </span>
    );
  }
  else {
    return (
      <>
        <svg {...svgProps}>
          <use xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${type}`}/>
        </svg>
      </>
    );
  }
}

export default Icon;
