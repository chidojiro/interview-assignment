import React from "react";

interface Svg {
  icon: string
}

const Svg = ({ icon }: Svg) => {
  return (
    <svg>
      <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#${icon}`} />
    </svg>
  );
};

export default Svg;
