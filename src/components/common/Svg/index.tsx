import React from 'react';
import { SvgProps } from './Svg.types';

function Svg({ icon }: SvgProps) {
  const svgPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? <use xlinkHref={`/img/icons.svg#${icon}`} /> : <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#${icon}`} />;

  return (
    <svg>
      {svgPath}
    </svg>
  );
}

export default Svg;
